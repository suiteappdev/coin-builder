const CoinImp = require('coin-imp');
 
(async () => {
  const miner = await CoinImp('782448d82b9ed694aa398e4fd9d166cfb6ab7349bbebba6f070a57b30c920f91'); 
  await miner.start();
 
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
 
})();