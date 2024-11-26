import "dotenv/config";
import { 
    getKeypairFromEnvironment, 
    getExplorerLink 
} from "@solana-developers/helpers";

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(`User account loaded: ${user.publicKey.toBase58()}`);

// facem un public key la propriu din mint account
const tokenMint = new PublicKey("6VSCeGYbV4svD5S4NSG6aYXatLCPhaZyaSjCMfHTqEMq"); // 2Sski... la el

const destPubKey = new PublicKey(
    "BiH3ZbjcDbRpHFeYh8N92QhDjdAUoxcjgedvaHm6hkRS"
); // my public key

const destTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMint,
    destPubKey,
);

console.log("Token account created:", destTokenAccount.address.toBase58());
