// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Marketplace is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;
    uint256 private _listingPrice = 0.001 ether;
    address private _owner;
    uint256 private _ownerCut = 5; // 5%

    struct MarketItem {
        uint256 itemId;
        address owner;
        address nftContract;
        uint256 tokenId;
        uint256 price;
        bool isSold;
    }

    mapping(uint256 => MarketItem) private _marketItems;

    event ItemListed(uint256 indexed itemId, address indexed owner, address indexed nftContract, uint256 tokenId, uint256 price);
    event ItemSold(uint256 indexed itemId, address indexed buyer, uint256 price);

    constructor(address owner) {
        _owner = address(owner);
    }

    function listItem(address _nftContract, uint256 _tokenId, uint256 _price) external {
        require(_price >= _listingPrice, "Price must be at least the listing price");
        require(IERC721(_nftContract).ownerOf(_tokenId) == msg.sender, "Only the owner can list this item");

        _itemIds.increment();
        uint256 itemId = _itemIds.current();

        _marketItems[itemId] = MarketItem({
            itemId: itemId,
            owner: msg.sender,
            nftContract: _nftContract,
            tokenId: _tokenId,
            price: _price,
            isSold: false
        });

        emit ItemListed(itemId, msg.sender, _nftContract, _tokenId, _price);
    }

    function buyItem(uint256 _itemId) external payable {
        MarketItem storage item = _marketItems[_itemId];
        require(item.itemId > 0, "Item does not exist");
        require(!item.isSold, "Item is already sold");
        require(msg.value >= item.price, "Insufficient funds to purchase");

        item.isSold = true;
        _itemsSold.increment();
        
        // Transfer the NFT to the buyer
        IERC721(item.nftContract).safeTransferFrom(address(this), msg.sender, item.tokenId);

        // Transfer the fee to the owner
        payable(_owner).transfer((msg.value * _ownerCut) / 100);

        // Transfer the funds to the seller
        payable(item.owner).transfer(msg.value - ((msg.value * _ownerCut) / 100));

        emit ItemSold(item.itemId, msg.sender, item.price);
    }

    function getItem(uint256 _itemId)
        external
        view
        returns (
            uint256 itemId,
            address owner,
            address nftContract,
            uint256 tokenId,
            uint256 price,
            bool isSold
        )
    {
        MarketItem storage item = _marketItems[_itemId];
        require(item.itemId > 0, "Item does not exist");

        return (
            item.itemId,
            item.owner,
            item.nftContract,
            item.tokenId,
            item.price,
            item.isSold
        );
    }

    function getListingPrice() external view returns (uint256) {
        return _listingPrice;
    }

    function getTotalItems() external view returns (uint256) {
        return _itemIds.current();
    }

    function getTotalItemsSold() external view returns (uint256) {
        return _itemsSold.current();
    }
}
