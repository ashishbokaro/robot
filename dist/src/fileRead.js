"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs/promises"));
const robot_1 = require("./robot");
const widthSpace = 100;
const heightSpace = 100;
function processInputFile(inputFileName, outputFileName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs.readFile(inputFileName, 'utf8');
            let lines = data.split('\n');
            lines = lines.filter(line => line.trim() !== '');
            console.log('lines', lines);
            let snNumber = 0;
            for (let i = 0; i < lines.length; i += 2) {
                if (i + 1 < lines.length) {
                    const refferncePosition = lines[i];
                    const command = lines[i + 1];
                    const robot = new robot_1.Robot(widthSpace, heightSpace);
                    const finalPosition = robot.executeCommands(refferncePosition, command);
                    console.log('initial Position:', refferncePosition, 'and command is =>', command, '=> Final Position:', finalPosition);
                    const output = `${snNumber++}.) initial Position: ${refferncePosition} and command is => ${command} => Final Position: ${finalPosition}\n\n`;
                    yield fs.writeFile(outputFileName, output, { flag: 'a' });
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
const inputFile = 'inputCommand/command.txt'; // Change this to the input file name
const outputFile = 'output/output.txt'; // Change this to the output file name
processInputFile(inputFile, outputFile);
