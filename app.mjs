import https from 'https';
import fetch from 'node-fetch';

const fn = async (keepAlive, cnt) => {
  console.time(`keepAlive: ${keepAlive}`)
  const agent = new https.Agent({
    keepAlive
  });  
  for await (let v of [...Array(cnt)]) {
    await fetch('https://randomuser.me/api', { agent });
  }
  agent.destroy();
  console.timeEnd(`keepAlive: ${keepAlive}`)
};

await fn(true, 10);
await fn(false, 10);
