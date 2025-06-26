contract  Receiver {
     event Log(uint gas);
    uint x;
    
    function()external payable { //Cette fonction est exécutée chaque fois que le contrat reçoit des Ethers .
     //2300 gas limit
                      emit Log(gasleft());
                      
              }
      // Vérifier le solde actuel        
    function getBalance()  public view returns(uint){
        
      return address(this).balance;}
    
}