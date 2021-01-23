import * as path from 'path'
import { env } from 'process';
import * as uuid from 'uuid'


export function getAbsoluteFilePath(outfilePath : string, fileEnding: string) {

    let result = outfilePath.trim()

    if (result == "") {
        result = uuid.v4() + fileEnding
    }

    // If outfile path is not absolute, set it as relative to the temp dir:
    if (!path.isAbsolute(result)) {

        let tempDir = env.tempDir

        if (tempDir == undefined) {
            console.error("env.TempDir is undefined! Stopping.")
            process.exit(1)
        }

        result = path.join(tempDir, result)
    }

    return result
}


