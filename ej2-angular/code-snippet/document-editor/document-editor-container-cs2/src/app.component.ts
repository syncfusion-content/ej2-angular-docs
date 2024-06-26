import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
imports: [
        
        DocumentEditorContainerModule
    ],


standalone: true,
    selector: 'app-container',
    // specifies the template string for the DocumentEditorContainer component
    template: `<ejs-documenteditorcontainer serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
    providers: [ToolbarService]
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}


