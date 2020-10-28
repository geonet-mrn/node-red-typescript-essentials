"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryToRead = exports.testFileWrite = exports.stringReplaceAll = exports.formatNumberString = exports.buildUrlPath = void 0;
var fs = require("fs");
function buildUrlPath(part1, part2) {
    if (part1.slice(-1) != "/") {
        part1 += "/";
    }
    return part1 + part2;
}
exports.buildUrlPath = buildUrlPath;
function formatNumberString(value, numDecimals, decimalSeparator, thousandsSeparator) {
    if (decimalSeparator === void 0) { decimalSeparator = ","; }
    if (thousandsSeparator === void 0) { thousandsSeparator = "."; }
    if (isNaN(value)) {
        return "";
    }
    var factor = Math.pow(10, numDecimals);
    value = Math.round(value * factor) / factor;
    var piece = value.toString();
    var parts = [piece];
    if (piece.includes(".")) {
        parts = piece.split(".");
    }
    // TODO: 3 Explain this regexp. Source?
    var result = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    if (numDecimals > 0) {
        result += decimalSeparator;
        var decimalsString = "";
        if (parts.length > 1) {
            decimalsString = parts[1].substring(0, numDecimals);
        }
        result += decimalsString.padEnd(numDecimals, '0');
    }
    return result;
}
exports.formatNumberString = formatNumberString;
// To be used with "await":
function sleep(time_ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time_ms);
    });
}
function stringReplaceAll(haystack, needle, newNeedle) {
    // See https://stackoverflow.com/questions/7313395/case-insensitive-replace-all, http://stackoverflow.com/a/3561711/556609
    var esc = needle.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    return haystack.replace(reg, newNeedle);
}
exports.stringReplaceAll = stringReplaceAll;
;
function testFileWrite(filePath) {
    try {
        fs.writeFileSync(filePath, "");
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.testFileWrite = testFileWrite;
function tryToRead(rootObject, path, fallback) {
    var pathPieces = path.split('.');
    var obj = rootObject;
    for (var _i = 0, pathPieces_1 = pathPieces; _i < pathPieces_1.length; _i++) {
        var piece = pathPieces_1[_i];
        try {
            obj = obj[piece];
        }
        catch (e) {
            return fallback;
        }
    }
    return obj;
}
exports.tryToRead = tryToRead;
