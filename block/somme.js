App = {

    web3Provider: null,
    contracts: {},

    init: function() {
        return App.initWeb3();
    },

    /*Load web3*/
    initWeb3: function() {
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider
            web3 = new Web3(App.web3Provider);
        } else {
            App.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545")
            web3 = new Web3(App.web3Provider);
        }

        return App.initContract();
    },

    /* Initialize the contract*/
    initContract: function() {
        const htmlLabel = document.getElementById('h');
        $.getJSON('contracts/somme.json', function(data) {
            App.contracts.somme = TruffleContract(data);
            App.contracts.somme.setProvider(App.web3Provider);
            //web3.eth.getBlockNumber().then(console.log)
            // web3.eth.getBlock(14).then(result => {
            //console.log(result)
            // htmlLabel.innerHTML = result;
            // document.write("gasLimit    :", result["gasLimit"],
            //    " gasUsed  :", result["gasUsed"],
            //     "   hash   :   ", result["hash"], "    nonce  :", result["nonce"], "  timestamp  :", result["timestamp"])
            // })
            // web3.eth.getTransaction('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b§234')
            //.then(console.log);
            // web3.eth.getTransactionFromBlock('45', 0)
            //  .then(console.log);






        });


        App.somme();

    },




    somme: function() {



        somme()



    },




}



$(function() {
    $(window).load(function() {
        App.init();
    });
});