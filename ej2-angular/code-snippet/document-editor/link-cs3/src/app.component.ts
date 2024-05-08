import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SfdtExportService, SelectionService, EditorService, RequestNavigateEventArgs
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        DocumentEditorAllModule
    ],


standalone: true,
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div>
      <ejs-documenteditor #document_editor height="330px" style="display:block" [isReadOnly]=false [enableSelection]=true  [enableEditor]=true (requestNavigate)="onRequestNavigate($event)">
      </ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [SfdtExportService, SelectionService, EditorService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    public onRequestNavigate(args: RequestNavigateEventArgs): void {
        if (args.linkType !== 'Bookmark') {
            let link: string = args.navigationLink;
            if (args.localReference.length > 0) {
                link += '#' + args.localReference;
            }
            window.open(link);
            args.isHandled = true;
        }
    }
}


