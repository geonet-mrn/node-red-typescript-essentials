
# Table of Contents
-  1.) (#what-is-this)
-  2.) Installation
-  3.) Usage
-  4.) The *nodered-typescript-boilerplate* command line tool
-  5.) Credits and References

# 1. What is this?
nodered-typescript-essentials is a collection of TypeScript classes and functions to facilitate the creation of Node-RED extension nodes with TypeScript. 

Its main component is the `AbstractNode` class. `AbstractNode` is a combination of TS type definition, wrapper and extension of Node-RED's JavaScript node module structure. You can find an introduction about how to define a Node-RED node using Node RED's original JavaScript syntax here: https://nodered.org/docs/creating-nodes/first-node .

`AbstractNode` provides a TypeScript/EcmaScript 6 class syntax based "framework" to write Node-RED nodes in a modern and type-checked way. In addition to this role, `AbstractNode` also provides a couple of additional features which are not available in the original Node-RED API, like, for example, the `getPrevNodes()` and `getNextNodes()` methods. As their names say, these methods retrieve the previous and next nodes (by defined node connections) of a node. These additions simplify and accelerate the development of more advanced node behaviour.

# 2. Installation

This package is not yet published on npm as of 2020-10-28.

However, with the following command, you can install this package directly from GitHub:

`npm install geonet-mrn/nodered-typescript-essentials`

This will install the latest version of the master branch.

# 3. Usage

The development of a Node-RED extension with nodered-typescript-essentials consists of the followings steps:

1. Set up a new npm package project with `npm init`


2. Add nodered-typescript-essentials as a dependency with `npm install geonet-mrn/nodered-typescript-essentials`

3. Write the code for your new node(s). For a quick start, you can use the `nodered-typescript-boilerplate`, a command line tool which is included in this library.

4. Register your new nodes in the `package.json` file of your package. You do this by adding the following structure to  your `package.json`:

```
   ...

   "node-red" : {
        "nodes": {
            "my-node-name": "path/to/my/node/file.js"
        }
   }   
   
   ...
```

5. Compile your project to JavaScript. Your `tsconfig.json` should look like this:

```
{
  "compilerOptions": {
    "module": "commonjs",
    "moduleResolution": "node",
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "es5",
    "strict" : true,
    "experimentalDecorators": true   
  },
  
  "exclude": [
    "dist",
    "node_modules"
  ]
}
```

# 4. The *nodered-typescript-boilerplate* command line tool

The package contains a command line tool to automatically generate the TypeScript boilerplate code for a new Node-RED node. The tool itself is written in TypeScript and its compiled JavaScript file is `create-node-boilerplate.js`.

On Ubuntu Linux and Debian, the tool can be installed for system-wide use with the following steps:

1. Navigate to the installation of this package. If you have installed this package with npm, go to `<your project folder>/node_modules/nodered-typescript-essentials`. If you have cloned this repository with a "normal" Git client (i.e. not with npm), go to the cloned package directory.

2. In the package directory, enter the following command:

   `sudo npm link`

This will set up an executable file at `/usr/local/bin/nodered-typescript-boilerplate`. Since `/usr/local/bin` belongs to the system-wide search path for executable files, you can run the tool from any working with the following command:

`nodered-typescript-boilerplate <name>`

The command line parameter `<name>` (without the angle brackets) specified the name of the new node you are about to create. The tool will create a subfolder with the specified name in the current working directory. The folder will contain two files: `<name>.ts` contains the new node's TypeScript class code.`<name>.html` contains the HTML node configuration form code for Node-RED's user interface. For further information about how to create a Node-RED node with nodered-typescript-essentions, please refer to the respective section of this document.






# 5. Credits and References

This TypeScript library npm package was created following the instructions described here:

https://www.tsmean.com/articles/how-to-write-a-typescript-library/
