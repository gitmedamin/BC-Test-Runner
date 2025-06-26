function readtxt2() {
    var fileInput = document.querySelector('#file');
    fileInput.onchange = function() {
        var reader = new FileReader();
        reader.onload = function() {
            const x = reader.result;
            var lines = x.split("/");


            for (i = 0; i < lines.length; i++) {





            }
            //const htmlLabel = document.getElementById('h');
            // htmlLabel.innerHTML = lines[1];
            // var a = lines[0];
            // var b = lines[1];


            // n1 = parseInt(a);
            // n2 = parseInt(b);

        };

        reader.readAsText(fileInput.files[0]);
    };
}