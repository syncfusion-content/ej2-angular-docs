


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' #sample [toolbarSettings]='toolbarSettings' (actionComplete)='actionComplete($event)'>
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
    </ng-template></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class AppComponent  {
@ViewChild('sample') public rteObj?: RichTextEditorComponent;
public toolbarSettings: Object = {
    items: ['createLink']};
public actionComplete(args: any): void {
      if (<String>args.requestType === 'Links') {
        if (args.elements[0].parentNode && (<Element>args.elements[0].parentNode).tagName === 'A'){
          const emberEle: HTMLElement = document.createElement('blockquote');
          emberEle.setAttribute('class', 'embedly-card');
          emberEle.appendChild(args.elements[0].parentElement);
          emberEle.appendChild(document.createElement('p'));
          args.range.insertNode(emberEle);
        }
    }
    }
}



