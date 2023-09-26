


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series width='330px' type='Funnel' [dataSource]='funneldata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public funneldata?: Object[];
    public datalabel?: Object;
    public enableSmartLabels?: boolean;
    ngOnInit(): void {
        this.datalabel = { visible: true, name: 'text', position: 'Inside' };
        this.enableSmartLabels = true;
        this.funneldata = [
                { x: 'Renewed', y: 18.20, text: 'Renewed 18.20%' },
                { x: 'Subscribe', y: 27.3, text: 'Subscribe 27.3%' },
                { x: 'Support', y: 55.9, text: 'Support 55.9%' },
                { x: 'Downloaded', y: 76.8, text: 'Downloaded 76.8%' },
                { x: 'Visited', y: 100, text: 'Visited 100%' }];
    }

}



