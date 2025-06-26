function gethello() {

    const htmlLabel = document.getElementById('hello-result');

    h.methods.hello().call().then(result => {
        htmlLabel.innerHTML = result;



        //h.methods.hello().call()
        //.then(console.log);

    })



}