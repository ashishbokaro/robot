"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
class Robot {
    constructor(widthSpace, heightSpace) {
        this.widthSpace = widthSpace;
        this.heightSpace = heightSpace;
    }
    parsePosition(positionString) {
        const [direction, x, y] = positionString.split(' ');
        return {
            direction,
            x: parseInt(x),
            y: parseInt(y),
        };
    }
    moveForward(position, widthSpace, heightSpace, count) {
        switch (position.direction) {
            case 'N':
                position.y = (position.y + count) % heightSpace;
                break;
            case 'E':
                position.x = (position.x + count) % widthSpace;
                break;
            case 'S':
                position.y = (position.y - count + heightSpace) % heightSpace;
                break;
            case 'W':
                position.x = (position.x - count + widthSpace) % widthSpace;
                break;
            default:
                break;
        }
    }
    rotateLeft(position, count) {
        const directions = ['N', 'W', 'S', 'E'];
        const currentIndex = directions.indexOf(position.direction);
        position.direction = directions[(currentIndex + count) % 4];
    }
    rotateRight(position, count) {
        const directions = ['N', 'E', 'S', 'W'];
        const currentIndex = directions.indexOf(position.direction);
        position.direction = directions[(currentIndex + count) % 4];
    }
    executeCommands(referencePosition, commands) {
        const position = this.parsePosition(referencePosition);
        const commandRegex = /([LRMB])(\d*)/g;
        let match;
        while ((match = commandRegex.exec(commands))) {
            const action = match[1];
            const count = match[2] ? parseInt(match[2]) : 1;
            if (action === 'M')
                this.moveForward(position, this.widthSpace, this.heightSpace, count);
            else if (action === 'L')
                this.rotateLeft(position, count);
            else if (action === 'R')
                this.rotateRight(position, count);
        }
        return `${position.direction} ${position.x} ${position.y}`;
    }
}
exports.Robot = Robot;
