function properties() {

    const p = document.getElementById('chartContainer');
    properties = "ContractName :" + contractName + "\n" + "NetworkType :" + networkType + "\n" + "Addcontract :" + addcontract + "\n" + "TransactionHash :" + transactionHash + "\n" + "UpdatedAt :" + updatedAt + "\n";

    aff = "<B>ContractName</B> :" + contractName + "<br><br>" + "\n" + "<B>NetworkType :</B>" + networkType + "<br><br>" + "\n" + "<B>Addcontract :</B>" + addcontract + "<br><br>" + "\n" + "<B>TransactionHash :</B>" + transactionHash + "<br><br>" + "\n" + "<B>UpdatedAt :</B>" + updatedAt + "\n";
    p.innerHTML = aff
}