"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeStatus = exports.Fill = exports.Shape = void 0;
var Shape;
(function (Shape) {
    Shape[Shape["ring"] = 0] = "ring";
    Shape[Shape["dot"] = 1] = "dot";
})(Shape = exports.Shape || (exports.Shape = {}));
var Fill;
(function (Fill) {
    Fill[Fill["red"] = 0] = "red";
    Fill[Fill["green"] = 1] = "green";
    Fill[Fill["yellow"] = 2] = "yellow";
    Fill[Fill["blue"] = 3] = "blue";
    Fill[Fill["grey"] = 4] = "grey";
})(Fill = exports.Fill || (exports.Fill = {}));
class NodeStatus {
    constructor(text = undefined, fill = undefined, shape = undefined) {
        this.text = text;
        this.fill = fill;
        this.shape = shape;
    }
}
exports.NodeStatus = NodeStatus;
