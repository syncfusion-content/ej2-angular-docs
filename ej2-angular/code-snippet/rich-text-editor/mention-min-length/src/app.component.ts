import { MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, ImageService, LinkService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [RichTextEditorModule, MentionModule],
  standalone: true,
  selector: 'app-root',
  template: `
  <div>
    <ejs-richtexteditor
      id="mention_integration"
      placeholder="Type @ and tag the name"
    >
      <ng-template #valueTemplate>
        <p>
          Hello
          <span contenteditable="false" class="e-mention-chip"
            ><a href="mailto:maria@gmail.com" title="maria@gmail.com"
              >Maria</a
            ></span
          >&#8203;
        </p>
        <p>
          Type <code>&#64;</code> followed by at least
          <strong>3 characters</strong> to trigger the suggestion list.
        </p>
      </ng-template>
    </ejs-richtexteditor>
  </div>
  <div>
    <ejs-mention
    #mention
    [dataSource]="data"
    target="#mention_integration_rte-edit-view"
    [fields]="fieldsData"
    [minLength]="3"
  >
  </ejs-mention>
  </div>
`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
  public data: { [key: string]: MentionModule }[] = [
      { Name: 'Selma Rose', EmailId: 'selma@gmail.com' },
      { Name: 'Maria', EmailId: 'maria@gmail.com' },
      { Name: 'Russo Kay', EmailId: 'russo@gmail.com' },
      { Name: 'Robert', EmailId: 'robert@gmail.com' },
      { Name: 'Camden Kate', EmailId: 'camden@gmail.com' },
  ];
  public fieldsData: { [key: string]: string } = { text: 'Name' };
}