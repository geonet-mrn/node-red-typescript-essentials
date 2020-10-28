#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'

var cmdArgs = process.argv.slice(2);

if (cmdArgs.length == 0) {
    console.log("Please provide a name for the node as a command line argument")
    process.exit()
}

let node_name = cmdArgs[0]


let template_ts = `
import { AbstractNode } from 'nodered-typescript-essentials/AbstractNode'
import { NodeStatus, Shape, Fill } from 'nodered-typescript-essentials/node_status'


module.exports = function (RED: any) {

    class SampleNode extends AbstractNode {
     
        constructor(public config: any) {
            super(config, RED)          
        
            this.on('input', this.onInput);
        }

        onInput(msg: any) {}
    }

    RED.nodes.registerType("<<node_name>>", SampleNode);
}`

let template_html = `<script type="text/javascript">
    RED.nodes.registerType('<<node_name>>',{
        category: 'function',
        color: '#a6bbcf',
        defaults: {
            name: {value:""}
        },
        inputs:1,
        outputs:1,
        //icon: "file.png",
        label: function() {
            return this.name||'<<node_name>>';
        }
    });
</script>

<script type="text/html" data-template-name="<<node_name>>">
    <div class="form-row">
        <label for="node-input-name"><i class="fa fa-tag"></i> Name</label>
        <input type="text" id="node-input-name" placeholder="Name">
    </div>
</script>

<script type="text/html" data-help-name="<<node_name>>">
    <p>A Node-RED node</p>
</script>`

let template_ts_replaced = template_ts.replace(/<<node_name>>/g, node_name)
let template_html_replaced = template_html.replace(/<<node_name>>/g, node_name)

if (!fs.existsSync(node_name)) {
    fs.mkdirSync(node_name)
}

fs.writeFileSync(path.join(node_name, node_name + ".ts"), template_ts_replaced)
fs.writeFileSync(path.join(node_name, node_name + ".html"), template_html_replaced)
