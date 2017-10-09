var Web3 = require('web3');
var web3 = new Web3("https://ropsten.infura.io/m2127IH3i4kuHoojavXS");

var address = "0xB305F6450158cb61277E57d80925Fcca1e3AF8e2"; // in Ropsten
// contract address: 0xd34997f977aa146F0d8b9156d097d4504cD04Ebc
var private_key = "0xe2dbf9358232158b14312e57944938810a771f891b761bed28a1e09544670afb";

var account = web3.eth.accounts.privateKeyToAccount(private_key);
if (account.address != address) {
    exit('plz enter valid address private key');
}

console.log(account);

web3.eth.accounts.wallet.add(private_key);
web3.eth.defaultAccount = address;

// Contract
var bytecode = "6060604052600c600055341561001457600080fd5b60cb806100226000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fb5c1cb146046578063f2c9ecd814606657600080fd5b3415605057600080fd5b60646004808035906020019091905050608c565b005b3415607057600080fd5b60766096565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a72305820e920fae30ae52158b3600157608a71556f97f88b55e607016673bdc1e0e52aeb0029";

var abi = [{"constant":false,"inputs":[{"name":"_number","type":"uint256"}],"name":"setNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

// Send
var myContract = new web3.eth.Contract(abi);
myContract.deploy({
    data: '0x' + bytecode,
})
.send({
    from: address,
    gas: 2000000, // gas limit
    gasPrice: 1000000 // gas price in wei
}, function(error, transactionHash){ 
        console.log("Deploying...");
        console.log(error); 
    })
    .on('error', function(error){
        console.log(error);
    })
    // .on('transactionHash', function(transactionHash){ ... })
    .on('receipt', function(receipt){
       console.log(receipt.contractAddress) // contains the new contract address
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log("Confirmations: " + confirmationNumber);
    })
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });