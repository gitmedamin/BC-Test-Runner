web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

var account;
var y, s;
var h;
var f
var fail
var pass
var m, n, b
var contractName
var networkType
var addcontract
var transactionHash
var updatedAt
var properties
var Result
var testcases;
var cmp
var Inconclusive
var data
var selfonc
var fonction = {};
var Inputparameters
var outputparameters
var inputs = " "




//

//console.log(su)
//console.log("s", su)
var tab = new Array();




const htmlLabel = document.getElementById('Result');

const block = document.getElementById('Block');
const Pd = document.getElementById('Pd');
const Tr = document.getElementById('Transaction');
const set = document.getElementById('set');
const pa = document.getElementById('Passed');
const failed = document.getElementById('Failed');
const testcas = document.getElementById('Testcases');



readfiletxt(function(result) {

    //console.log(t);
    var l = result.split("\r\n");

    console.log("l= ", l);

    for (i = 0; i < l.length; i++) {
        tab[i] = (l[i].split(';'));

        console.log("tab=", tab)


    }
    //for (i = 0; i < tab.length; i++) {



    // }



})


console.log("TAB", tab);








web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
        alert("Error retrieving accounts.");
        return;
    }
    if (accounts.length == 0) {
        alert("No account found! Make sure the Ethereum client is configured properly.");
        return;
    }
    for (i = 0; i < accounts.length; i++) {
        account = accounts[i];
        console.log('Account: ' + account);
        var z = document.createElement("option");
        z.setAttribute("value", account);
        var t = document.createTextNode(account);
        z.appendChild(t);
        document.getElementById("from").appendChild(z);

    }


    web3.eth.defaultAccount = account;
});






readfilejson(function(result) {
    data = JSON.parse(result);
    console.log(data.contractName);
    console.log(data);

    contractName = data.contractName;
    networkType = data.networkType
    addcontract = data.networks[5777].address
    transactionHash = data.networks[5777].transactionHash
    updatedAt = data.updatedAt

    console.log(contractName);
    console.log(networkType)
    console.log(addcontract)
    console.log(transactionHash)
    console.log(updatedAt)

    //var select = document.createElement("SELECT");
    //select.setAttribute("id", "mySelect");

    //document.body.appendChild(select);

    for (i = 0; i < data.abi.length; i++) {
        if (data.abi[i].type == "function") {
            fonction[data.abi[i].name] = [data.abi[i].inputs.length, data.abi[i].outputs.length]
            var c = data.abi[i].name
            var k = ""
            for (j = 0; j < data.abi[i].inputs.length; j++) {



                r = data.abi[i].inputs[j].type;
                k = k + " " + r
            }
            c = c + "(" + k + ") "

            //
            var z = document.createElement("option");
            z.setAttribute("value", data.abi[i].name);
            var t = document.createTextNode(c);
            z.appendChild(t);
            document.getElementById("mySelect").appendChild(z);

        }
        console.log(fonction)
            /*else if (data.abi[i].type == "fallback") {
                       var z = document.createElement("option");
                       z.setAttribute("value", data.abi[i].type);
                       var t = document.createTextNode("fallback");
                       z.appendChild(t);
                       document.getElementById("fallback").appendChild(z);

                   } else if (data.abi[i].type == "event") {
                       var z = document.createElement("option");
                       z.setAttribute("value", data.abi[i].name);
                       var t = document.createTextNode(data.abi[i].name);
                       z.appendChild(t);
                       document.getElementById("event").appendChild(z);
                   } else {

                   }*/
    }



    /* for (i = 0; i < data.abi.length; i++) {
          // for (j = 0; j < data.abi[i].inputs.length; j++) {
          var w = document.createElement("option");
          w.setAttribute("value", data.abi[i].inputs.length);
          var tt = document.createTextNode(data.abi[i].inputs.length);
          w.appendChild(tt);
          document.getElementById("Input").appendChild(w);

          //  }
      }
      for (i = 0; i < data.abi.length; i++) {
          // for (j = 0; j < data.abi[i].outputs.length; j++) {
          var w = document.createElement("option");
          w.setAttribute("value", data.abi[i].outputs.length);
          var tt = document.createTextNode(data.abi[i].outputs.length);
          w.appendChild(tt);
          document.getElementById("Output").appendChild(w);

          //}
      }*/




    var x = data.networks[5777].address
    var z = data.abi;
    s = z;


    y = x;



    h = new web3.eth.Contract(s, y);


})

function Changefonc() {
    var fonclist = document.getElementById("mySelect");
    selfonc = fonclist.options[fonclist.selectedIndex].value;
    // while (Inputparameters, outputparameters) {
    //  Inputparameters.remove()
    //  outputparameters.remove()
    // modelList.remove(0);
    // }
    console.log(selfonc)
    fonc = fonction[selfonc];
    if (fonc) {
        Inputparameters = fonc[0]
        outputparameters = fonc[1]


    }

    console.log(Inputparameters, outputparameters)
}