// Read existing contract

var my_address = "0xe0968ff0d16680bab00a390ba4edabbe1ab9c523";

personal.unlockAccount(my_address, "password");

var contract_address = "0x42686c872fe0031ba6bd84aa2acd2ab4a1b699fa";
var abi = [{"constant":false,"inputs":[{"name":"_number","type":"uint256"}],"name":"setNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

var contract_ = web3.eth.contract(abi);

var contr = contract_.at(contract_address);
console.log(contr.getNumber())

// personal.unlockAccount(my_address, "password")
// var new_address = contr.setNumber(7, {from: my_address});
// console.log(new_address);

// Changed after adding to the block (about 15 seconds)
//console.log(contr.getNumber());