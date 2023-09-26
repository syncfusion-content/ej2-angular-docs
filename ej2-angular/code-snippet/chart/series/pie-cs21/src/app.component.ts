

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="container" width='92%' [legendSettings]="legendSettings" [title]="title" [enableAnimation]= 'enableAnimation' [center]='center'>
            <e-accumulation-series-collection>
                <e-accumulation-series name='Browser' [dataSource]='pieData' xName='x' yName='y' [startAngle]="startAngle" [endAngle]="endAngle" innerRadius="0%" radius="70%" [explode]='explode' explodeOffset='10%' [explodeIndex]='0'>
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
    public legendSettings?: Object;
    ngOnInit(): void {
    this.pieData = data;
        this.legendSettings = {
            visible: false
        };
    this.center = {x: '60%', y: '60%'};
    this.startAngle = 0;
    this.endAngle = 360;
    this.explode = true;
    this.enableAnimation = false;
    this.title = 'Mobile Browser Statistics';
    }

}


