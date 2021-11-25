require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strong razor noble snake give kangaroo army general'; 
let testAccounts = [
"0x36ab2ec01a29fa993ed3029f318c11a50f35ca1ff55277e47ade478237bf0cd0",
"0x3ed473dc8a0b569b487104a159dfc5617cbca2b00cf80742a8689cb3f06d888e",
"0x2a552070da4ffb54eabbf8d99e431b863a072a5d0ba8574b5401674e9287bb6e",
"0x426fae86950c5ab8378425a9faf3ee728ee33e7e3832b46e45602313a1809789",
"0x1f68e84b1644d894560a7eeeb71697cb99fe573a1d993fe6fca4e1cbb55f6524",
"0x497e6687981ee5098cee2331c7459489e1d62d319dca051df60076a27acc9aba",
"0x38463d25157e7cc085a88f9baca0ba0b13a198e1422c5cfccc26bef2239f5474",
"0xa102859058f4c1172e8775ab9219b7cc5be94a42dbb64d96a2dec0cfcd96c98e",
"0x2a6f0e84ec2ec791b397ff7c9ec6da0e7d6aa3f00e7ad52a453c7780f1891b9a",
"0x62e2acf14e9cd8721652c58649a48a7fce89e8e3798dad7c942ae284eb699396"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

