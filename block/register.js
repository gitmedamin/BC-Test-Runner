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

    /* Initialize the contract, get the contract, do not need to use the at() method;
        Display contract name and age information*/
    initContract: function() {

        $.getJSON('contracts/Register.json', function(data) {
            App.contracts.Register = TruffleContract(data);
            App.contracts.Register.setProvider(App.web3Provider);

        });
        App.setinfo();
        App.getinfo();
    },


    getinfo: function() {
        $("#get").click(function() {

            App.contracts.Register.deployed().then(function(instance) {

                return instance.getInfo.call();
            }).then(function(r) {
                const htmlLabel = document.getElementById('hello-result');
                htmlLabel.innerHTML = r;
                console.log(r);
            }).catch(function(err) {
                console.error(err);
            });
        });
    },

    setinfo: function() {
        var r;
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
            console.log('Account: ' + account);
            web3.eth.defaultAccount = account;

        });
        $("#set").click(function() {
            info = $("#newInfo").val()
            const h = document.getElementById('tx');
            App.contracts.Register.deployed().then(function(instance) {
                return instance.setInfo(info, { from: account });
            }).then(function(result) {
                console.log(result);

                r = result;




            });

            $("#newInfo").val();
        });




    },


}



$(function() {
    $(window).load(function() {
        App.init();
    });
});