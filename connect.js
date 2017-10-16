/**
 * Connect to the Ropsten testnet and set default address.
 */

// Without 'var' - global variables
Web3 = require('web3');
fs = require('fs');
solc = require('solc');

web3 = new Web3("https://ropsten.infura.io/m2127IH3i4kuHoojavXS");

address = "0xB305F6450158cb61277E57d80925Fcca1e3AF8e2"; // in Ropsten
private_key = "0xe2dbf9358232158b14312e57944938810a771f891b761bed28a1e09544670afb";

account = web3.eth.accounts.privateKeyToAccount(private_key);
if (account.address != address) {
    console.log('Please enter valid address private key');
}

web3.eth.accounts.wallet.add(private_key);
web3.eth.defaultAccount = address;
