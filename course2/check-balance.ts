import "dotenv/config";

import { 
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey,
    clusterApiUrl
} from "@solana/web3.js";

import { airdropIfRequired } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"),"confirmed");

console.log("Connected to devnet", connection.rpcEndpoint);

const andreeaPubkey = new PublicKey(
    "BiH3ZbjcDbRpHFeYh8N92QhDjdAUoxcjgedvaHm6hkRS"
);

const balanceInLamports = await connection.getBalance(andreeaPubkey);

console.log("Done! Andreea's balance in lamports: ", balanceInLamports);

console.log("Airdrop 1 SOL to Andreaa ...");

await airdropIfRequired(
    connection,
    andreeaPubkey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL
);

const balanceInLamports2 = await connection.getBalance(andreeaPubkey);

console.log("Done! Andreea's balance in lamports: ", balanceInLamports2);