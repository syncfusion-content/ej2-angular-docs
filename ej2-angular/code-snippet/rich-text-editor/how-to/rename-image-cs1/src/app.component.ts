import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, ResizeService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
imports: [
        
        ButtonModule,
        RichTextEditorAllModule
    ],


standalone: true,
    selector: 'app-root',
        template: `<ejs-richtexteditor id='defaultRTE' [enableResize]="true">
        <ng-template #valueTemplate>
            <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
                Users can format their content using standard toolbar commands.</p>
        </ng-template>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, ResizeService, HtmlEditorService]
})
export class AppComponent {
}



