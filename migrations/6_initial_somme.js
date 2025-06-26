var s = artifacts.require("somme");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(s);
};