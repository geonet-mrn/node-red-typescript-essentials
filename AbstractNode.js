"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractNode = void 0;
var AbstractNode = /** @class */ (function () {
    // TODO: 4 Decide whether "config" in AbstractNode should be a class member or not. "config" *is* a class
    // member in all derived classes, but can have a different type there. What is the best/correct solution here?
    function AbstractNode(config, RED) {
        this.RED = RED;
        RED.nodes.createNode(this, config);
    }
    //########### END Log methods ##########
    //################# BEGIN properties to access context ################
    // https://nodered.org/docs/creating-nodes/context
    AbstractNode.prototype.getNodeContext = function () {
        return this.context();
    };
    AbstractNode.prototype.getFlowContext = function () {
        return this.context().flow;
    };
    AbstractNode.prototype.getGlobalContext = function () {
        return this.context().global;
    };
    //################# END properties to access context ################
    // TODO: 3 Define 'AbstractNode' type for the result array here?
    AbstractNode.prototype.getNextNodes = function () {
        var _this = this;
        var result = [];
        this.RED.nodes.eachNode(function (node) {
            // TODO: 3 Finish this
            for (var _i = 0, _a = _this.wires; _i < _a.length; _i++) {
                var wire = _a[_i];
                for (var _b = 0, _c = wire; _b < _c.length; _b++) {
                    var id = _c[_b];
                    if (id == node.id) {
                        result.push(node);
                    }
                }
            }
        });
        return result;
    };
    // TODO: 3 Define 'AbstractNode' type for the result array here?
    AbstractNode.prototype.getPrevNodes = function () {
        var _this = this;
        var result = [];
        this.RED.nodes.eachNode(function (node) {
            if (node.wires == undefined) {
                return;
            }
            for (var _i = 0, _a = node.wires; _i < _a.length; _i++) {
                var wire = _a[_i];
                for (var _b = 0, wire_1 = wire; _b < wire_1.length; _b++) {
                    var id = wire_1[_b];
                    if (id == _this.id) {
                        result.push(node);
                    }
                }
            }
        });
        return result;
    };
    return AbstractNode;
}());
exports.AbstractNode = AbstractNode;
