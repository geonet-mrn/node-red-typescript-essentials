"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbsoluteFilePath = void 0;
const path = require("path");
const process_1 = require("process");
const uuid = require("uuid");
function getAbsoluteFilePath(outfilePath, fileEnding) {
    let result = outfilePath.trim();
    if (result == "") {
        result = uuid.v4() + fileEnding;
    }
    // If outfile path is not absolute, set it as relative to the temp dir:
    if (!path.isAbsolute(result)) {
        let tempDir = process_1.env.tempDir;
        if (tempDir == undefined) {
            console.error("env.TempDir is undefined! Stopping.");
            process.exit(1);
        }
        result = path.join(tempDir, result);
    }
    return result;
}
exports.getAbsoluteFilePath = getAbsoluteFilePath;
