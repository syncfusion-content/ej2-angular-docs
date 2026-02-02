import { Component, ViewChild } from '@angular/core';
import { RichTextEditorAllModule, ChangeEventArgs } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, ToolbarSettingsModel, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

@Component({
    imports: [RichTextEditorAllModule],
    standalone: true,
    selector: 'app-root',
    template:  `<ejs-richtexteditor #Editor [enableHtmlEncode]="true" [value]="value" >
                </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
  public value: string = "&lt;p&gt;Rich Text Editor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.&lt;/p&gt;&lt;p&gt;&lt;b&gt;API’s:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;p&gt;maxLength - allows restricting the maximum length to be entered.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;readOnly - allows to change it as a non-editable state.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;enabled - enable or disable the RTE component.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;enableHtmlEncode - Get the encoded string value through value property and source code panel&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;getValue - get the value of RTE.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;getSelection - get the selected text of RTE.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;selectAll - select all content in RTE.&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;";
}



