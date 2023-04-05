const { Configuration, OpenAIApi } = require('openai');
require('dotenv/config');
const readline = require('readline');

let conversationLog = {};

const configuration = new Configuration({
    apiKey: process.env.token,
})
const openai = new OpenAIApi(configuration);

process.on("unhandledRejection", () => {
    return console.log("Error: Network Error, please try again!");
})

process.on("exit", async ()=> {
    console.clear();

})

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

function parse(string) {
    let args = string.split("```");
    console.log(args[0]);
    if (args[1] && args[2]) {
        console.log('\x1b[7m%s\x1b[0m', args[1]);
        console.log(args[2]);
    }
    console.log('\n');
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

    console.log("\x1b[32m%s\x1b[0m", "Response:\n")
    parse(result.data.choices[0].message.content);
}

async function run() {

    conversationLog = [{ role: 'system', content: 'You are a programmer chatbot.' }];

    while (true) {
        let question = await askQuestion("\nQuestion: ");
        await logs(question);
    }
}

run();