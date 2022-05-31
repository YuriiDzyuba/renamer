import * as path from "path";
import { ReNamEr } from "./renamer";

const pathToSourceFolder = path.join(__dirname, 'source')

const renamer = new ReNamEr(pathToSourceFolder)

//current name - example
//type new name for documents paths and entities
renamer.renameAll('example', 'account')
