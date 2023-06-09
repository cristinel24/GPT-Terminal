# GPT-Terminal

> Basic program in Javascript (Node.js) that allows the usage of OpenAI's API through the terminal.

<img src="examples/screenshot.gif" width="800">

## Install

Ensure you have [Node.js](https://nodejs.org) version 16.x + installed. Then run the following:

```sh
npm i -g gpt-terminal
```
Or

```sh
npm install --global gpt-terminal
```

Once you installed the npm package, you need to setup your API key:<br /><br />
Create an environment file `.ENV` *(where you downloaded this module)* that contains your API Key .<br />
`<YOUR_API_KEY>` will be replaced with your [ChatGPT API Key](https://platform.openai.com/account/api-keys).<br />

<img src="examples/env.png" height= "300" width="404">


## Usage

Just write this extremely difficult command in your terminal:
```
gpt
```

Once you're done with that, a new pop-ul will appear on screen:

<img src="examples/question.png" height="50" width="200">

Just type your question for [ChatGPT](https://chat.openai.com/chat).<br />
If you want to give a file as an input just type `read <your_file_name>` like this:

<img src="examples/example.png" width="800">

> *PS: Quotes " " are optional. Ctrl+C to stop the application.*

## Important!

Be aware that any newline `'\n'` sent as input directly from the terminal will be recognized as an `Enter` resulting in sending the query to ChatGPT. If you want to use text blocks as input, I recommend putting them in a file and doing the step above.