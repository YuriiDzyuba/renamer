import * as path from "path";
import { ReNamEr } from "./renamer";

const pathToSourceFolder = path.join(__dirname, 'source')

const renamer = new ReNamEr(pathToSourceFolder)

renamer.renameAll('post', 'example')
