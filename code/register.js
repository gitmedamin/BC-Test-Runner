   //if (typeof web3 !== 'undefined') {
   //  web3 = new Web3(web3.currentProvider);
   // } else {
   // set the provider you want from Web3.providers
   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
   //}

   var contractaddress = '0xDA5780B38a649DdFE3957F5b30656E468499F951';
   var abi = JSON.parse('[{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_info","type":"string"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');

   contract = new web3.eth.Contract(abi, contractaddress);
   // 
   web3.eth.accounts.create()
       // web3.eth.getBlock(31)
       //document.getElementById("tx").innerHTML = web3.eth.getBlock(31)
       // .then(console.log

   // );

   // web3.eth.getBalance(contractaddress, (err, wei) => {
   //   balance = web3.utils.fromWei(wei, 'ether')
   //   console.log(balance)
   // })

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
       console.log('Account: ' + account);
       web3.eth.defaultAccount = account;

   });


   function getinfo() {
       const htmlLabel = document.getElementById('hello-result');

       contract.methods.getInfo().call({ from: account }).then(result => {
           htmlLabel.innerHTML = result;
           //h.methods.hello().call()
           //.then(console.log);

       })
   }
   var t;

   function setinfo() {
       //const h = document.getElementById('tx');
       info = $("#newInfo").val();
       contract.methods.setInfo(info).send({ from: account }).then(function(tx) {

           console.log("Transaction: ", tx);
           // document.write(tx);

           // 
       });


       $("#newInfo").val('');


   }