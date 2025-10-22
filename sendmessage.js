/* 
* functions nya ygy
8 #pannjs-2025
*/
async function sendText(msg) {
  let hay = msg
  await conn.reply(m.chat, hay, m)
}

async function sendReaction(msg) {
  let puki = msg
  await conn.react(m.chat, puki, m)
}

/*
 * result nya
*/
await sendText(`hay, gabut jierla`)
await sendReaction(`au ah`)
