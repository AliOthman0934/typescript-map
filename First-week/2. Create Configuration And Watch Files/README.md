# Setting Up TypeScript Configuration and Watch Mode

## Step 1: Initialize a TypeScript Project

1. **Open Terminal or Command Prompt**: Navigate to the root directory of your TypeScript project.

2. **Initialize TypeScript Configuration**:

   /```bash
   tsc --init
   /```

This command creates a tsconfig.json file with default settings
   
## Step 2: Configure tsconfig.json

Open the tsconfig.json File: Use a text editor to open the file. It will contain settings similar to this:

json

 /```bash
{
  "compilerOptions": {
  
    "target": "es5",                           // Target JavaScript version
    
    "module": "commonjs",                      // Module system
    
    "strict": true,                            // Enable strict type-checking options
    
    "esModuleInterop": true,                   // Compatibility with CommonJS and ES Modules
    
    "skipLibCheck": true,                      // Skip type checking of declaration files
    
    "forceConsistentCasingInFileNames": true   // Ensure consistent casing in imports
    
  }
}
/```

Customize Your Configuration: Modify the tsconfig.json as needed. Commonly adjusted settings include:

target: Specifies the ECMAScript target version (e.g., es5, es6).

module: Defines the module system (e.g., commonjs, es6).

outDir: Sets the output directory for compiled JavaScript files.

rootDir: Specifies the root directory of input TypeScript files.

Example configuration:

json

/```bash
{
  "compilerOptions": {
  
    "target": "es6",
    
    "module": "commonjs",
    
    "outDir": "./dist",
    
    "rootDir": "./src",
    
    "strict": true,
    
    "esModuleInterop": true
  },
  
  "include": ["src/**/*"]
}
/```


## Step 3: Compile and Watch TypeScript Files

Compile TypeScript Files:

/```bash
tsc
/```

This command compiles TypeScript files according to the tsconfig.json configuration.

Enable Watch Mode:

/```bash
tsc --watch
/```

This command watches the source files and recompiles them upon any changes, providing a live development environment.
