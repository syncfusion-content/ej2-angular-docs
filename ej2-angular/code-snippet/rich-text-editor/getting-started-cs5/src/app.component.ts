import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { DialogModule } from '@syncfusion/ej2-angular-popups'




    /**
     * RTE IFrame Sample
     */
    import { Component } from '@angular/core';
    import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
    @Component({
imports: [
        
        RichTextEditorAllModule,
        DialogModule
    ],


standalone: true,
        selector: 'app-root',
        template: `<ejs-richtexteditor id='iframeRTE' [iframeSettings]='iframe'></ejs-richtexteditor>`,
        providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
    })
    export class AppComponent  {
        public iframe: object = { enable: true };
    }



