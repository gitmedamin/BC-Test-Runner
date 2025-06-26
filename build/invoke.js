function invoke(objet, oracle, i, start) {

    h.methods[selfonc].apply(h.methods, objet)["call"]({ from: $("#from").val() }).then(result => {
        console.log("result", result)
        c = 1
        p = 0
        I = 0
        fa = 0

        if (result == oracle) {
            end = +new Date();
            p = 1
            console.log("pass")
            p1 = p1 + "test[" + i + "]" + (end - start) + "ms                            " + "           Passed" + "<br>"
            nb = "test[" + i + "]  " + (end - start) + "ms" + "  Passed"
        } else if (result != oracle) {
            end = +new Date();
            fa = 1
            fa1 = fa1 + "test[" + i + "]               " + (end - start) + "                      ms" + "           failed" + "<br>"
            nb = "test[" + i + "]  " + (end - start) + "ms" + "  failed"
            console.log("fail")
        } else {
            I = 1
        }
        fail = fail + fa
        pass = pass + p


        testcases = testcases + c;
        console.log("c", testcases)
        Inconclusive = Inconclusive + I
        pa.innerHTML = "Passed (" + pass + ")";
        failed.innerHTML = "failed (" + fail + " )"
        testcas.innerHTML = "Testcases (" + testcases + ")"
        Pd.innerHTML = p1
        block.innerHTML = fa1
        f = f + nb + "\n"






    })
}






function invoke1(objet) {


    h.methods[$("#mySelect").val()].apply(h.methods, objet)["send"]({ from: $("#from").val() }).then(result => {
        console.log(result)

        var c = "blockHash: " + result["blockHash"] + "<br>" + "blockNumber: " + result["blockNumber"] + "<br>" + "from: " + result["from"] + "<br>" + "gasUsed : " + result["gasUsed"] + "<br>" + "status: " + result["status"] + "<br>" + "to: " + result["to"] + "<br>" + "transactionHash: " + result["transactionHash"] + "br"
        tr = tr + c;
        Tr.innerHTML = "Transacation[" + i + "]  <br>  {" + tr + "}"


    })


}






/*i = 0;

c1 = result;
p = 0;
fa = 0;
I = 0
cm = 1

if (c1 == c) {
    p = 1;

    nb = "|   " + a + "|   " + b + "|   " + c1 + "|   " + c + "|   pass|";
    console.log(nb);
} else if (c1 != c) {
    fa = 1

    nb = "|   " + a + "|   " + b + "|   " + c1 + "|   " + c + "|   fail|";
    console.log(nb);
} else {
    I = 1;
    nb = "|   " + a + "|   " + b + "|   " + c1 + "|   " + c + "|   Inconclusive|";
}

f = f + nb + "\n";
pass = pass + p
cmp = cmp + cm
Inconclusive = Inconclusive + I


fail = fail + fa;

Result = "Test cases:" + cmp + "       " + "  " + "Pass :" + pass +
    " " + "Fail:" + fail
console.log("pass", pass)

if (cmp == tab.length) {
    htmlLabel.innerHTML = Result;
    if (fail == 0) {

        gv = "pass"
        htmlLabel.innerHTML = Result + "    " + "global verdict :" + gv;
    } else {
        gv = "fail"
        htmlLabel.innerHTML = Result + "    " + "global verdict :" + gv;
    }


} else {
    // move();

    //  htmlLabel.innerHTML = "running test..." + nb

}*/



// const htmlLabel = document.getElementById('hello-result');

//a = $("#valeur1").val();
//b = $("#valeur2").val();
// h.methods.sum(a, b).call({ from: account }).then(result => {
//    htmlLabel.innerHTML = result;
//   c1 = result;


// });
// $("#sum").val('');
//$("#sum").val('');*/