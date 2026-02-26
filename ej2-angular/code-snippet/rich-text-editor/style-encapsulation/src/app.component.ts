import { Component } from '@angular/core';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import {
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    IFrameSettingsModel,
    QuickToolbarService,
    EmojiPickerService,
    PasteCleanupService,
    VideoService,
    AudioService,
    FormatPainterService,
    TableService,
    SlashMenuService
  } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
                    <div class="editor">
                    <h6 class="header">With style encapsulation</h6>
                        <ejs-richtexteditor [iframeSettings]='iframe' [value]="value" ></ejs-richtexteditor>
                    </div>
                   
                    <div class="editor">
                    <h6 class="header">Without style encapsulation</h6>
                        <ejs-richtexteditor id='richTextEditor' [value]="value" ></ejs-richtexteditor>
                    </div>
            </div>`,
    styleUrls: ['app.style.css'],
    providers: [ToolbarService, LinkService, ImageService, QuickToolbarService, HtmlEditorService, EmojiPickerService, PasteCleanupService, VideoService, AudioService, FormatPainterService, TableService, SlashMenuService],
    imports: [RichTextEditorAllModule]
})

export class AppComponent {
    
    public iframe: IFrameSettingsModel = { enable: true };

    public value = `<p>The Syncfudion <strong>Rich Text Editor</strong>, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
     <li>
        <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
     </li>
     <li>
        <p>Bulleted and numbered lists.</p>
     </li>
     <li>
        <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
     </li>
     <li>
        <p>Contains undo/redo manager. </p>
     </li>
  </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"></div>  `;
}