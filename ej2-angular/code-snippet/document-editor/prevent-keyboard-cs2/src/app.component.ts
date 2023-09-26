

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SfdtExportService, SelectionService, EditorService, DocumentEditorKeyDownEventArgs
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      template: `<div>
      <ejs-documenteditor #document_editor height="330px" style="width:100%;display:block" [isReadOnly]=false [enableSelection]=true [enableSfdtExport]=true [enableEditor]=true (keyDown)="onKeyDown($event)">
      </ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      //Inject require services.
      providers: [SelectionService, EditorService, SfdtExportService]
})

export class AppComponent {

    public onKeyDown(args: DocumentEditorKeyDownEventArgs): void {
          let keyCode: number = args.event.which || args.event.keyCode;
          let isCtrlKey: boolean = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);
          //67 is the character code for 'C'
          if (isCtrlKey && keyCode === 67) {
              //To prevent copy operation set isHandled to true
              args.isHandled = true;
          }
    }
}


