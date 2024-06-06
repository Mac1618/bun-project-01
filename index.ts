// Typescript can run in bun
const num = 16;

const read = (text: string) => {
	return text;
};

const message = read('Hello world!');
console.log(message); // "bun run index.ts" - on terminal to run

// -----------------------------------------------------------------------------------------

import figlet from 'figlet'; // "bun i figlet" && "bun i @types/figlet" - install figlet and typescript compatibility

// Creating a WEB SERVER with Bun
const server = Bun.serve({
	port: 3000, // default port
	fetch(req) {
		const body = figlet.textSync('Hello web server!'); // make the text 2d with FIGLET
		return new Response(body); // message on http://localhost:3000
	},
});

console.log(`Listening to PORT http://localhost:${server.port}`);

// -----------------------------------------------------------------------------------------

// Creating a SCRIPT with BUN (package.json)
// 1)"scripts": {
// 2)   "start": "bun run index.ts",    // to run index.ts
// 3)   "dev": "bun --watch index.ts"   // to run index.ts in development mode
// 4) }

// script to execute in terminal
// "bun start"
