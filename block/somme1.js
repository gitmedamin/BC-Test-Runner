function test() {
    var fileInput = document.querySelector('#file');
    fileInput.onchange = function() {
        var reader = new FileReader();
        reader.onload = function() {

            const x = reader.result;
            var lines = x.split(",");
            console.log(lines);
            //const htmlLabel = document.getElementById('h');
            // htmlLabel.innerHTML = lines[1];
            var a = lines[0];
            var b = lines[1];

        };

        reader.readAsText(fileInput.files[0]);
    };
}