 
# How to install and use this package

This package is not yet published on npm as of 2020-10-28.

However, with the following command, you can install this package directly from GitHub:

`npm install geonet-mrn/nodered-typescript-essentials`

This will install the latest version of the master branch.


# The *nodered-typescript-boilerplate* command line tool

The package contains a command line tool to automatically generate the TypeScript boilerplate code for a new Node-RED node. The tool itself is written in TypeScript and its compiled JavaScript file is `create-node-boilerplate.js`.

On Ubuntu Linux and Debian, the tool can be installed for system-wide use with the following steps:

1. Navigate to the installation of this package. If you have installed this package with npm, go to `<your project folder>/node_modules/nodered-typescript-essentials`. If you have cloned this repository with a "normal" Git client (i.e. not with npm), go to the cloned package directory.

2. In the package directory, enter the following command:

   `sudo npm link`

This will set up an executable file at `/usr/local/bin/nodered-typescript-boilerplate`. Since `/usr/local/bin` belongs to the system-wide search path for executable files, you can run the tool from any working with the following command:

`nodered-typescript-boilerplate <name>`

The command line parameter `<name>` (without the angle brackets) specified the name of the new node you are about to create. The tool will create a subfolder with the specified name in the current working directory. The folder will contain two files: `<name>.ts` contains the new node's TypeScript class code.`<name>.html` contains the HTML node configuration form code for Node-RED's user interface. For further information about how to create a Node-RED node with nodered-typescript-essentions, please refer to the respective section of this document.






# Credits and References

This TypeScript library npm package was created following the instructions described here:

https://www.tsmean.com/articles/how-to-write-a-typescript-library/
