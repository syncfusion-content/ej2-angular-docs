import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #rteMarkDown id='markDown' [editorMode]='mode'>
                <ng-template #valueTemplate>
                  ***Overview***
                  The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor used to create, edit and return the content in valid HTML markup or markdown (MD) of the content.
                  The editor provides a standard toolbar to format content using its commands. Modular library features to load the necessary functionality on demand.
                  The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operation, HTML view, and more.
                  ***Key features***
                  - *Mode*: Provides IFRAME and DIV mode.
                  - *Module*: Modular library to load the necessary functionality on demand.
                  - *Toolbar*: Provide a fully customizable toolbar.
                  - *Editing*: HTML view to edit the source directly for developers.
                  - *Third-party Integration*: Supports to integrate third-party library.
                  - *Preview*: Preview the modified content before saving it.
                  - *Tools*: Handling images, hyperlinks, video, uploads and more.
                  - *Undo and Redo*: Undo/redo manager.
                  - *Lists*:Creates bulleted and numbered list.
                </ng-template>
               </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService]
})

export class AppComponent {
    public mode: string = 'Markdown';
}