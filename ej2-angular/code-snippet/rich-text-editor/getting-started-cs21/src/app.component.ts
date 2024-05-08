import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { DialogModule } from '@syncfusion/ej2-angular-popups'



import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, CountService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
imports: [
        
        RichTextEditorAllModule,
        DialogModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [toolbarSettings]='tools' [undoRedoSteps] ='steps' [undoRedoTimer]='timer'>
               </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, CountService]
})
export class AppComponent  {
    public tools = {items: ['Undo', 'Redo']};
    public steps = 50;
    public timer = 400;
}


