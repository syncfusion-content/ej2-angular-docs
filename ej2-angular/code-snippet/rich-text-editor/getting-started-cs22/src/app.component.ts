import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { DialogModule } from '@syncfusion/ej2-angular-popups'




import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
imports: [
        
        RichTextEditorAllModule,
        DialogModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [value]='rteValue'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
    public rteValue: string = `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div><script>alert('hi')</script>`;
}



