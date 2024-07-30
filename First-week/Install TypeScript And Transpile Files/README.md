# TypeScript Installation Guide

## Introduction

TypeScript is a powerful, statically typed superset of JavaScript that enhances code quality and development efficiency. This guide will walk you through the steps to install TypeScript on your system.

## Prerequisites

Before installing TypeScript, ensure that Node.js is installed on your machine. If Node.js is not installed, you can download and install it from the [official Node.js website](https://nodejs.org/). The LTS version is recommended.

## Installation Steps

### 1. Install TypeScript Globally

To install TypeScript globally using npm (Node Package Manager), open your command line or terminal and execute the following command:

/```bash
npm install -g typescript
/```

The -g flag installs TypeScript globally, making the tsc (TypeScript Compiler) command available system-wide.

### 2. Verify the Installation
After the installation, verify that TypeScript is installed correctly by checking the version:


/```bash
tsc -v
/```

If TypeScript is installed successfully, this command will display the version number of TypeScript installed.

### Create a TypeScript File
Now, you can create your first TypeScript file. For example, create a file named hello.ts with the following content:

typescript
/```bash
let message: string = "Hello, TypeScript!";
console.log(message);
/```

### 4. Compile the TypeScript File
Compile the TypeScript file into JavaScript using the tsc command:

/```bash
tsc hello.ts
/```

This command will generate a hello.js file in the same directory, containing the transpiled JavaScript code.

### 5. Run the Compiled JavaScript File
To run the generated JavaScript file, use Node.js:

/```bash
node hello.js
/```

This command should output "Hello, TypeScript!" to the console, confirming that the setup is complete and functioning.

