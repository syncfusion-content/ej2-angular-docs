import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { DialogModule } from '@syncfusion/ej2-angular-popups'



import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
imports: [
        
        RichTextEditorAllModule,
        DialogModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [toolbarSettings]='tools' [fontSize]='size' [fontFamily] ='family'>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
    public tools: object = {
        items: [ 'FontName', 'FontSize']
    };
    public size = {
        default: '10',
        width: '40px',
        items: [{ text: '8', value: '8pt' },
        { text: '10', value: '10pt' },
        { text: '12', value: '12pt' },
        { text: '14', value: '14pt' },
        { text: '42', value: '42pt' }]
    };
    public family = {
        default: 'Segoe UI',
        width: '60px',
        items: [
        { text: 'Segoe UI', value: 'Segoe UI' },
        { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
        { text: 'Courier New', value: 'Courier New,Courier,monospace' },
        { text: 'Georgia', value: 'Georgia,serif' },
        { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
        { text: 'Calibri Light', value: 'CalibriLight' }]
    };
}



