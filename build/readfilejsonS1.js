function readfilejson(callback) {
    var fileInput = document.querySelector('#filejson');
    fileInput.onchange = function() {
        var reader = new FileReader();
        reader.onload = function() {

            const t = reader.result;
            callback(reader.result);
            //var data = JSON.parse(t);
            // var x = data.networks[5777].address
            // var z = data.abi;
            // s = z;


            // y = x;




            // console.log(data);




        };

        reader.readAsText(fileInput.files[0]);
    };

}


/*function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}*/