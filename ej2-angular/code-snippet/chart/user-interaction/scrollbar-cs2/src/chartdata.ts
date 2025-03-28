/**
 * chart data source
 */
      export let series1: Object[] = [];
      let point1: Object;
      let value: number = 80;
      let i: number;
      for (i = 1; i < 500; i++) {
         if (Math.random() > .5) {
            value += Math.random();
         } else {
            value -= Math.random();
         }
         point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
         series1.push(point1);
      }