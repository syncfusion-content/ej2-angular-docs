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
        The suggestion list displays only 5 items when typing the &#64; character, as the data source contains a large set of entries
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
    [suggestionCount]="5"
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
      { Name: 'Sophia', EmailId: 'sophia@gmail.com' },
      { Name: 'Margaret', EmailId: 'margaret@gmail.com' },
      { Name: 'Ursula Ann', EmailId: 'ursula@gmail.com' },
      { Name: 'Laura Grace', EmailId: 'laura@gmail.com' },
      { Name: 'Albert', EmailId: 'albert@gmail.com' },
      { Name: 'William', EmailId: 'william@gmail.com' },
  ];
  public fieldsData: { [key: string]: string } = { text: 'Name' };
}