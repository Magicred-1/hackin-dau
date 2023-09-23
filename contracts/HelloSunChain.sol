// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract HelloSunChain is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string public baseTokenURI = "https://emerald-impressive-salmon-919.mypinata.cloud/ipfs/QmUdduYrxAksA93kjYUwPMmqGfAV62m5jerRt4TeahEaKY";
    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public constant PRICE = 0.001 ether;

    event CreatedNFT(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("Hello SunChain", "HSC") {}

    function mint() public payable {
        require(totalSupply() < MAX_SUPPLY, "All tokens have been minted");
        require(msg.value >= PRICE, "Ether value sent is not correct");

        uint256 newItemId = _tokenIds.current();
        _tokenIds.increment();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, baseTokenURI);

        emit CreatedNFT(newItemId, baseTokenURI);
    }
        
    function burn(uint256 tokenId) public onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        _burn(tokenId);
    }
    
    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }

    function setBaseURI(string memory newBaseURI) public onlyOwner {
        baseTokenURI = newBaseURI;
    }

    function setTokenURI(uint256 tokenId, string memory newTokenURI) public onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        _setTokenURI(tokenId, newTokenURI);
    }
}
