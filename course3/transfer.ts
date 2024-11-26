import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"

import { LAMPORTS_PER_SOL, 
    PublicKey, 
    Transaction, 
    clusterApiUrl, 
    Connection, 
    sendAndConfirmTransaction, 
    SystemProgram
} from "@solana/web3.js";

import { createMemoInstruction} from "@solana/spl-memo";

const sender = getKeypairFromEnvironment("SECRET_KEY");
const connection = new Connection(clusterApiUrl("devnet"));

console.log("Sender publick key: ", sender.publicKey.toString());

const receiver = new PublicKey("BiH3ZbjcDbRpHFeYh8N92QhDjdAUoxcjgedvaHm6hkRS");
const transaction = new Transaction();
const amount = 0.1;

const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: LAMPORTS_PER_SOL * amount
});
2
transaction.add(transferInstruction);

// const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);
// console.log("Transaction confirmed: ", signature);

const createMemo = createMemoInstruction("Hello World");
transaction.add(createMemo);
const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);
console.log("Transaction confirmed: ", signature);