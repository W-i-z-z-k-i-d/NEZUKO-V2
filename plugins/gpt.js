const { command, isPrivate, getJson } = require("../lib/");
command(
    {
        pattern: "gpt",
        fromMe: isPrivate,
        desc: "chat gpt",
        type: "user",
    },
    async (message, match) => {
        if (!match) return await message.reply(`*_Need Text_*\n*Eg:- .gpt hey who is nezuko*`);
let {result} = await getJson(`https://api.maher-zubair.tech/ai/youai?q=${match}`);
await message.client.sendMessage(message.jid, { text: result })
});
