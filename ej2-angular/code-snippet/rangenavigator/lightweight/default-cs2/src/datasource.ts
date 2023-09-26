/**
 * Range Navigator datasource
 */


export function GetDateTimeData(start: Date, end: Date, min?: number, max?: number, inc?: number): object[] {
    let series1: object[] = [];
    let point: object = {};
    let value: number = 100;
    let date: number;
    inc = inc ? inc : 1;
    for (let i: number = 0; start <= end; i += inc) {
        date = start.getTime();
        if (min || max) {
            value = getRandomInt(min as number, max as number);
        } else {
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
        }
        point = { x: new Date(date), y: value };
        new Date(start.setDate(start.getDate() + 1));
        series1.push(point);
    }
    return series1;
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}