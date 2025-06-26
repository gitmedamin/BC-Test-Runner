function test() {
    f = ""

    start = +new Date();
    p1 = "title" + "Duration" + "    Status" + "<br>"
    fa1 = "Title" + "                                                                                                       Duration" + "                                                                       Status" + "<br>"
    pass = 0;
    fail = 0;
    testcases = 0 //
    cmp = 0
    Inconclusive = 0
    tr = ""







    //input1 = tab[i][0];

    // input2 = tab[i][1]
    // input3 = tab[i][2]
    var input = new Array();
    var objet = {}
    var parametre = Inputparameters
    for (i = 0; i < tab.length; i++) {

        c = tab[i]
            // console.log("c", c)


        for (k = 0; k < parametre; k++) {
            ch = c[k]
            var listch = new Array()

            if (ch.charAt(0) == "[" && ch.charAt(ch.length - 1) == "]") {


                console.log("ch", ch)
                ch1 = ch.substr(1, ((ch.length) - 2))
                console.log("ch1", ch1)
                listch = ch1.split(',')
                    // for (m = 0; m < ch1.length; m += 2) {
                    // listch[m] = ch[m]
                    // }
                console.log("listch", listch)
                input[k] = listch
            } else {
                input[k] = ch
            }



        }
        objet = input





        oracle = c[parametre]

        console.log('input', input)
        console.log('objet', objet)


        if ((Inputparameters != 0) && (outputparameters == 0)) {
            // invoke1(input, oracle, i, start);
            invoke1(objet);

        } else {
            invoke(objet, oracle, i, start);

        }

    }





    // console.log('j', j)

    // }


    /* switch (parseInt($("#Input").val())) {

         case 0:
             call0(input1, input2, input3, i, start);

             break
         case 1:
             call1(input1, input2, input3);
             break

         case 2:
             call2(input1, input2, input3, i, start);
             break
         case 3:
             call3();

         default:
             call0();

     }*/

}






/*function test() {


    f = "|Input1" + "|Input2" + "|Output" + "|Oracle" + "| Result|" + "\n";


    var c1


    pass = 0;
    fail = 0;
    cmp = 0
    Inconclusive = 0



    for (i = 0; i < tab.length; i++) {




        a = parseInt(tab[i][0]);
        b = parseInt(tab[i][1])
        c = parseInt(tab[i][2])
            // a = tab[i][0];
            // b = tab[i][1]
            // c = tab[i][2]

        somme(a, b, c);



    }






}*/