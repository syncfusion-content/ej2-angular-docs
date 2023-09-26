


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ej-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series width='400px' type='Pyramid' pyramidMode='Linear' [dataSource]='pyramidData' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ej-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pyramidData?: Object[];
    public datalabel?: Object;
    public enableSmartLabels?: boolean;
    ngOnInit(): void {
        this.datalabel = { visible: true, name: 'text', position: 'Inside' };
        this.enableSmartLabels = true;
        this.pyramidData = [
                { x: 'Australia', y: 20, text: 'Australia 20%' },
                { x: 'France', y: 22, text: 'France 22%' },
                { x: 'China', y: 23, text: 'China 23%' },
                { x: 'India', y: 24, text: 'India 24%' },
                { x: 'Japan', y: 25, text: 'Japan 25%' },
                { x: 'Germany', y: 27, text: 'Germany 27%' }];
    }
}



