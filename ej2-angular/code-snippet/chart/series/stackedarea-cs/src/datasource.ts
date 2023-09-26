export let areaData: Object[] = [
        { x: 1900, y: 4 }, { x: 1920, y: 3.0 }, { x: 1940, y: 3.8 },
        { x: 1960, y: 3.4 }, { x: 1980, y: 3.2 }, { x: 2000, y: 3.9 }
];
export let rangeData: Object[] = [
        { x: 'Jan', low: 0.7, high: 6.1 }, { x: 'Feb', low: 1.3, high: 6.3 },
        { x: 'Mar', low: 1.9, high: 8.5 }, { x: 'Apr', low: 3.1, high: 10.8 },
        { x: 'May', low: 5.7, high: 14.4 }, { x: 'June', low: 8.4, high: 16.9 },
        { x: 'July', low: 10.6, high: 19.2 }, { x: 'Aug', low: 10.5, high: 18.9 },
        { x: 'Sep', low: 8.5, high: 16.1 }, { x: 'Oct', low: 6.0, high: 12.5 },
        { x: 'Nov', low: 1.5, high: 6.9 }, { x: 'Dec', low: 5.1, high: 12.1 }
];
export let splineRangeData: object[] = [
        { x: 'Jan', high: 14, low: 4, high1: 29, low1: 19 },
        { x: 'Feb', high: 17, low: 7, high1: 32, low1: 22 },
        { x: 'Mar', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Apr', high: 22, low: 12, high1: 37, low1: 27 },
        { x: 'May', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Jun', high: 17, low: 7, high1: 32, low1: 22 },
        { x: 'Jul', high: 15, low: 5, high1: 30, low1: 20 },
        { x: 'Aug', high: 17, low: 7, high1: 32, low1: 22 },
        { x: 'Sep', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Oct', high: 22, low: 12, high1: 37, low1: 27 },
        { x: 'Nov', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Dec', high: 17, low: 7, high1: 32, low1: 22 }
];
export let stackedData: Object[] = [
        { x: new Date(2000, 0, 1), y: 0.61, y1: 0.03, y2: 0.48, y3: 0.23 },
        { x: new Date(2001, 0, 1), y: 0.81, y1: 0.05, y2: 0.53, y3: 0.17 },
        { x: new Date(2002, 0, 1), y: 0.91, y1: 0.06, y2: 0.57, y3: 0.17 },
        { x: new Date(2003, 0, 1), y: 1, y1: 0.09, y2: 0.61, y3: 0.20 },
        { x: new Date(2004, 0, 1), y: 1.19, y1: 0.14, y2: 0.63, y3: 0.23 },
        { x: new Date(2005, 0, 1), y: 1.47, y1: 0.20, y2: 0.64, y3: 0.36 },
        { x: new Date(2006, 0, 1), y: 1.74, y1: 0.29, y2: 0.66, y3: 0.43 },
        { x: new Date(2007, 0, 1), y: 1.98, y1: 0.46, y2: 0.76, y3: 0.52 },
        { x: new Date(2008, 0, 1), y: 1.99, y1: 0.64, y2: 0.77, y3: 0.72 },
        { x: new Date(2009, 0, 1), y: 1.70, y1: 0.75, y2: 0.55, y3: 1.29 },
        { x: new Date(2010, 0, 1), y: 1.48, y1: 1.06, y2: 0.54, y3: 1.38 },
        { x: new Date(2011, 0, 1), y: 1.38, y1: 1.25, y2: 0.57, y3: 1.82 },
        { x: new Date(2012, 0, 1), y: 1.66, y1: 1.55, y2: 0.61, y3: 2.16 },
        { x: new Date(2013, 0, 1), y: 1.66, y1: 1.55, y2: 0.67, y3: 2.51 },
        { x: new Date(2014, 0, 1), y: 1.67, y1: 1.65, y2: 0.67, y3: 2.61 }
];
export let percentData: Object[] = [
        { x: new Date(2006, 0, 1), y: 34, y1: 51, y2: 14, y3: 37 },
        { x: new Date(2007, 0, 1), y: 20, y1: 26, y2: 34, y3: 15 },
        { x: new Date(2008, 0, 1), y: 40, y1: 37, y2: 73, y3: 53 },
        { x: new Date(2009, 0, 1), y: 51, y1: 51, y2: 51, y3: 51 },
        { x: new Date(2010, 0, 1), y: 26, y1: 26, y2: 26, y3: 26 },
        { x: new Date(2011, 0, 1), y: 37, y1: 37, y2: 37, y3: 37 },
        { x: new Date(2012, 0, 1), y: 54, y1: 43, y2: 12, y3: 54 },
        { x: new Date(2013, 0, 1), y: 44, y1: 23, y2: 16, y3: 44 },
        { x: new Date(2014, 0, 1), y: 48, y1: 55, y2: 34, y3: 23 }
];
export let stepData: Object[] = [
        { x: 1, y: 7 }, { x: 2, y: 1 }, { x: 3, y: 1 },
        { x: 4, y: 14 }, { x: 5, y: 1 }, { x: 6, y: 10 },
        { x: 7, y: 8 }, { x: 8, y: 6 }, { x: 9, y: 10 },
        { x: 10, y: 10 }, { x: 11, y: 16 }, { x: 12, y: 6 },
        { x: 13, y: 14 }, { x: 14, y: 7 }, { x: 15, y: 5 },
        { x: 16, y: 2 }, { x: 17, y: 14 }, { x: 18, y: 7 },
        { x: 19, y: 7 }, { x: 20, y: 10 }
];

export let stackedStepData1: Object[] = [{ x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 }, { x: 2003, y: 500 },
{ x: 2004, y: 449 }, { x: 2005, y: 470 }, { x: 2006, y: 437 }, { x: 2007, y: 458 },
{ x: 2008, y: 500 }, { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 509 }];

export let stackedStepData2: Object[] = [{ x: 2000, y: 180 }, { x: 2001, y: 240 }, { x: 2002, y: 370 }, { x: 2003, y: 200 },
{ x: 2004, y: 229 }, { x: 2005, y: 210 }, { x: 2006, y: 337 }, { x: 2007, y: 258 },
{ x: 2008, y: 300 }, { x: 2009, y: 173 }, { x: 2010, y: 220 }, { x: 2011, y: 309 }];