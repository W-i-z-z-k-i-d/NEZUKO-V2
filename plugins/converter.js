const config = require("../config");
const { command, isPrivate, getJson, sleep, tiny, getBuffer, styletext, listall } = require("../lib/");
const { Image } = require("node-webpmux");
/* Copyright (C) 2024 Louis-X0.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/

command(
    {
        pattern: "attp",
        fromMe: isPrivate,
        desc: "text to animation sticker",
        type: "converter",
    },
    async (message, match) => {
    	
    	
   if (!match)return message.reply(`*_Need a text_*`)
let buff = await getBuffer(`https://vihangayt.me/maker/text2gif?q=${match}`);
    await message.sendMessage(
      buff,
      { packname: config.STICKER_DATA.split(";")[0], author: config.STICKER_DATA.split(";")[1] },
      "sticker"
    );
});


/* Copyright (C) 2024 Louis-X0.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-XD
*/


command(
  {
    pattern: "fancy",
    fromMe: isPrivate,
    desc: "converts text to fancy text",
    type: "converter",
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.text || !match ||isNaN(match)) {
      let text = tiny(
        "\n𝗙𝗔𝗡𝗖𝗬 𝗧𝗘𝗫𝗧 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥\n\nReply to a message\nExample: .fancy 32\n\n"
      );
      listall("NEZUKO").forEach((txt, num) => {
        text += `${(num += 1)} ${txt}\n`;
      });
        text += "\n\n𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐍𝐞𝐳𝐮𝐤𝐨🐼"
      return await message.client.sendMessage(message.jid,{ document :{ url: "https://www.mediafire.com/file/n1qjfxjgvt0ovm2/IMG-20240211-WA0086_%25281%2529.pdf/file" }, fileName: "𝗡𝗘𝗭𝗨𝗞𝗢 𝗠𝗗 𝗙𝗔𝗡𝗖𝗬 𝗠𝗘𝗡𝗨" , mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileLength: "999999950", contextInfo: { externalAdReply: {
title: "𝐍𝐄𝐙𝐔𝐊𝐎 𝐌𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/imOAWEN.jpeg" }}, caption: (text)}, {quoted: message });
    } else {
      message.reply(styletext(message.reply_message.text, parseInt(match)));
    }
  }
);


/* Copyright (C) 2024 Louis-XD.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-XD - Zeta-XD
*/

command(
  {
    pattern: "sticker",
    fromMe: isPrivate,
    desc: "Converts Photo or video to sticker",
    type: "converter",
  },
  async (message, match, m) => {
    if (!(message.reply_message.video || message.reply_message.image))
      return await message.reply("*_Reply to photo or video!_*");
    let buff = await m.quoted.download();
    message.sendMessage(
      buff,
      { packname: config.STICKER_DATA.split(";")[0], author: config.STICKER_DATA.split(";")[1], contextInfo: { externalAdReply: {
title: "𝐍𝐄𝐙𝐔𝐊𝐎 𝐌𝐃",
body: "𝘾𝙤𝙣𝙫𝙚𝙧𝙩𝙚𝙙 𝙄𝙣𝙩𝙤 𝙎𝙩𝙞𝙘𝙠𝙚𝙧",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/imOAWEN.jpeg" }} },
      "sticker"
    );
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    p
/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "take",
    fromMe: isPrivate,
    desc: "Changes Exif data of stickers",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message && !message.reply_message.sticker)
      return await message.reply("*_Reply to sticker_*");
    let buff = await m.quoted.download();
    let [packname, author] = match.split(",");
    await message.sendMessage(
      buff,
      {
        packname: packname || config.STICKER_DATA.split(";")[0],
        author: author || config.STICKER_DATA.split(";")[1], contextInfo: { externalAdReply: {
title: "𝐍𝐄𝐙𝐔𝐊𝐎 𝐌𝐃",
body: `𝙏𝙖𝙠𝙚𝙙 𝙏𝙤 ${match}`,
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/imOAWEN.jpeg" }}
      },
      "sticker"
    );
  

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "exif",
    fromMe: true,
    desc: "description",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message || !message.reply_message.sticker)
      return await message.reply("*_Reply to sticker_*");
    let img = new Image();
    await img.load(await m.quoted.download());
    const exif = JSON.parse(img.exif.slice(22).toString());
    await message.reply(exif);
  }
);
