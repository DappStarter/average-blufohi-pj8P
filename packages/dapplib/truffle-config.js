require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note meadow modify grid kitten bottom gather'; 
let testAccounts = [
"0x72d53f009515053e109472d4558e34c47ca8e483f157c3b69536856bab7fd63e",
"0x3862f5f525a102be94f89d7b227470845bd41be1bd73f9434855f4c4c724c396",
"0xb51e1259474039c546ba7d6541ae213fd6220cbbd1a200be6f92015bcca3056c",
"0x7dbd23c1ffbe77a4f4b37628432cbff033faa07ef69e677f3dff1b4661905a6a",
"0x33f5168a70157872bba8e4c617b9d06fbd73cf63a5d705424f0fe96552123443",
"0xafdb38d25aa4809a55de630d757ffdc87fc37de4e07782b55c726aa955f2e69d",
"0xf0e1f02db18ce5bf4cbbb4818d51f1f412f4777de270097c0488c35c334d93b1",
"0xdca2359434a0dc9a35c1edef90b6f24a0b279150e5dd57837f529c0359b31542",
"0x01d2b816a0e0699a43faa1d4fa3db4c3a31a2aa6af08eb4361f721dcffd5e1fd",
"0x2650c4354577ce51d736bb875eecea60152aacc7aa9da24e876adb6d82a34c1b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

