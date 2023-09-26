


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' #sample [fontFamily]='fontFamily' [toolbarSettings]='toolbarSettings'>
    <ng-template #valueTemplate>
      <p>The Rich Text Editor triggers events based on its actions. </p>
      <p> The events can be used as an extension point to perform custom operations.</p>
      <ul>
      <li>created - Triggers when the component is rendered.</li>
      <li>change - Triggers only when RTE is blurred and changes are done to the content.</li>
      <li>focus - Triggers when RTE is focused in.</li>
      <li>blur - Triggers when RTE is focused out.</li>
      <li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li>
      <li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li>
      <li>destroyed – Triggers when the component is destroyed.</li>
      </ul> 
    </ng-template>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class AppComponent  {
@ViewChild('sample') public rteObj?: RichTextEditorComponent;
public fontFamily: Object = {
  items: [
    {text: "Segoe UI", value: "Segoe UI", class: "e-segoe-ui",  command: "Font", subCommand: "FontName"},
    {text: "Roboto", value: "Roboto",  command: "Font", subCommand: "FontName"}, // here font is added
    {text: "Great vibes", value: "Great Vibes,cursive",  command: "Font", subCommand: "FontName"}, // here font is added
    {text: "Noto Sans", value: "Noto Sans",  command: "Font", subCommand: "FontName"},
    {text: "Impact", value: "Impact,Charcoal,sans-serif", class: "e-impact", command: "Font", subCommand: "FontName"},
    {text: "Tahoma", value: "Tahoma,Geneva,sans-serif", class: "e-tahoma", command: "Font", subCommand: "FontName"},
  ]
};
public toolbarSettings: Object = {
  items: ['Bold', 'Italic', 'Underline', 'StrikeThrough','|',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };
}



