import Position from './model/position'

export default class Robot {
    constructor(private widthSpace: number, private heightSpace: number) { }

    private parsePosition(positionString: string): Position {
        const [direction, x, y] = positionString.split(' ');
        return {
            direction,
            x: parseInt(x),
            y: parseInt(y),
        };
    }

    private moveForward(position: Position, widthSpace: number, heightSpace: number, count: number): void {
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

    private rotateLeft(position: Position, count: number): void {
        const directions = ['N', 'W', 'S', 'E'];
        const currentIndex = directions.indexOf(position.direction);
        position.direction = directions[(currentIndex + count) % 4];
    }

    private rotateRight(position: Position, count: number): void {
        const directions = ['N', 'E', 'S', 'W'];
        const currentIndex = directions.indexOf(position.direction);
        position.direction = directions[(currentIndex + count) % 4];
    }

    public executeCommands(referencePosition: string, commands: string): string {
        const position = this.parsePosition(referencePosition);

        const commandRegex = /([LRM])(\d*)/g;
        let match: RegExpExecArray | null;
        while ((match = commandRegex.exec(commands))) {
            const action = match[1];
            const count = match[2] ? parseInt(match[2]) : 1;
            if (action === 'M') this.moveForward(position, this.widthSpace, this.heightSpace, count);
            else if (action === 'L') this.rotateLeft(position, count);
            else if (action === 'R') this.rotateRight(position, count);
        }
        return `${position.direction} ${position.x} ${position.y}`;
    }
}