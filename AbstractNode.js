"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractNode = void 0;
class AbstractNode {
    // TODO: 4 Decide whether "config" in AbstractNode should be a class member or not. "config" *is* a class
    // member in all derived classes, but can have a different type there. What is the best/correct solution here?
    constructor(config, RED) {
        this.RED = RED;
        RED.nodes.createNode(this, config);
    }
    //########### END Log methods ##########
    //################# BEGIN properties to access context ################
    // https://nodered.org/docs/creating-nodes/context
    getNodeContext() {
        return this.context();
    }
    getFlowContext() {
        return this.context().flow;
    }
    getGlobalContext() {
        return this.context().global;
    }
    //################# END properties to access context ################
    // TODO: 3 Define 'AbstractNode' type for the result array here?
    getNextNodes() {
        let result = [];
        this.RED.nodes.eachNode((node) => {
            // TODO: 3 Finish this
            for (let wire of this.wires) {
                for (let id of wire) {
                    if (id == node.id) {
                        result.push(node);
                    }
                }
            }
        });
        return result;
    }
    // TODO: 3 Define 'AbstractNode' type for the result array here?
    getPrevNodes() {
        let result = [];
        this.RED.nodes.eachNode((node) => {
            if (node.wires == undefined) {
                return;
            }
            for (let wire of node.wires) {
                for (let id of wire) {
                    if (id == this.id) {
                        result.push(node);
                    }
                }
            }
        });
        return result;
    }
}
exports.AbstractNode = AbstractNode;
