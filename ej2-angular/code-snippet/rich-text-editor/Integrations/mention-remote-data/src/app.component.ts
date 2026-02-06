import { MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, ImageService, LinkService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import { NgStyle } from '@angular/common';
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';

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
   <ejs-mention [dataSource]='searchData' [query]='query' [fields]='fields' popupWidth='250px' target='#mention_integration_rte-edit-view'></ejs-mention>
  </div>
`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, NgStyle]
})
export class App {
  public searchData: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/angular/production/api/Employees',
    adaptor: new WebApiAdaptor,
    crossDomain: true,
    offline: true // for local querying
  });
  public query: Query = new Query().select(['FirstName', 'EmployeeID']).take(7).requiresCount();
  public fields: Object = { text: 'FirstName', value: 'EmployeeID' };
}
