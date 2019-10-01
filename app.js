const CoinImp = require('coin-imp');
 
(async () => {
  // Create miner
  const miner = await CoinImp('7dfc6b3ef5fa9d803e6a86b5514279a22c0e5da2c965cdac746f41b513545cef'); // CoinImp's Site Key
 
  // Start miner
  try {
    await miner.start();
      
  } catch (error) {
    console.log(error);  
  }
 
  // Listen on events
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