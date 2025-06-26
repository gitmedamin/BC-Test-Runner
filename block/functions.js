function get() {
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

}

function set() {
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
        account1 = accounts[1];
        console.log('Account: ' + account);
        web3.eth.defaultAccount = account;

    });
    $("#set").click(function() {
        info = $("#newInfo").val()
        const h = document.getElementById('tx');
        App.contracts.Register.deployed().then(function(instance) {
            return instance.setInfo(info, { from: account, to: account1 });
        }).then(function(result) {
            console.log(result);

            r = result;




        });

        $("#newInfo").val();
    });

}