/**
 * chart data source
 */
export class ChartData {
    getCrosshairData(): any {
        let series1: Object[] = [];
        let series2: Object[] = [];
        let point1: Object;
        let point2: Object;
        let value: number = 60;
        let value1: number = 50;
        let i: number;
        for (i = 1; i < 250; i++) {
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            point1 = { x: new Date(2000, i, 1), y: value };
            series1.push(point1);
        }
        for (i = 1; i < 250; i++) {
            if (Math.random() > .5) {
                value1 += Math.random();
            } else {
                value1 -= Math.random();
            }
            point2 = { x: new Date(2000, i, 1), y: value1 };
            series2.push(point2);
        }
        return { 'series1': series1, 'series2': series2};
    }
}