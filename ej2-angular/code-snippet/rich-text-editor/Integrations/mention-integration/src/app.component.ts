import { MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, ImageService, LinkService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import { NgStyle } from '@angular/common';

@Component({
    imports: [RichTextEditorModule, MentionModule, NgStyle],
    standalone: true,
    selector: 'app-root',
    styleUrl: 'app.css',
    encapsulation: ViewEncapsulation.None,
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
   <ejs-mention #editorMention [dataSource]='data' [fields]='fieldsData' [allowSpaces]="true"
        popupWidth='250px' popupHeight='200px' sortOrder='Ascending' target='#mention_integration_rte-edit-view' [suffixText]='&nbsp;'>
        <ng-template #displayTemplate let-data>
            <a href=mailto:{{data.email}} title={{data.email}}>&#64;{{data.name}}</a>
        </ng-template>
        <ng-template #itemTemplate let-data>
            <div class="editor-mention-item-template">
                <div class="em-header">
                    <div class="em-avatar" [ngStyle]="{ 'background-color': data.bgColor, 'color': data.color}">
                        <div class="em-initial">{{data.initial}}</div>
                    </div>
                </div>
                <div class="em-content">
                    <div class="em-name">{{data.name}}</div>
                    <div class="em-email">{{data.email}}</div>
                </div>
            </div>
        </ng-template>
    </ejs-mention>
  </div>
`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, NgStyle]
})
export class App {
    public data: { [key: string]: Object }[] = [
        { name: "Selma Rose", initial: 'SR', email: "selma@gmail.com", color: '#FAFDFF', bgColor: '#01579B' },
        { name: "Maria", initial: 'MA', email: "maria@gmail.com", color: '#004378', bgColor: '#ADDBFF' },
        { name: "Russo Kay", initial: 'RK', email: "russo@gmail.com", color: '#F9DEDC', bgColor: '#8C1D18' },
        { name: "Robert", initial: 'RO', email: "robert@gmail.com", color: '#FFD6F7', bgColor: '#37003A' },
        { name: "Camden Kate", initial: 'CK', email: "camden@gmail.com", color: '#FFFFFF', bgColor: '#464ECF' },
        { name: "Garth", initial: 'GA', email: "garth@gmail.com", color: '#FFFFFF', bgColor: '#008861' },
        { name: "Andrew James", initial: 'AJ', email: "james@gmail.com", color: '#FFFFFF', bgColor: '#53CA17' },
        { name: "Olivia", initial: 'OL', email: "olivia@gmail.com", color: '#FFFFFF', bgColor: '#8C1D18' },
        { name: "Sophia", initial: 'SO', email: "sophia@gmail.com", color: '#000000', bgColor: '#D0BCFF' },
        { name: "Margaret", initial: 'MA', email: "margaret@gmail.com", color: '#000000', bgColor: '#F2B8B5' },
        { name: "Ursula Ann", initial: 'UA', email: "ursula@gmail.com", color: '#000000', bgColor: '#47ACFB' },
        { name: "Laura Grace", initial: 'LG', email: "laura@gmail.com", color: '#000000', bgColor: '#FFE088' },
        { name: "Albert", initial: 'AL', email: "albert@gmail.com", color: '#FFFFFF', bgColor: '#00335B' },
        { name: "William", initial: 'WA', email: "william@gmail.com", color: '#FFFFFF', bgColor: '#163E02' }
    ];
    public fieldsData: { [key: string]: string } = { text: 'name' };
}
