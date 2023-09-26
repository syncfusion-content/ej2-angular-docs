


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, HtmlEditorService, QuickToolbarService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor #typeRTE id='defaultRTE' [toolbarSettings]='tools'>
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
    </ejs-richtexteditor>
     <div>
    <ejs-checkbox #float label="Enable Floating" [checked]="true" (change)="onChangeFloat()"></ejs-checkbox>
    </div>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService]
})
export class AppComponent  {
@ViewChild('float') rteFloatObj: CheckBoxComponent | undefined;
@ViewChild('typeRTE') rteObj: RichTextEditorComponent | undefined;
  public tools: object = {
      enableFloating: false
  };
  public onChangeFloat(): void {
      this.rteObj!.toolbarSettings.enableFloating = this.rteFloatObj!.checked;
      this.rteObj!.dataBind();
  }
}



