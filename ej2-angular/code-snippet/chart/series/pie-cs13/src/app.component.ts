

import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings' [enableAnimation]='enableAnimation' [enableSmartLabels]='enableSmartLabels'
    [title]='title'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' groupTo='11' [dataLabel]='datalabel' [explode]='explode' [explodeOffset]='explodeOffset'
            [startAngle]='startAngle' [endAngle]='endAngle' radius='70%'  innerRadius='40%'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    public datalabel?: Object;
    public startAngle?: number;
    public endAngle?: number;
    public explode?: boolean;
    public explodeOffset?: string;
    public enableSmartLabels?: boolean;
    public enableAnimation?: boolean;
    public title: Object = 'Project Cost Breakdown';
    ngOnInit(): void {
        this.datalabel = {   visible: true,
                    name: 'text',
                    position: 'Inside',
                    font: {
                        fontWeight: '600',
                        color: '#ffffff'
                    }
        };
        this.legendSettings = {
            visible: true, position: 'Top'
        };
        this.startAngle = 0;
        this.endAngle = 360;
        this.explode = true;
        this.explodeOffset = '10%';
        this.enableSmartLabels = true;
        this.enableAnimation = true;
        this.piedata = [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
                { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
                { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
                { x: 'Insurance', y: 16, text: '16%' }];
    }

}


