

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SfdtExportService, SelectionService, EditorService, RequestNavigateEventArgs
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
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

    public onRequestNavigate(args: DocumentEditorKeyDownEventArgs): void {
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


