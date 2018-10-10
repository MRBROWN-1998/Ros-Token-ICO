var RosToken = artifacts.require("./RosToken.sol");
var RosTokenSale = artifacts.require("./RosTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(RosToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(RosTokenSale, RosToken.address, tokenPrice);
  });
};
