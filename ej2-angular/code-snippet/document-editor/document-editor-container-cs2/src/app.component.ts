

import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
    selector: 'app-container',
    // specifies the template string for the DocumentEditorContainer component
    template: `<ejs-documenteditorcontainer serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
    providers: [ToolbarService]
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}


