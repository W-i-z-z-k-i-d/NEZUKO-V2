const { command } = require("../lib/");
const axios = require("axios");
command(
    {
        pattern: "script",
        fromMe: false,
        desc: "nezuko md repo",
        type: "user",
    },
    async (message, match, m, client) => {
        let { data } = await axios.get('https://api.github.com/repos/Zeta-XD/REPO-TESTs')
        let cap = `\n```NEZUKO-V2```🔋

SIMPLE AND EASY TO USE WHATSAPP BOT

𝗥𝗘𝗣𝗢: ````https://github.com/godzenitsu/NEZUKO-V2````

𝗢𝗣𝗘𝗡 𝗦𝗢𝗨𝗥𝗖𝗘

➫ 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 : https://queen-nezuko-web.onrender.com/


➫ 𝗦𝗨𝗣𝗣𝗢𝗥𝗧

https://chat.whatsapp.com/DcGABEejUwOG8YcgGOcizF\n
        
        return await message.client.relayMessage(message.jid,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 699999000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: cap,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
          });
