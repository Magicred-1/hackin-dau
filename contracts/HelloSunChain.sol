// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract HelloSunChain is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string public baseTokenURI =
        "https://emerald-impressive-salmon-919.mypinata.cloud/ipfs/QmUdduYrxAksA93kjYUwPMmqGfAV62m5jerRt4TeahEaKY";
    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public constant PRICE = 0.001 ether;

    mapping(address => uint256[]) private userTokens;

    event CreatedNFT(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("Hello SunChain", "HSC") {}

    function mint() public payable {
        require(totalSupply() < MAX_SUPPLY, "All tokens have been minted");
        require(msg.value >= PRICE, "Ether value sent is not correct");

        uint256 newItemId = _tokenIds.current();
        _tokenIds.increment();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, baseTokenURI);

        userTokens[msg.sender].push(newItemId);

        emit CreatedNFT(newItemId, baseTokenURI);
    }

    function burn(uint256 tokenId) public onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        _removeTokenFromUser(msg.sender, tokenId);
        _burn(tokenId);
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }

    function setBaseURI(string memory newBaseURI) public onlyOwner {
        baseTokenURI = newBaseURI;
    }

    function setTokenURI(
        uint256 tokenId,
        string memory newTokenURI
    ) public onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        _setTokenURI(tokenId, newTokenURI);
    }

    function getUserNFTs(address user) public view returns (uint256[] memory) {
        return userTokens[user];
    }

    function getUserTokenURIs(
        address user
    ) public view returns (string[] memory) {
        uint256[] memory tokens = userTokens[user];
        string[] memory tokenURIs = new string[](tokens.length);

        for (uint256 i = 0; i < tokens.length; i++) {
            tokenURIs[i] = tokenURI(tokens[i]);
        }

        return tokenURIs;
    }

    function _removeTokenFromUser(address user, uint256 tokenId) internal {
        uint256[] storage tokens = userTokens[user];
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == tokenId) {
                if (i != tokens.length - 1) {
                    tokens[i] = tokens[tokens.length - 1];
                }
                tokens.pop();
                break;
            }
        }
    }
}
