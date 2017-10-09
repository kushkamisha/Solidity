// Read existing contract
// In node http://136.243.173.186:8540

var Web3 = require('web3');
var web3 = new Web3("https://ropsten.infura.io/m2127IH3i4kuHoojavXS");

var address = "0xB305F6450158cb61277E57d80925Fcca1e3AF8e2"; // in Ropsten
// contract address: 0xd34997f977aa146F0d8b9156d097d4504cD04Ebc
var private_key = "0xe2dbf9358232158b14312e57944938810a771f891b761bed28a1e09544670afb";

var account = web3.eth.accounts.privateKeyToAccount(private_key);
if (account.address != address) {
    console.log('plz enter valid address private key');
}

console.log(account.address);

var contract_address = "0xd34997f977aa146F0d8b9156d097d4504cD04Ebc";
var abi = [{"constant":false,"inputs":[{"name":"_number","type":"uint256"}],"name":"setNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

var myContract = new web3.eth.Contract(abi, contract_address);
// console.log(myContract.options.jsonInterface);

// myContract.methods.getNumber().call({from: address}, function(error, result){
//     if (!error) {
//         console.log(result);
//     } else {
//         console.log(error);
//     }
// });
console.log(myContract.methods.getNumber().call());