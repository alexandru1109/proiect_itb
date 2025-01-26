# proiect_itb
Acest proiect a fost realizat de Mitroi Alexandru-Grigore pentru tema finala la ITB.

### Instructiuni de utilizare

### 1. Init Metamask and SUI Wallet
-**SUI Wallet**: https://sdk.mystenlabs.com/dapp-kit
-**MetaMask**: https://sdk.mystenlabs.com/dapp-kit


### 2. Install Dependencies
- **Node.js**: https://nodejs.org/en
- **SUI**: https://docs.sui.io
- **Anvil**: https://book.getfoundry.sh/anvil/

### 3. Ethereum Localchain start
anvil

### 4. Ethereum Contract build & deploy

cd eth-contract
forge create src/BridgeToken.sol:IBT --rpc-url http://127.0.0.1:8545 --private-key <YOUR_PRIVATE_KEY> --broadcast

### 5. SUI Localchain start & get coins

RUST_LOG="off,sui_node=info" sui start --with-faucet --force-regenesis
sui client faucet

### 6. SUI Contract build & deploy
cd sui_contract
sui move build
sui client publish --gas-budget 100000000

### 7. Server start
node Server.js


### 8. Frontend start
npm run dev
