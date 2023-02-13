import { WechatyBuilder } from "wechaty";
import QRCode from "qrcode";
import chatGpt from "./openai.js";

const bot = WechatyBuilder.build({
    name: "wechat-assistant", // generate xxxx.memory-card.json and save login data for the next login
    puppetOptions: {
        uos: true, // 开启uos协议
    },
    puppet: "wechaty-puppet-wechat",
});

bot.on("scan", async (qrcode, status) => {
    const url = `https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`;
    console.log(`Scan QR Code to login: ${status}\n${url}`);
    console.log(
        await QRCode.toString(qrcode, { type: "terminal", small: true })
    );
})

bot.on("login", async (user) => {
    console.log(`User ${user} logged in`);
    //   chatGPTBot.setBotName(user.name());
})

bot.on("message", async (message: any) => {
    //   if (!chatGPTBot.ready) {
    //     return;
    //   }
    if (message.text().startsWith("/ping")) {
        await message.say("pong");
        return;
    }
    try {
        console.log(`Message: ${message}`);
        const response = await chatGpt(message);
        console.log('response>>>>', response);
    } catch (e) {
        console.error(e);
    }
});

try {
    await bot.start();
} catch (e) {
    console.error(`⚠️ Bot start failed, can you log in through wechat on the web?: ${e}`);
}
