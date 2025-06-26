App = {
    web3Provider: null,
    contracts: {},

    init: function() {
        return App.initWeb3();
    },
    /*Load web3*/
    initWeb3: function() {
        f1()

        return App.initContract();

    },
    /* Initialize the contract, get the contract, do not need to use the at() method;
        Display contract name and age information*/
    initContract: function() {
        App.read();
        App.setinfo();
        App.getinfo();
    },
    read: function() {





        read()

    },
    getinfo: function() {
        get();
    },

    setinfo: function() {
        set();
    },
}

$(function() {
    $(window).load(function() {
        App.init();
    });
});