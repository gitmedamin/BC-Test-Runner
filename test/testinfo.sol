pragma solidity ^0.5.16;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/InfoContract.sol";

contract TestInfoContract {
   InfoContract info = InfoContract(DeployedAddresses.InfoContract());
   string name;
   uint age;

   function testInfo () public {
     info.setInfo("ABC", 10);

     (name, age) = info.getInfo();

           Assert.equal(name, "ABC", "Set name error");
           Assert.equal(age, 10, "Set age error");
   }
}