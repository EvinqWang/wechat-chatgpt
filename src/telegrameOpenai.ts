import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import TelegramBot from "node-telegram-bot-api";
import chatGpt from "./openai.js";
dotenv.config();
const { token, sessionToken } = process.env;

const bot = new TelegramBot(token as string, {
    polling: true,
    request: {
        proxy: "http://127.0.0.1:7890",
    } as any,
});
console.log(new Date().toLocaleString(), "--Bot has been started...");

bot.on("message", (msg) => {
    console.log(
        new Date().toLocaleString(),
        "--收到来自id:",
        msg.chat.id,
        "的消息:",
        msg.text
    );
    msgHandler(msg);
});

bot.on("polling_error", (error: any) => {
    var time = new Date();
    console.log("TIME:", time);
    console.log("CODE:", error.code); // => 'EFATAL'
    console.log("MSG:", error.message);
    console.log("STACK:", error.stack);
});

bot.on("uncaughtException" as any, (error: any) => {
    var time = new Date();
    console.log("TIME:", time);
    console.log("NODE_CODE:", error.code);
    console.log("MSG:", error.message);
    console.log("STACK:", error.stack);
});

async function msgHandler(msg: any) {
    switch (true) {
        case msg.text.indexOf("/start") === 0:
            bot.sendMessage(
                msg.chat.id,
                "👋你好！很高兴能与您交谈。有什么我可以帮您的吗？"
            );
            break;
        default:
            try {
                const response = await chatGpt(msg.text);
                bot.sendMessage(msg.chat.id, response, { parse_mode: "Markdown" });
            } catch (error) {
                bot.sendMessage(msg.chat.id, "😭出错了，我需要休息一下。");
            }
            break;
    }
}