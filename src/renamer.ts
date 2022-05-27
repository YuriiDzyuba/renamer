import * as fs from "fs";
import * as path from "path";

export class ReNamEr {
  private readonly pathsToFiles: string[];

  constructor(pathToFolder) {
    console.log(pathToFolder)
    this.pathsToFiles = this.getAllFilesPaths(pathToFolder);
  }

  renameAll(oldFragment, newFragment) {
    this.renameInFiles(this.pathsToFiles, oldFragment, newFragment);
    this.renameFiles(this.pathsToFiles, oldFragment, newFragment);
  }

  private getAllFilesPaths(dirPath, arrayOfFiles = []) {
    function getPaths (dirPath, arrayOfFiles = []) {
      let files = fs.readdirSync(dirPath);

      arrayOfFiles = arrayOfFiles || [];

      files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
          arrayOfFiles = getPaths(dirPath + "/" + file, arrayOfFiles)
        } else {
          arrayOfFiles.push(path.join(dirPath, "/", file));
        }
      });
      return arrayOfFiles;
    }
    return getPaths(dirPath, arrayOfFiles)
  }

  private renameInFiles(paths, oldFragment, newFragment) {
    for (const pathToFile of paths) {
      const fileContent = fs.readFileSync(pathToFile, "utf-8");
      fs.unlinkSync(pathToFile);

      const oldWordUpperCase = oldFragment.charAt(0).toUpperCase() + oldFragment.slice(1);
      const newWordUpperCase = newFragment.charAt(0).toUpperCase() + newFragment.slice(1);

      const oldLowerCase = new RegExp(oldFragment, "g");
      const oldUpperCase = new RegExp(oldWordUpperCase, "g");

      let newContent = fileContent
        .replace(oldLowerCase, newFragment)
        .replace(oldUpperCase, newWordUpperCase);
      console.log(newContent);

      fs.writeFileSync(pathToFile, newContent);
    }
  }

  private renameFiles(paths, oldFragment, newFragment) {
    for (const pathToFile of paths) {
      const dirName = path.dirname(pathToFile);
      const fileName = path.basename(pathToFile);
      const newName = fileName.replace(oldFragment, newFragment);

      fs.renameSync(pathToFile, path.join(dirName, newName));
    }
  }
}
