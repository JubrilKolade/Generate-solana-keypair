import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import { Keypair } from '@solana/web3.js'
//import 'dotenv/config'
require('dotenv').config()

//GENERATE A NEW KEYPAIR
const keypair = Keypair.generate();
console.log(keypair.publicKey.toBase58())
console.log(keypair.secretKey);

//LOAD EXISTING KEYPAIR from an env file
const existingKP = getKeypairFromEnvironment('SECRET_KEY')
console.log(existingKP.publicKey.toBase58())
console.log(existingKP.secretKey);

// console.log(process.env)