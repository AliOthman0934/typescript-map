# TypeScript Installation Guide
## Introduction
TypeScript is a powerful, statically typed superset of JavaScript that enhances code quality and development efficiency. This guide will walk you through the steps to install TypeScript on your system.

 ## Prerequisites
Before installing TypeScript, ensure that Node.js is installed on your machine. If Node.js is not installed, you can download and install it from the official Node.js website. The LTS version is recommended.

## Installation Steps
1. Install TypeScript Globally
To install TypeScript globally using npm (Node Package Manager), open your command line or terminal and execute the following command:

bash
Code kopiëren
npm install -g typescript
The -g flag installs TypeScript globally, making the tsc (TypeScript Compiler) command available system-wide.

2. Verify the Installation
After the installation, verify that TypeScript is installed correctly by checking the version:

bash
Code kopiëren
tsc -v
If TypeScript is installed successfully, this command will display the version number of TypeScript installed.

3. Create a TypeScript File
Now, you can create your first TypeScript file. For example, create a file named hello.ts with the following content:

typescript
Code kopiëren
let message: string = "Hello, TypeScript!";
console.log(message);
4. Compile the TypeScript File
Compile the TypeScript file into JavaScript using the tsc command:

bash
Code kopiëren
tsc hello.ts
This command will generate a hello.js file in the same directory, containing the transpiled JavaScript code.

5. Run the Compiled JavaScript File
To run the generated JavaScript file, use Node.js:

bash
Code kopiëren
node hello.js
This command should output "Hello, TypeScript!" to the console, confirming that the setup is complete and functioning.

By following these steps, you will have successfully installed TypeScript and compiled your first TypeScript code. TypeScript's type system and tooling support can significantly improve your development experience and code maintainability. Happy coding!
