import { ChatGPTPool } from "./chatgpt.js";
import { ChatGPTBot } from "./bot.js";
import { OpenAiChatGPT } from "./openai.js";

export class WechatChatGPTBot extends ChatGPTBot {
    // @ts-ignore
    chatGPTPool = new OpenAiChatGPT()
    // 对获取chatGPT rsp 的方式进行重写
    async getGPTMessage(text: string, talkerId: string): Promise<string> {
        return await this.chatGPTPool.sendMessage(text, talkerId);
    }
}
