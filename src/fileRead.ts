import * as fs from 'fs/promises';
import Robot from './robot';

const widthSpace = 100;
const heightSpace = 100;

async function processInputFile(inputFileName: string, outputFileName: string): Promise<void> {
    try {
        const data = await fs.readFile(inputFileName, 'utf8');
        let lines = data.split('\n');
        lines = lines.filter(line => line.trim() !== '');
        console.log('lines', lines);
        let snNumber = 0;

        for (let i = 0; i < lines.length; i += 2) {
            if (i + 1 < lines.length) {
                const refferncePosition = lines[i];
                const command = lines[i + 1];
                const robot = new Robot(widthSpace, heightSpace)
                const finalPosition = robot.executeCommands(refferncePosition, command);

                console.log('initial Position:', refferncePosition, 'and command is =>', command, '=> Final Position:', finalPosition);
                const output = `${snNumber++}.) initial Position: ${refferncePosition} and command is => ${command} => Final Position: ${finalPosition}\n\n`;

                await fs.writeFile(outputFileName, output, { flag: 'a' });
            }
        }
    } catch (error) {
        console.error(error);
    }
}

const inputFile = 'inputCommand/command.txt'; // Change this to the input file name
const outputFile = 'output/output.txt'; // Change this to the output file name

processInputFile(inputFile, outputFile);