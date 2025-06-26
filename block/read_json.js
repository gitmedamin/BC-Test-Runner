function read() {

    //$('input[type=file]').change(function() {
    // var filePath = $('#file').val();
    //  });


    $("#json").click(function() {


        $.getJSON('contracts/Register.json', function(data) {
            App.contracts.Register = TruffleContract(data);
            App.contracts.Register.setProvider(App.web3Provider);


        })

    })
}