const { Configuration, OpenAIApi } = require('openai');
require('dotenv/config');
const readline = require('readline');

let conversationLog;

const configuration = new Configuration({
    apiKey: process.env.token,
})
const openai = new OpenAIApi(configuration);

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

async function logs(quest) {

    console.log('\x1b[36m%s\x1b[0m', "\n[Wait...]\n")
    
    conversationLog.push({
        role: 'user',
        content: quest,
    })

    const result = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: conversationLog,
    });

    console.log("\x1b[32m%s\x1b[0m", "Response: ")
    console.log(result.data.choices[0].message.content);
    console.log("\n\n");
}

function init() {
    conversationLog = [
        {
            role: 'system',
            content: 'You are a programmer chatbot.'
        }];
}

async function run() {

    init();

    while (true) {
        let question = await askQuestion("\nQuestion: ");
        await logs(question);
    }
}

run();