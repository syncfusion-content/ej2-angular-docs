//datasource for chart
export let categoryData: Object[] = [
                { country: "USA", gold: 50, silver: 70, bronze: 45 },
                { country: "China", gold: 40, silver: 60, bronze: 55 },
                { country: "Japan", gold: 70, silver: 60, bronze: 50 },
                { country: "Australia", gold: 60, silver: 56, bronze: 40 },
                { country: "France", gold: 50, silver: 45, bronze: 35 },
                { country: "Germany", gold: 40, silver: 30, bronze: 22 },
                { country: "Italy", gold: 40, silver: 35, bronze: 37 },
                { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
        ];

export let tickData: Object[] =[
                { x: 'Jan', y: 60 }, { x: 'Feb', y: 50 }, { x: 'Mar', y: 64 },
                { x: 'Apr', y: 63 }, { x: 'May', y: 81 }, { x: 'Jun', y: 64 },
                { x: 'Jul', y: 82 }, { x: 'Aug', y: 96 }, { x: 'Sep', y: 78 },
                { x: 'Oct', y: 60 }, { x: 'Nov', y: 58 }, { x: 'Dec', y: 56 }
        ];

export let multipleData: Object[] = [
                { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
                { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
                { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
                { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
        ];

export let inverseData: Object[] = [
        { x: 2008, y: 15.1 }, { x: 2009, y: 16 }, { x: 2010, y: 21.4 },
        { x: 2011, y: 18 }, { x: 2012, y: 16.2 }, { x: 2013, y: 11 },
        { x: 2014, y: 7.6 }, { x: 2015, y: 1.5 }
        ];

export let data: Object[] = [
        { x: 'Germany', y: 72, country: 'GER: 72' },
        { x: 'Russia', y: 103.1, country: 'RUS: 103.1' },
        { x: 'Brazil', y: 139.1, country: 'BRZ: 139.1' },
        { x: 'India', y: 462.1, country: 'IND: 462.1' },
        { x: 'China', y: 721.4, country: 'CHN: 721.4' },
        { x: 'United States<br>Of America', y: 286.9, country: 'USA: 286.9' },
        { x: 'Great Britain', y: 115.1, country: 'GBR: 115.1' },
        { x: 'Nigeria', y: 97.2, country: 'NGR: 97.2' },
];

export let series1: Object[] = [];
    let point1: Object;
    let value: number = 80;
    let i: number;
    for (i = 1; i < 50; i++) {
        if (Math.random() > .5) {
            value += Math.random();
        } else {
            value -= Math.random();
        }
        point1 = { x: i, y: value.toFixed(1) };
        series1.push(point1);
    }