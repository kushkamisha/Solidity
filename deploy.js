var browser_ballot_sol_helloContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_number","type":"uint256"}],"name":"setNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]);

var address = "0xe0968ff0d16680bab00a390ba4edabbe1ab9c523";

personal.unlockAccount(address, "password");

var browser_ballot_sol_hello = browser_ballot_sol_helloContract.new(
   {
     from: address, 
     data: '0x60606040526005600055341561001457600080fd5b60cb806100226000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fb5c1cb146046578063f2c9ecd814606657600080fd5b3415605057600080fd5b60646004808035906020019091905050608c565b005b3415607057600080fd5b60766096565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582084c4de41c82b76d1a13ac6f97ed3e517d6468d1a70304fadbaf87d9e624c95650029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })

// 0x0531d329d883548fce87c2441b841fdee8045239