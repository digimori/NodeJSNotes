# QRGenerator
QR Code Generator and Additional NodeJS notes

- Server, Application, Database

## Server:
- Computer, on 24/7, listens for requests to process, any computer that can access the internet can be used as a server

## Application:
- Logic that runs on the server, determines how to respond to requests from the browser

## Database:
- Storing data - Persistent storage, handles information such as user details

## Nodejs: JavaScript backend framework (runtime).
- Asynchronous event-driven JavaScript runtime. Designed for building scalable network applications.

### What is a runtime?
- Allows us to run JS without a web browser, providing us a server. 
- Asyncronous means we can run multiple things at the same time without tying up other resources.
- Event-driven -  Allows code to be triggered when an event happens.
- So we can initiate a function, let that run a process in the background, and then when it's finished, initiate something else. 


## Using Nodejs:

### Version check: 
```
node -v
```

### Node REPL:
- Read Eval Print Loop
  - Is a computer environment where user inputs are read (in the form of code) and evaluated, then the results are returned to the user (via Command line/Console).
  - Can be accessed by typing 'node' into the console. Evident by the terminal line turning to an arrow ">"
  - .help command gives information on other commands available.
  - .exit takes you out of it, can also use cmd+c like you do with React and LocaHost.
    - Can write practice code like you would in the dev tools browser console snippets

### Running JS files through Node:
```
node index.js // Or whatever file you want to run through it
```

## Native Node modules (Leveraging code already written into Node):
-Pre-bundled code that comes with Node out of the box
- [NodeJS Docs](https://nodejs.org/docs/latest/api/)

### Setting up the file system:
- In index.js:
```
const fs = require("fs");
```
- We then need the writeFile method, which is going to allow us to take a message such as a user input and write it into a file to save locally.

```
fs.writeFile(file, data[, options], callback) 
// File we want to create, Data we want to put in the file
// Callback to handle errors and issues that might happen
```

- Example code, when index.js is run through Node, this will create a new file in the current directory with the name message.txt and the text "Hello from NodeJS".
```
fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
    if (err) throw err; // If an error occurs, throw the error to the console
    console.log("The file has been saved!"); // Else, save the file with the data provided.
});
```

- Reading from files (Challenge) - Read the text from the file created above and console log it:
```
fs.readFile("./message.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data)
})
```
- utf8 is needed here otherwise it will process as a buffer code instead

## NPM (Node Package Manager):
- Imports and utilities that other people have written to make writing code faster (Like a community tool library)

### To initialise it:
```
npm init
```

- Then we need to create the package.json file by answering the questions provided:
    - package name: learning-npm (Can be any name)
    - version: Leave as is (hit enter)
    - description: Whatever it needs to be
    - entry point: (filename.js)
    - test command: leave empty for this one
    - git repository: empty
    - keywords: empty
    - author: your name?
    - License: "ISC"
  - Hit y and enter to save this when prompted

### Installing packages:
```
npm install <package-name>
```

- Can be found on [npmJS](https://npmjs.com)

- In node_modules, the index.js file will usually have the functionalities, methods and what they do.


## ECMAScript Modules:
- require() isn't used as much anymore in ECMA, it's usually like Django and React with:
```
import * as <variableName> from 'package';
```
- We need to initialize this in our package.json dependencies if creating from scratch like we did above:
```
"type": "module",
```