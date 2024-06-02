const { command, isPrivate } = require("../lib/");
const yts = require("yt-search");

command(
    {
        pattern: "yts",
        fromMe: isPrivate,
        desc: "YouTube searcher",
        type: "search",
    },
    async (message, match, client) => {
        if (!match) return await message.sendMessage("*_Need Query_*");
let title = await yts(`${match}`)
await message.client.sendMessage(message.jid, { text: `\n╭━━━━━━━━━━━━━━━┈⊷
┃ 𝐓𝐢𝐭𝐥𝐞 : ${title.all[0].title}
┃ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧 : ${title.all[0].seconds}
┃ 𝐕𝐢𝐞𝐰𝐬 : ${title.all[0].views}
┃ 𝐔𝐫𝐥 : ${title.all[0].url}
┃
┃ 1.⬢ *ᴀᴜᴅɪᴏ*
┃ 2.⬢ *ᴠɪᴅᴇᴏ*
┃
┃ *ꜱᴇɴᴅ ᴀ ɴᴜᴍʙᴇʀ ᴀꜱ ᴀ ʀᴇᴩʟᴀʏ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ*
╰━━━━━━━━━━━━━━━┈⊷\n`, contextInfo: { externalAdReply: {
     title: "𝐍𝐄𝐙𝐔𝐊𝐎 𝐌𝐃",
     body: `${title.all[0].ago}`,
     sourceUrl: "",
     mediaUrl: "",
     mediaType: 1,
     showAdAttribution: true,
     renderLargerThumbnail: true,
     thumbnailUrl: `${title.all[0].image}` }},},{ quoted: message });
    }
    );
