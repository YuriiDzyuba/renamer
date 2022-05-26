import * as fs from 'fs';
import * as path from 'path';


const srcAddress = path.join(__dirname, 'source')

const getAllFiles = (dirPath, arrayOfFiles = []) => {
    let files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            const dirName = path.dirname(path.join(__dirname, dirPath))
            const newName = file.replace('account', 'yui');
            fs.rename(path.join(dirName, file), path.join(dirName, newName),(err)=>{
                console.log(err)
            })
        }
    })

    return arrayOfFiles
}

getAllFiles(srcAddress)





