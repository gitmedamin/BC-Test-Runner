pragma solidity ^0.5.16; 

contract helloword {
    
    function hello() public pure returns(string memory){
        return "blockchain";
    }
    function get() public pure returns(uint,uint){
        return (123,123);
    }
   
    }