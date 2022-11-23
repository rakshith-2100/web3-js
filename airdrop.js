//npm i @solana/web3.js

const solanaWeb3 = require("@solana/web3.js");
const { Connection } = require("@solana/web3.js");

const publicKey = solanaWeb3.Keypair.generate().publicKey;

// solanaWeb3.Keypair

// console.log(solanaWeb3);
console.log(publicKey);

const a = async () => {
  // const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl)
  const connection = new Connection(
    solanaWeb3.clusterApiUrl("devnet"),
    "confirmed"
  );
  const publicKey = solanaWeb3.Keypair.generate().publicKey;
  let tokenAmount = await connection.getBalance(publicKey);
  console.log(`amount: ${tokenAmount}`);

  const airdropSignature = await connection.requestAirdrop(
    publicKey,
    2 * solanaWeb3.LAMPORTS_PER_SOL
  );

  await connection.confirmTransaction(airdropSignature);
  tokenAmount = await connection.getBalance(publicKey);
  console.log(`amount: ${tokenAmount}`);
};

a();
