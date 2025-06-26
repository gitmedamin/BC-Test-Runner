function f1() {
    if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(App.web3Provider);
    } else {
        App.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545")
        web3 = new Web3(App.web3Provider);

    }
}