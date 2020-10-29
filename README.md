
# Table of Contents
  - 1.) [What is this?](#1-what-is-this)
  - 2.) [The difference between this package and node-red-contrib-typescript-template (READ THIS!)](#2-the-difference-between-this-package-and-node-red-contrib-typescript-template-read-this)
  - 3.) [Installation](#3-installation)
  - 4.) [Usage](#4-usage)
  - 5.) [The *node-red-typescript-boilerplate* command line tool](#5-the-node-red-typescript-boilerplate-command-line-tool)
  - 6.) [Credits and References](#6-credits-and-references)

# 1. What is this?
node-red-typescript-essentials is a collection of TypeScript classes and functions to facilitate the creation of Node-RED extension nodes with TypeScript. 

Its main component is the `AbstractNode` class. `AbstractNode` is a combination of TS type definition, wrapper and extension of Node-RED's JavaScript node module structure. You can find an introduction about how to define a Node-RED node using Node RED's original JavaScript syntax here: https://node-red.org/docs/creating-nodes/first-node .

`AbstractNode` provides a TypeScript/EcmaScript 6 class syntax based "framework" to write Node-RED nodes in a modern and type-checked way. In addition to this role, `AbstractNode` also provides a couple of additional features which are not available in the original Node-RED API, like, for example, the `getPrevNodes()` and `getNextNodes()` methods. As their names say, these methods retrieve the previous and next nodes (by defined node connections) of a node. These additions simplify and accelerate the development of more advanced node behaviour.

# 2. The difference between this package and node-red-contrib-typescript-template (READ THIS!)

We provide another Node-RED and TypeScript-related npm package named *node-red-contrib-typescript-template* on our GitHub account:

https://github.com/geonet-mrn/node-red-contrib-typescript-template

The two packages are *closely related*, but they do *different things*. Please read this section carefully, it is important to understand in order to make the best use of the two projects and get started quickly and without unnecessary confusion.

*node-red-typescript-essentials*, the package for which you are currently reading the README file, is a library that provides "building blocks" to create Node-RED extensions with TypeScript quickly and easily. However, this library is *NOT a project/package template for a Node-RED extension*. It is meant to be included as a *dependency* in a Node-RED extension package project.

This is where *node-red-typescript-template*, our *other* package, comes into play. node-red-typescript-template *is* an example/template for Node-RED extensions using TypeScript, and it uses *node-red-typescript-essentials* as an external depencency.

The idea behind this is to be able to include *node-red-typescript-essentials* as an external dependency in many different Node-RED extension projects. By keeping the library as an external dependency, it can be developed independently of actual Node-RED extension packages, and the projects that use it can automatically benefit from additions and improvements to it.




# 3. Installation

This package is not yet published on npm as of 2020-10-28.

However, with the following command, you can install this package directly from GitHub:

`npm install geonet-mrn/node-red-typescript-essentials`

This will install the latest version of the master branch.

# 4. Usage

The development of a Node-RED extension with node-red-typescript-essentials consists of the followings steps:

1. Set up a new npm package project with `npm init`


2. Add node-red-typescript-essentials as a dependency with `npm install geonet-mrn/node-red-typescript-essentials`

3. Write the code for your new node(s). For a quick start, you can use the `node-red-typescript-boilerplate`, a command line tool which is included in this library.

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

# 5. The *node-red-typescript-boilerplate* command line tool

The package contains a command line tool to automatically generate the TypeScript boilerplate code for a new Node-RED node. The tool itself is written in TypeScript and its compiled JavaScript file is `create-node-boilerplate.js`.

On Ubuntu Linux and Debian, the tool can be installed for system-wide use with the following steps:

1. Navigate to the installation of this package. If you have installed this package with npm, go to `<your project folder>/node_modules/node-red-typescript-essentials`. If you have cloned this repository with a "normal" Git client (i.e. not with npm), go to the cloned package directory.

2. In the package directory, enter the following command:

   `sudo npm link`

This will set up an executable file at `/usr/local/bin/node-red-typescript-boilerplate`. Since `/usr/local/bin` belongs to the system-wide search path for executable files, you can run the tool from any working with the following command:

`node-red-typescript-boilerplate <name>`

The command line parameter `<name>` (without the angle brackets) specified the name of the new node you are about to create. The tool will create a subfolder with the specified name in the current working directory. The folder will contain two files: `<name>.ts` contains the new node's TypeScript class code.`<name>.html` contains the HTML node configuration form code for Node-RED's user interface. For further information about how to create a Node-RED node with node-red-typescript-essentions, please refer to the respective section of this document.






# 6. Credits and References

This TypeScript library npm package was created following the instructions described here:

https://www.tsmean.com/articles/how-to-write-a-typescript-library/
