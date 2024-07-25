import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { MentionModule  } from '@syncfusion/ej2-angular-dropdowns'

/**
 * Rich Text Editor Custom-Toolbar Sample
 */
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, HtmlEditorService, ImageService, LinkService } from '@syncfusion/ej2-angular-richtexteditor';
import { Mention } from '@syncfusion/ej2-angular-dropdowns';


@Component({
imports: [
        
        RichTextEditorAllModule,
        MentionModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id="mention_integration"  placeholder="Type @ and tag the name" (actionBegin)="onActionBegin($event)">
    <ng-template #valueTemplate>
        <p>Hello <span contenteditable="false" class="e-mention-chip"><a href="mailto:maria@gmail.com" title="maria@gmail.com">&#64;Maria</a></span>&#8203;</p>
        <p>Welcome to the mention integration with rich text editor demo. Type <code>&#64;</code> character and tag user from the suggestion list. </p>
    </ng-template>
</ejs-richtexteditor>
<ejs-mention #mention [dataSource]='data' target='#mention_integration_rte-edit-view' [fields]='fieldsData' [suggestionCount]="8" [showMentionChar]="false" [allowSpaces]="true"  
popupWidth='250px' popupHeight='200px'>
    <ng-template #itemTemplate let-data>
        <table>
            <tr>
              <td>
                <div id="mention-TemplateList"> 
                  <img class="mentionEmpImage" src="./assets/rich-text-editor/images/{{data.Eimg}}.png" alt="employee" />
                  <span class="e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom {{data.Status}}"></span>
                </div>
                </td>
                <td class="mentionNameList">
                  <span class="person">{{data.Name}}</span>
                  <span class="email">{{data.EmailId}}</span>
                </td>
              </tr>
            </table>
    </ng-template>
    <ng-template #displayTemplate let-data>
        <a href="mailto:{{data.EmailId}}" title="{{data.EmailId}}">&#64;{{data.Name}}</a>
    </ng-template>
</ejs-mention>
`,
providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
} )
export class AppComponent {
    @ViewChild('mention') mentionObj!: Mention;
    public toolbarSettings: object = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
        'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', '|', 'Undo', 'Redo'
    ]
    };
    public data: { [key: string]: Object }[] = [
        { Name: "Selma Rose", Status: "active", Eimg: "2", EmailId: "selma@gmail.com" },
        { Name: "Maria", Status: "active", Eimg: "1", EmailId: "maria@gmail.com" },
        { Name: "Russo Kay", Status: "busy", Eimg: "8", EmailId: "russo@gmail.com" },
        { Name: "Camden Kate", Status: "active", Eimg: "9", EmailId: "camden@gmail.com" },
        { Name: "Robert", Status: "busy", Eimg: "dp", EmailId: "robert@gmail.com" },
        { Name: "Garth", Status: "active", Eimg: "7", EmailId: "garth@gmail.com" },
        { Name: "Andrew James", Status: "away", Eimg: "pic04", EmailId: "noah@gmail.com" },
        { Name: "Olivia", Status: "busy", Eimg: "5", EmailId: "olivia@gmail.com" },
        { Name: "Sophia", Status: "away", Eimg: "6", EmailId: "sophia@gmail.com" },
        { Name: "Margaret", Status: "active", Eimg: "3", EmailId: "margaret@gmail.com" },
        { Name: "Ursula Ann", Status: "active", Eimg: "dp", EmailId: "ursula@gmail.com" },
        { Name: "Laura Grace", Status: "away", Eimg: "4", EmailId: "laura@gmail.com" },
        { Name: "Albert", Status: "active", Eimg: "pic03", EmailId: "albert@gmail.com" },
        { Name: "William", Status: "away", Eimg: "10", EmailId: "william@gmail.com" }
      ];
      public  fieldsData: { [key: string]: string } = { text: 'Name' };

      onActionBegin(args: any) {
        if (args.requestType === 'EnterAction' && this.mentionObj.element.classList.contains('e-popup-open')) {
          args.cancel = true;
        }
      }
}