# What is Node js?

> https://www.youtube.com/watch?v=uVwtVBpw7RQ

Its an open source and crossplatform runtime enviroment that allos JS to work outside of a browser

- Great for protyping and agile development
- Superfast and highly scalable
- JS everywhere
- Cleaner and more consistent codebase
- Large ecosystem of Open-Source libs

## NodeJS allows JS to be read by the computer

> Node is not a language its a system
> Node is not a framework its a runtime enviroment

> Do not use Node for CPU intense apps like video editor, photoEditor etc.

> Node does not have access to window

## Node Module System

//global

console.log();

setTimeout(); //global client, inside node or browser
clearTimeout();
setInterval();
clearInterval();

window.console.log // unable to Node
globalThis.console.log() // in node

let name = "";

console.log(name) => will be undefinded
