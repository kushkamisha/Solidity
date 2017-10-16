/**
 * Deploy contract to the blockchain.
 */

require('./connect.js');

// Compile Contract and ABI.
var source = fs.readFileSync("../drop.sol", 'utf8');
console.log('Compiling contract...');
var compiledContract = solc.compile(source);

for (var contractName in compiledContract.contracts) {
    var bytecode = compiledContract.contracts[contractName].bytecode;
    var abi = JSON.parse(compiledContract.contracts[contractName].interface);

    console.log('Bytecode: ' + bytecode);
    console.log('ABI: ' + JSON.stringify(abi, undefined, 2));

    // Deploy contract.
    var myContract = new web3.eth.Contract(abi);

    console.log('Deploying contract...');

    myContract.deploy({
        data: '0x' + bytecode,
    })
    .send({
        from: address,
        gas: 2000000, // gas limit
    }, function(error, transactionHash){
            if (!error) {
                console.log("Transaction hash: " + transactionHash);
            }
        })
        .on('error', function(error){
            console.log(error);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log("Confirmations: " + confirmationNumber);
        })
        .on('receipt', function(receipt){
           console.log('Contract address: ' + receipt.contractAddress)
        });
}
