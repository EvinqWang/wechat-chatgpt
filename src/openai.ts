import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();
const { token, sessionToken } = process.env;


const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

console.log(new Date().toLocaleString(), "--openai has been initial...");

export default async function chatGpt(msg: string): Promise<string>{
    return new Promise(async (resolve, reject) => {
        try {
            const response = await openai.createCompletion({
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
            resolve(text)
        } catch (err) {
            console.log(err);
            reject(err)
        }
    })
}
