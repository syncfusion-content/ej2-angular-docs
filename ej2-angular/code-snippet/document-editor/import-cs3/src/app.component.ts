import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent
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
      <input id="open_sfdt" #open_sfdt style="position:fixed; left:-100em" type="file" (change)="onFileChange($event)" accept=".sfdt"/>
      <button ejs-button (click)="onFileOpenClick()" >Import</button>
      <ejs-documenteditor #document_editor id="container" height="330px" style="display:block"></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    public onFileOpenClick(): void {
        //Open file picker.
        (document.getElementById('open_sfdt') as HTMLElement).click();
    }

    public onFileChange(e: any): void {
        if (e.target.files[0]) {
            //Get the selected file.
            let file = e.target.files[0];
            if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
                let fileReader: FileReader = new FileReader();
                fileReader.onload = (e: any) => {
                    let contents: string = e.target.result;
                    //Open the sfdt document in Document Editor.
                    (this.documentEditor as DocumentEditorComponent).open(contents);
                };
                //Read the input file.
                fileReader.readAsText(file);
                (this.documentEditor as DocumentEditorComponent).documentName = file.name.substr(0, file.name.lastIndexOf('.'));
            }
        }
    }
}


