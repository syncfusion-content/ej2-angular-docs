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
    template: `<ejs-richtexteditor id='defaultRTE' [showCharCount]='true' [maxLength]='maxLength'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, CountService]
})
export class AppComponent  {
    public maxLength = 2000;
}



