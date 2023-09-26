import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, FormatPainterService, FormatPainterSettingsModel} from '@syncfusion/ej2-angular-richtexteditor';

@Component( {
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='toolbarSettings' [formatPainterSettings]='formatPainterSettings'>
                <ng-template #valueTemplate>
                    <h3 class="e-rte-block-blue-text" title="Format Painter" style="color: #0079f3; background-color: #eff6ff; padding: 10px;"><strong >Format Painter</strong></h3>
                    <p>
                        A Format Painter is a Rich Text Editor feature allowing users to quickly 
                        <span class="e-inline-text-highlight" style="color: blue;" title="Styled by CSS Class selector"><strong>copy</strong></span>
                        and 
                        <span class="e-inline-text-highlight" style="color: blue;"  title="Styled by CSS Class selector"><strong>paste</strong></span>
                        formatting from one text to another. With a rich text editor, utilize the format painter as follows:
                    </p>
                    <ul>
                        <li style="color: crimson;">
                            Select the text whose format you want to copy.
                        </li>
                        <li style="color: crimson;">
                            Click on the <strong><em>Format Painter</em></strong> button in the toolbar. It may look like a paintbrush icon.
                        </li>
                        <li style="color: crimson;">
                            The cursor will change to a <strong>paintbrush</strong> icon. Click and drag the cursor over the text you want to apply the copied format.
                        </li>
                        <li style="color: crimson;">
                            Release the mouse button to apply the format.
                        </li>
                    </ul>
                    <p>
                        Using the format painter in a rich text editor can save you time when formatting a large document, You can quickly 
                        copy and apply formatting
                        to <strong class="e-rte-strong-bg" style="color: blue">multiple sections</strong>. 
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
    public formatPainterSettings: FormatPainterSettingsModel = {
        allowedFormats: 'p;h1;h2;h3;div;ul;ol;li;span;strong;em;code;',
        deniedFormats: 'h3(e-rte-block-blue-text){background-color,padding,color}[title]; li{color}; span(e-inline-text-highlight){color}[title]; strong{color}(e-rte-strong-bg);',
    }
}