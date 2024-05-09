import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';

@Component({
    imports: [
    TreeGridAllModule,TooltipModule
    ],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<ejs-tooltip #tooltip target=".e-rowcell" (beforeRender)="beforeRender($event)">
                    <ejs-treegrid #treegrid [dataSource]='data' height='275' gridLines='Both' [treeColumnIndex]='1' childMapping='subtasks' >
                        <e-columns>
                            <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=100></e-column>
                            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                            <e-column field='priority' headerText='Priority' textAlign='Right' width=80></e-column>
                        </e-columns>
                    </ejs-treegrid>
                </ejs-tooltip>
                `,
   
})
export class AppComponent implements OnInit {

    public data?: Object[];
    
    @ViewChild('tooltip')
    public tooltip?: TooltipComponent;
    

    ngOnInit(): void {
        this.data = sampleData;
    }

    beforeRender(args: TooltipEventArgs): void {
        if (args.target.classList.contains('e-rowcell')) {
            (this.tooltip as TooltipComponent).content = 'The value is "' + args.target.innerText + '" ';
        }
    }
   
}