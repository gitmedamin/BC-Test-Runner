function createfile() {
    var content = f

    var filename = "somme.txt";

    var blob = new Blob([content], {
        type: "text/plain;charset=utf-8"
    });

    saveAs(blob, filename);
}