pragma solidity ^0.5.16;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Register.sol";
contract TestregisterContract {
   Register R = Register(DeployedAddresses.Register());
   string private info;

   function testregister() public {
       string memory _info="hello";
     R.setInfo(_info);

     info = R.getInfo();

           Assert.equal(info, "hello" , "Set name error");
          
   }
}