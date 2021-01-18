import * as fs from 'fs'

export function buildUrlPath(part1: string, part2: string): string {
    if (part1.slice(-1) != "/") {
        part1 += "/"
    }

    return part1 + part2
}


export function formatNumberString(value: number, numDecimals: number, decimalSeparator : string = ",", thousandsSeparator : string = ".") {

    if (isNaN(value)) {
        return ""
    }

    let factor = Math.pow(10,numDecimals)

    value = Math.round(value * factor) / factor

    let piece = value.toString()

    let parts = [piece]

    if (piece.includes(".")) {
        parts = piece.split(".")        
    }


    // TODO: 3 Explain this regexp. Source?
    let result = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);


    if (numDecimals > 0) {
        result += decimalSeparator

        let decimalsString = ""

        if (parts.length > 1) {
            decimalsString = parts[1].substring(0, numDecimals)
        }

        result += decimalsString.padEnd(numDecimals, '0');
    }

  
    return result;
}



// To be used with "await":
export function sleep(time_ms : number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time_ms);
    });
}



export function stringReplaceAll(haystack: string, needle: string, newNeedle: string) {
    // See https://stackoverflow.com/questions/7313395/case-insensitive-replace-all, http://stackoverflow.com/a/3561711/556609
    var esc = needle.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    return haystack.replace(reg, newNeedle);
};


export function testFileWrite(filePath: string): Boolean {
    try {
        fs.writeFileSync(filePath, "")
        return true
    }
    catch (e) {
        return false
    }
}


export function tryToRead(rootObject: any, path: string, fallback: any) {

    let pathPieces = path.split('.')

    let obj = rootObject

    for (let piece of pathPieces) {

        try {
            obj = obj[piece]
        }
        catch (e) {
            return fallback
        }      
    }

    return obj
}

