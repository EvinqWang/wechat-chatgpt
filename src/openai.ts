import { Configuration, OpenAIApi  } from "openai";


// console.log(process.env.OPENAI_API_KEY)

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
    prompt: "Human: 得呢新冠无法进食",
  temperature: 0.9,
  max_tokens: 3000,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [" Human:", " AI:"],
});

console.log(response.data.choices)