// Read existing contract
// In node http://136.243.173.186:8540

const Web3 = require('web3');
const fs = require('fs');
const solc = require('solc');

var web3 = new Web3("https://ropsten.infura.io/m2127IH3i4kuHoojavXS");

var address = "0xB305F6450158cb61277E57d80925Fcca1e3AF8e2"; // in Ropsten
var private_key = "0xe2dbf9358232158b14312e57944938810a771f891b761bed28a1e09544670afb";

var account = web3.eth.accounts.privateKeyToAccount(private_key);
if (account.address != address) {
    console.log('plz enter valid address private key');
}

console.log("Account: " + account.address);

/*
* Compile Fetch ABI
*/ 
var source = fs.readFileSync("../HelloWorldContract.sol", 'utf8');
console.log('Getting ABI...');
var compiledContract = solc.compile(source);

for (var contractName in compiledContract.contracts) {
    var abi = JSON.parse(compiledContract.contracts[contractName].interface);
}
var _abi = 'ABI: ' + JSON.stringify(abi, undefined, 2);

var contract_address = "0x835b3b1B710c168C3A8231F4B345401eF2D2820f";

var myContract = new web3.eth.Contract(abi, contract_address);
console.log("ABI: " + myContract.options.jsonInterface);

myContract.methods.getWord().call({from: address}, function(error, result){
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});