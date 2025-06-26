async function praseBytes(args) {
    const name = args[0];
    const bytes = ethers.utils.formatBytes32String(name);
    console.log("bytes", bytes);


}
praseBytes(process.argv.slice(2));