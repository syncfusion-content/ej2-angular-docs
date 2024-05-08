import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, CountService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
imports: [
        
        RichTextEditorAllModule,
        FormsModule,
		ButtonModule,
        ReactiveFormsModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [toolbarSettings]='tools'>
               </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, CountService]
})
export class AppComponent  {
    public tools = {items: ['NumberFormatList', 'BulletFormatList']};
}


