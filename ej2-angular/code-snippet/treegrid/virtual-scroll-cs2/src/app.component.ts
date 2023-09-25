

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { VirtualScrollService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [enableVirtualization]=true [enableColumnVirtualization]=true height=291 childMapping='Crew' [treeColumnIndex]='1' >
        <e-columns>
            <e-column field='TaskID' headerText='Player Jersey' width='120' textAlign='Right'></e-column>
            <e-column field='FIELD1' headerText='Player Name' width='120'></e-column>
            <e-column field='FIELD2' headerText='Year' width='100' textAlign='Right'></e-column>
            <e-column field='FIELD3' headerText='Stint' width='120' textAlign='Right'></e-column>
            <e-column field='FIELD4' headerText='TMID' width='120' textAlign='Right'></e-column>
            <e-column field='FIELD5' headerText='LGID' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD6' headerText='GP' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD7' headerText='GS' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD8' headerText='Minutes' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD9' headerText='Points' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD10' headerText='oRebounds' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD11' headerText='dRebounds' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD12' headerText='Rebounds' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD13' headerText='Assists' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD14' headerText='Steals' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD15' headerText='Blocks' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD16' headerText='Turnovers' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD17' headerText='PF' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD18' headerText='fgAttempted' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD19' headerText='ftAttempted' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD20' headerText='ThreeAttempted' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD21' headerText='ThreeMade' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD22' headerText='PostGP' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD23' headerText='ftMade' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD24' headerText='fgMade' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD25' headerText='ffmade' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD26' headerText='PostGS' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD27' headerText='PostMinutes' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD28' headerText='PostPoints' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD29' headerText='PostoRebounds' width= 120 textAlign='Right'></e-column>
            <e-column field='FIELD30' headerText='PostdRebounds' width= 120 textAlign='Right'></e-column>
        </e-columns>
</ejs-treegrid>`,
providers: [VirtualScrollService]
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        dataSource();
        this.data = virtualData;
    }
}



