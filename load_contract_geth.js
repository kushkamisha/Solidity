// Read existing contract

var my_address = "0xe0968ff0d16680bab00a390ba4edabbe1ab9c523";

personal.unlockAccount(my_address, "password");

var contract_address = "0xae9068581b8093e731e88fae886b447bd533b729";
var contract_ = web3.eth.contract([{"constant":false,"inputs":[{"name":"_number","type":"uint256"}],"name":"setNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]);

var contr = contract_.at(contract_address);
console.log(contr.getNumber())

// personal.unlockAccount(my_address, "password")
// var new_address = contr.setNumber(7, {from: my_address});
// console.log(new_address);

// Changed after adding to the block (about 15 seconds)
//console.log(contr.getNumber());