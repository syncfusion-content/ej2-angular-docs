


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" labelPosition='Outside' valueType='DateTime' [value]='value'  intervalType='Quarter' [enableGrouping]='grouping' groupBy='Years' [dataSource]='chartData' xName='x' yName='y' tooltip='tooltip'></ejs-rangenavigator>`
})

export class AppComponent implements OnInit {
    public data: object[] = [];
    public value?: number = 0;
    public point: object = {};
    public chartData?: Object[];
    public values?: Object[];
    public grouping?: boolean;
    public tooltip?: Object;
    ngOnInit(): void {
        this.chartData =[];
        for (let j = 1; j < 1090; j++) {
            (this.value as number) += (Math.random() * 10 - 5) as number;
            this.value = (this.value as number) < 0 ? Math.abs(this.value as number) : this.value;
            this.point = { x: new Date(2000, 0, j), y: this.value, z: ((this.value as number) + 10) };
            this.chartData.push(this.point);
        };
        this.values = [new Date("2001, 1,1"), new Date("2002,1,1")];
        this.grouping = true;
        this.tooltip= { enable: true };
    }
}



