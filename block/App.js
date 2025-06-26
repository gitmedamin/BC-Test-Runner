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

        $.getJSON('contracts/FirstContract.json', function(data) {
            App.contracts.FirstContract = TruffleContract(data);
            App.contracts.FirstContract.setProvider(App.web3Provider);

            App.getInteger();
            //App.watchChanged();


        });

        App.bindEvents();

    },

    getInteger: function() {
        App.contracts.FirstContract.deployed().then(function(instance) {

            return instance.getInteger.call();
        }).then(function(result) {
            const htmlLabel = document.getElementById('myLabel');



            htmlLabel.innerHTML = result;

            console.log(result);
        }).catch(function(err) {
            console.error(err);
        });
    },

    /*Click the button to update the name and age, you need to update to the smart contract */
    bindEvents: function() {
        $("#button").click(function() {
            $("#loader").show();

            App.contracts.InfoContract.deployed().then(function(instance) {
                return instance.setInfo($("#name").val(), $("#age").val(), { gas: 500000 });
            }).then(function(result) {
                return App.getInfo();
            }).catch(function(err) {
                console.error(err);
            });
        });
    },

    watchChanged: function() {
        App.contracts.InfoContract.deployed().then(function(instance) {
            var infoEvent = instance.Instructor();
            return infoEvent.watch(function(err, result) {
                $("#loader").hide();
                $("#info").html(result.args.name + ' (' + result.args.age + ' years old)');
            });
        });
    }

}



$(function() {
    $(window).load(function() {
        App.init();
    });
});