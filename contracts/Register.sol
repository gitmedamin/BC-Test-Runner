pragma solidity 0.5.16;

contract Register {
    string public info="web3";
event ValueSet(string  info);
    function setInfo(string memory _info) public {
        info = _info;
        emit ValueSet(info);
    }

    function getInfo() public view returns (string memory) {
        return info;
    }
}