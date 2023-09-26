/**
 * chart data source
 */
export class ChartData {
    getScatterData(): any {
        let series1: Object[] = [];
        let series2: Object[] = [];
        let point1: Object;
        let value: number = 80;
        let value1: number = 70;
        let i: number;
        for (i = 1; i < 120; i++) {
            if (Math.random() > 0.5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            value = value < 60 ? 60 : value > 90 ? 90 : value;
            point1 = { x: 120 + (i / 2), y: value.toFixed(1) };
            series1.push(point1);
        }
        for (i = 1; i < 120; i++) {
            if (Math.random() > 0.5) {
                value1 += Math.random();
            } else {
                value1 -= Math.random();
            }
            value1 = value1 < 60 ? 60 : value1 > 90 ? 90 : value1;
            point1 = { x: 120 + (i / 2), y: value1.toFixed(1) };
            series2.push(point1);
        }
        return { 'series1':series1, 'series2': series2};
    }
}