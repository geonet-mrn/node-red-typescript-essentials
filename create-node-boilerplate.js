#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var cmdArgs = process.argv.slice(2);
if (cmdArgs.length == 0) {
    console.log("Please provide a name for the node as a command line argument");
    process.exit();
}
var node_name = cmdArgs[0];
var template_ts = "\nimport { AbstractNode } from 'nodered-typescript-essentials/AbstractNode'\nimport { NodeStatus, Shape, Fill } from 'nodered-typescript-essentials/node_status'\n\n\nmodule.exports = function (RED: any) {\n\n    class SampleNode extends AbstractNode {\n     \n        constructor(public config: any) {\n            super(config, RED)          \n        \n            this.on('input', this.onInput);\n        }\n\n        onInput(msg: any) {}\n    }\n\n    RED.nodes.registerType(\"<<node_name>>\", SampleNode);\n}";
var template_html = "<script type=\"text/javascript\">\n    RED.nodes.registerType('<<node_name>>',{\n        category: 'function',\n        color: '#a6bbcf',\n        defaults: {\n            name: {value:\"\"}\n        },\n        inputs:1,\n        outputs:1,\n        //icon: \"file.png\",\n        label: function() {\n            return this.name||'<<node_name>>';\n        }\n    });\n</script>\n\n<script type=\"text/html\" data-template-name=\"<<node_name>>\">\n    <div class=\"form-row\">\n        <label for=\"node-input-name\"><i class=\"fa fa-tag\"></i> Name</label>\n        <input type=\"text\" id=\"node-input-name\" placeholder=\"Name\">\n    </div>\n</script>\n\n<script type=\"text/html\" data-help-name=\"<<node_name>>\">\n    <p>A Node-RED node</p>\n</script>";
var template_ts_replaced = template_ts.replace(/<<node_name>>/g, node_name);
var template_html_replaced = template_html.replace(/<<node_name>>/g, node_name);
if (!fs.existsSync(node_name)) {
    fs.mkdirSync(node_name);
}
fs.writeFileSync(path.join(node_name, node_name + ".ts"), template_ts_replaced);
fs.writeFileSync(path.join(node_name, node_name + ".html"), template_html_replaced);
