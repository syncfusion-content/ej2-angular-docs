import { NgModule, Component} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { ToolbarService, LinkService, ImageService, HtmlEditorService,IFrameSettingsModel} from '@syncfusion/ej2-angular-richtexteditor';

    @Component({
        imports: [RichTextEditorAllModule],
        standalone: true,
        selector: 'app-root',
        template: `<ejs-richtexteditor id='iframeRTE' [iframeSettings]='iframe'></ejs-richtexteditor>`,
        providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
    })
    export class AppComponent  {
        public iframe: IFrameSettingsModel = { enable: true };
    }



