import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, FormatPainterService} from '@syncfusion/ej2-angular-richtexteditor';

@Component( {
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='toolbarSettings'>
                <ng-template #valueTemplate>
                    <h3><strong>Format Painter</strong></h3>
                    <p>
                        A Format Painter is a Rich Text Editor feature allowing users to quickly 
                        <span style="background-color: rgb(198, 140, 83);"><strong>copy</strong></span>
                        and 
                        <span style="background-color: rgb(198, 140, 83);"><strong>paste</strong></span>
                        formatting from one text to another. With a rich text editor, utilize the format painter as follows:
                    </p>
                    <ul>
                        <li>
                            Select the text whose format you want to copy.
                        </li>
                        <li>
                            Click on the <strong><em>Format Painter</em></strong> button in the toolbar. It may look like a paintbrush icon.
                        </li>
                        <li>
                            The cursor will change to a <strong>paintbrush</strong> icon. Click and drag the cursor over the text you want to apply the copied format.
                        </li>
                        <li>
                            Release the mouse button to apply the format.
                        </li>
                    </ul>
                    <p>
                        Using the format painter in a rich text editor can save you time when formatting a large document, You can quickly 
                        copy and apply formatting
                        to <span style="background-color: rgb(198, 140, 83);"><strong>multiple sections</strong></span>. 
                        It's a helpful tool for anyone who works with text editing regularly, such as writers, editors, and content creators.
                    </p>
                </ng-template>
            </ejs-richtexteditor>`,
    providers: [
        ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, FormatPainterService
    ],
} )
export class AppComponent {
    public toolbarSettings: object = {
        items: ['FormatPainter', 'ClearFormat', 'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',
        'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
    }
}