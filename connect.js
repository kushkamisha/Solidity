var Web3 = require('web3');
var web3 = new Web3("http://136.243.173.186:8540");

var address = "0xB305F6450158cb61277E57d80925Fcca1e3AF8e2";
var private_key = "0xe2dbf9358232158b14312e57944938810a771f891b761bed28a1e09544670afb";

var account = web3.eth.accounts.privateKeyToAccount(private_key);
if (account.address != address) {
    exit('plz enter valid address private key');
}
web3.eth.accounts.wallet.add(private_key);
web3.eth.defaultAccount = address;