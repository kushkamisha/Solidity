/**
 * Read existing contract from blockchain.
 */

require('./connect.js');

// 0x70AC36C8FD90d25C1d9B778CC5cF447aFa744F92 - simple send money contract
var contract_address = "0x70AC36C8FD90d25C1d9B778CC5cF447aFa744F92";

console.log("User address: " + account.address);
console.log("Contract address: " + contract_address);


// Compile ABI.
var source = fs.readFileSync("../drop.sol", 'utf8');
console.log('Getting ABI...');
var compiledContract = solc.compile(source);

for (var contractName in compiledContract.contracts) {
    var abi = JSON.parse(compiledContract.contracts[contractName].interface);

    var myContract = new web3.eth.Contract(abi, contract_address);

    // getter();

    myContract.methods.replenish().send({
        from: account.address,
        gas: 2000000, // gas limit
        value: 10000, // How much money send to the function
        // gasPrice: 1000000 // gas price in wei
    }, function(error, transactionHash){
            if (!error) {
                console.log("Transaction hash: " + transactionHash);
            } else {
                console.log(error);
            }
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
            console.log(newContractInstance.options) // instance with the new contract address
        });
}


/**
 * Additional functions zone.
 */

function getter() {
    myContract.methods.getContractBalance().call({from: address}, function(error, result){
        if (!error) {
            console.log(result);
        } else {
            console.log(error);
        }
    });
}