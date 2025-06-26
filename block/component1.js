function somme() {
    $("#sum").click(function() {
        a = $("#valeur1").val();
        b = $("#valeur2").val();
        const htmlLabel = document.getElementById('hello-result');
        App.contracts.somme.deployed().then(function(instance) {
            return instance.sum(a, b);
        }).then(function(result) {
            htmlLabel.innerHTML = result;
        }).catch(function(err) {
            console.error(err);
        });
    });
}