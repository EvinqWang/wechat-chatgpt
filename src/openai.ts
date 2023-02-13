import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();
const { OPENAI_API_KEY, ORGANIZATION_KEY } = process.env;

export class OpenAiChatGPT {
    openai: OpenAIApi;
    constructor() {
        const configuration = new Configuration({
            apiKey: OPENAI_API_KEY,
            organization: ORGANIZATION_KEY
        });
        this.openai = new OpenAIApi(configuration);
        console.log(new Date().toLocaleString(), "--openai has been initial...");
    }

    async sendMessage(msg: string, talkerId: string): Promise<string> {
        console.log('talkerId>>>', talkerId);
        try {
            const response = await this.openai.createCompletion({
                model: "text-davinci-003",
                prompt: "Human: " + `${msg}`,
                temperature: 0.9,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0.6,
                stop: [" Human:", " AI:"],
            });
            const text = response.data.choices[0].text as string
            console.log(text);
            return text
        } catch (err) {
            console.log(err);
            return '请重试！！'
        }
    }
}

