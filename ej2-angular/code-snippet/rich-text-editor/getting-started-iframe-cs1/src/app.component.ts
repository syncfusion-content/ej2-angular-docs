import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  standalone: true,
  template:  `<ejs-richtexteditor id='iframeRTE' [toolbarSettings]='tools' [iframeSettings]='iframe' [height]='height' [value]="value"></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  imports: [RichTextEditorModule]
})


export class AppComponent {
  public tools: object = {
      items: ['Undo', 'Redo', '|',
          'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
          'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
          'SubScript', 'SuperScript', '|',
          'LowerCase', 'UpperCase', '|',
          'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
          'Indent', 'Outdent', '|', 'CreateLink',
          'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };
  public iframe: object = { enable: true };
  public height: number = 500;

  public value:string = `<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
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
  </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline e-rte-drag-image" height="174" /></div>  `;
}



