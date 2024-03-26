


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-circularchart3d style='display:block;' align='center' tilt='-15' [title]='title' [legendSettings]="legendSettings" [enableAnimation]='enableAnimation'>
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' radius='r' innerRadius='20%' [dataLabel]='dataLabel'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
    public dataSource?: Object[];
    public title?: string;
    public legendSettings?: Object;
    public dataLabel?: Object;
    public enableAnimation?: boolean;
    ngOnInit(): void {
        this.dataSource = [
          { x: 'Belgium', y: 551500, r: '110.7' },
          { x: 'Cuba', y: 312685, r: '124.6' },
          { x: 'Dominican Republic', y: 350000, r: '137.5' },
          { x: 'Egypt', y: 301000, r: '150.8' },
          { x: 'Kazakhstan', y: 300000, r: '155.5' },
          { x: 'Somalia', y: 357022, r: '160.6' },
          { x: 'Argentina', y: 505370, r: '100' },];
        this.title = 'Countries compared by population density and total area';
        this.legendSettings = { visible: true };
        this.enableAnimation= true
        this.dataLabel = {
            visible: true,
            name: 'x',
            position: 'Outside',
            font: {
                fontWeight: '600'
            },
            connectorStyle: { length: '40px' }
        };
    }
}