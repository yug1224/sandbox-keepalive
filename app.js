const https = require('https');
const fetch = require('node-fetch')
const agent1 = new https.Agent({
  keepAlive: false
});
const agent2 = new https.Agent({
  keepAlive: true
});

(async () => {

  console.time('keepAlive: false')
  for await (let v of [...Array(10)]) {
    await fetch('https://randomuser.me/api', { agent: agent1 });
  }
  console.timeEnd('keepAlive: false')

  console.time('keepAlive: true')
  for await (let v of [...Array(10)]) {
    await fetch('https://randomuser.me/api', { agent: agent2 });
  }
  console.timeEnd('keepAlive: true')

})()
