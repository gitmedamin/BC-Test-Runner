web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
//}

var contractaddress = '0xB3cebA27Cd7D121623897A399Eee6de958D1812A';
var abi = JSON.parse(' [{"anonymous": false,"inputs": [{ "indexed": false,"internalType": "uint256","name": "gas", "type": "uint256"}],"name": "Log","type": "event"},{"payable": true,"stateMutability": "payable","type": "fallback"},{"constant": true,"inputs": [],"name": "getBalance","outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false,"stateMutability": "view","type": "function"}]');

contract = new web3.eth.Contract(abi, contractaddress);


function getAccounts() {
    var account;
    web3.eth.getAccounts(function(err, accounts) {
        if (err != null) {
            alert("Error retrieving accounts.");
            return;
        }
        if (accounts.length == 0) {
            alert("No account found! Make sure the Ethereum client is configured properly.");
            return;
        }
        account = accounts[0];

        web3.eth.defaultAccount = account;
        const htmlLabel = document.getElementById('hello-result');
        htmlLabel.innerHTML = account;

    });
}





function getBalance() {
    const htmlLabel = document.getElementById('hell');

    contract.methods.getBalance().call().then(result => {


        htmlLabel.innerHTML = result;
    })


}