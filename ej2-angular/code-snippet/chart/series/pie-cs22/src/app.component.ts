

import { Component, OnInit } from '@angular/core';
import { variespiedata } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="container" width='92%' [legendSettings]="legendSettings" [title]="title" [enableAnimation]= 'enableAnimation'>
            <e-accumulation-series-collection>
                <e-accumulation-series name='Browser' [dataSource]='pieData' xName='x' yName='y' [startAngle]="startAngle" [endAngle]="endAngle" innerRadius="20%" radius="r">
                </e-accumulation-series>
            </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pieData?: Object[];
    public startAngle?: number;
    public endAngle?: number;
    public center?: Object ;
    public explode?: boolean ;
    public enableAnimation?: boolean ;
    public title?: string ;
    public radius?: string ;
    public legendSettings?: Object;
    ngOnInit(): void {
    this.pieData = variespiedata;
        this.legendSettings = {
            visible: false
        };
    this.startAngle = 0;
    this.endAngle = 360;
    this.radius = 'r';
    this.enableAnimation = true;
    this.title = 'Mobile Browser Statistics';
    }

}


