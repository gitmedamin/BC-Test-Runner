pragma solidity ^0.5.16;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/helloword.sol";
contract TesthelloContract {
    string c;
   helloword  h = helloword(DeployedAddresses.helloword());
   function testhello () public {
  c= h.hello();
  Assert.equal(c,"hello word","Set name error");}}