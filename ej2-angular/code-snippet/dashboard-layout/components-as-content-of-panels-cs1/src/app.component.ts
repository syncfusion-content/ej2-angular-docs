

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./default-style.css'],
    template: `
        <div class="control-section">
            <ejs-dashboardlayout [columns]="6" #editLayout [cellSpacing]='cellSpacing'>
                <e-panels>
                    <e-panel [sizeX]="3" [sizeY]="2" [row]="0" [col]="0">
                        <ng-template #header>
                            <div>Product usage ratio</div>
                        </ng-template>
                        <ng-template #content>
                            <div id="column">
                                <ejs-chart id="columnChart" height="162px" [primaryXAxis]='primaryXAxis'>
                                    <e-series-collection>
                                        <e-series [dataSource]="chartData" type='Column' xName='month' yName='sales'>
                                        </e-series>
                                    </e-series-collection>
                                </ejs-chart>
                            </div>
                        </ng-template>
                    </e-panel>
                    <e-panel [sizeX]="3" [sizeY]="2" [row]="0" [col]="3">
                        <ng-template #header>
                            <div>Last year Sales Comparison</div>
                        </ng-template>
                        <ng-template #content>
                            <div id="line">
                                <ejs-chart id="lineChart" height="162px" [primaryXAxis]='primaryXAxis'>
                                    <e-series-collection>
                                        <e-series [dataSource]="lineData" xName='x' yName='y' type="Line">
                                        </e-series>
                                    </e-series-collection>
                                </ejs-chart>
                            </div>
                        </ng-template>
                    </e-panel>
                    <e-panel [sizeX]="3" [sizeY]="2" [row]="0" [col]="3">
                        <ng-template #header>
                            <div>Sales increase percentage 1</div>
                        </ng-template>
                        <ng-template #content>
                            <div id="pie">
                                <ejs-accumulationchart id="pieChart" height="162px" [legendSettings]="legendSettings" [tooltip]='tooltip'>
                                    <e-accumulation-series-collection>
                                        <e-accumulation-series [dataSource]="piechart" xName="x" yName="y" innerRadius="20%"
                                            name="Browser" [dataLabel]='datalabel'>
                                        </e-accumulation-series>
                                    </e-accumulation-series-collection>
                                </ejs-accumulationchart>
                            </div>
                        </ng-template>
                    </e-panel>
                    <e-panel [sizeX]="3" [sizeY]="2" [row]="1" [col]="0">
                        <ng-template #header>
                            <div>Sales increase percentage 2</div>
                        </ng-template>
                        <ng-template #content>
                            <div id="pie1">
                                <ejs-accumulationchart id="pieChart1" [enableAnimation]="false" height="162px"
                                    [tooltip]='tooltip' [legendSettings]='legendSettings'>
                                    <e-accumulation-series-collection>
                                        <e-accumulation-series [dataSource]="piechart1" xName="x" yName="y" radius="70%"
                                            name="Browser" [dataLabel]='datalabel'>
                                        </e-accumulation-series>
                                    </e-accumulation-series-collection>
                                </ejs-accumulationchart>
                            </div>
                        </ng-template>
                    </e-panel>
                </e-panels>
            </ejs-dashboardlayout>
        </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public cellSpacing: number[] = [10, 10];
    public chartData: Object[] = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    public primaryXAxis: Object = {
        valueType: 'Category'
    }
    public lineData: any[] = [
     { x: 2013, y: 28 }, { x: 2014, y: 25 },{ x: 2015, y: 26 }, { x: 2016, y: 27 },
    { x: 2017, y: 32 }, { x: 2018, y: 35 }
    ];
    public piechart: any[] = [{ x: 'TypeScript', y: 13, text: 'TS 13%' }, { x: 'React', y: 12.5, text: 'Reat 12.5%' },{ x: 'MVC', y: 12, text: 'MVC 12%' },{ x: 'Core', y: 12.5, text: 'Core 12.5%' },{ x: 'Vue', y: 10, text: 'Vue 10%' },{ x: 'Angular', y: 40, text: 'Angular 40%' }];
    public piechart1: any[] = [
     { 'x': 'Chrome', y: 37, text: '37%' },
     { 'x': 'UC Browser', y: 17, text: '17%' },
     { 'x': 'iPhone', y: 19, text: '19%' },
     { 'x': 'Others', y: 4, text: '4%' },
     { 'x': 'Opera', y: 11, text: '11%' },
     { 'x': 'Android', y: 12, text: '12%' }
     ];
     public legendSettings: Object = {
        visible: false
    };
    tooltip: any;
    datalabel: any;
}


