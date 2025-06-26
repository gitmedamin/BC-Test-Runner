var E = artifacts.require("FirstContract");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(E);
};