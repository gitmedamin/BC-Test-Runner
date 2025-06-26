function readfiletxt(result) {
    var fileInput = document.querySelector('#filetxt');
    fileInput.onchange = function() {
        var reader = new FileReader();
        reader.onload = function() {

            const x = reader.result;
            result(x);











            //for (i = 0; i < lines.length; i++) {
            //   var c = lines.split("/");

            //for (j = 0; j < c.length; i++) {
            //   var f = c[j]
            // console.log(c);

            //}



            //}




            //const htmlLabel = document.getElementById('h');
            // htmlLabel.innerHTML = lines[1];


            // var a = lines[0];
            // var b = lines[1];
            // A = a;
            // B = b;

            // n1 = parseInt(a);
            // n2 = parseInt(b);

        };

        reader.readAsText(fileInput.files[0]);
    };
}