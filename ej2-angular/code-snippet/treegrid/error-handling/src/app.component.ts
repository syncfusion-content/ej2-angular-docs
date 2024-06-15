

import { TreeGridAllModule, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel,EditService} from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridAllModule],
    providers: [EditService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks'  (actionFailure)="onActionFailure($event)" >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' editType= 'dropdownedit' textAlign='Right' width=140></e-column>
                        <e-column field='progress' editType= 'numericedit' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    onActionFailure(e: any): any {
        let span: HTMLElement = document.createElement('span');
        ((this.treegrid?.element as HTMLElement).parentNode as ParentNode).insertBefore(span, (this.treegrid as TreeGridComponent).element);
        span.style.color = '#FF0000'
        span.innerHTML = e.error[0];
     }
}



