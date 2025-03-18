import { enableRipple } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  RichTextEditorComponent,
  ToolbarService,
  TableService,
  EditorMode,
  RichTextEditorModule,
  ContentRender,  
  LinkService,
  ImageService,
  MarkdownEditorService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { MarkdownFormatter } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement } from '@syncfusion/ej2-base';
import { marked } from 'marked';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import {
    MentionComponent,
    MentionModule,
  } from '@syncfusion/ej2-angular-dropdowns';
enableRipple(true);

@Component({
    imports: [RichTextEditorModule, MentionModule, NgStyle],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor [value]='value' id='mdDefault' #mdDefault height='250px' [formatter]='formatter'
    [toolbarSettings]='tools' [editorMode]='mode' (created)='onCreate()'>
</ejs-richtexteditor>
<ejs-mention #editorMention id='editorMention' [dataSource]='emailData' [fields]='fields' [allowSpaces]="true" 
popupWidth='250px' popupHeight='200px' sortOrder='Ascending' target='#mdDefault_editable-content' >
<ng-template #displayTemplate let-data>
    [&commat;{{ data.name }}](mailto:{{ data.email }})
</ng-template>

<ng-template #itemTemplate let-data>
<div class="editor-mention-item-template">
    <div class="em-header">
        <div class="em-avatar" [ngStyle]="{ 'background-color': data.bgColor, 'color': data.color} ">
            <div class="em-initial">{{data.initial}}</div>
        </div>
    </div>
    <div class="em-content">
      <div class="em-name">{{data.name}}</div>
      <div class="em-email">{{data.email}}</div>
    </div>
  </div>
</ng-template>
</ejs-mention>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService, TableService]
})

export class AppComponent {
    @ViewChild('mdDefault')
    public rteObj!: RichTextEditorComponent;
  
    @ViewChild('editorMention')
    public mention!: MentionComponent;
  
    public emailData: { [key: string]: Object }[] = [
      {
        name: 'Selma Rose',
        initial: 'SR',
        email: 'selma@gmail.com',
        color: '#FAFDFF',
        bgColor: '#01579B',
      },
      {
        name: 'Maria',
        initial: 'MA',
        email: 'maria@gmail.com',
        color: '#004378',
        bgColor: '#ADDBFF',
      },
      {
        name: 'Russo Kay',
        initial: 'RK',
        email: 'russo@gmail.com',
        color: '#F9DEDC',
        bgColor: '#8C1D18',
      },
      {
        name: 'Robert',
        initial: 'RO',
        email: 'robert@gmail.com',
        color: '#FFD6F7',
        bgColor: '#37003A',
      },
      {
        name: 'Camden Kate',
        initial: 'CK',
        email: 'camden@gmail.com',
        color: '#FFFFFF',
        bgColor: '#464ECF',
      },
      {
        name: 'Garth',
        initial: 'GA',
        email: 'garth@gmail.com',
        color: '#FFFFFF',
        bgColor: '#008861',
      },
      {
        name: 'Andrew James',
        initial: 'AJ',
        email: 'james@gmail.com',
        color: '#FFFFFF',
        bgColor: '#53CA17',
      },
      {
        name: 'Olivia',
        initial: 'OL',
        email: 'olivia@gmail.com',
        color: '#FFFFFF',
        bgColor: '#8C1D18',
      },
      {
        name: 'Sophia',
        initial: 'SO',
        email: 'sophia@gmail.com',
        color: '#000000',
        bgColor: '#D0BCFF',
      },
      {
        name: 'Margaret',
        initial: 'MA',
        email: 'margaret@gmail.com',
        color: '#000000',
        bgColor: '#F2B8B5',
      },
      {
        name: 'Ursula Ann',
        initial: 'UA',
        email: 'ursula@gmail.com',
        color: '#000000',
        bgColor: '#47ACFB',
      },
      {
        name: 'Laura Grace',
        initial: 'LG',
        email: 'laura@gmail.com',
        color: '#000000',
        bgColor: '#FFE088',
      },
      {
        name: 'Albert',
        initial: 'AL',
        email: 'albert@gmail.com',
        color: '#FFFFFF',
        bgColor: '#00335B',
      },
      {
        name: 'William',
        initial: 'WA',
        email: 'william@gmail.com',
        color: '#FFFFFF',
        bgColor: '#163E02',
      },
    ];
  
    public fields: Object = { text: 'name' };
    public textArea!: HTMLTextAreaElement;
    public mdsource!: HTMLElement;
    public value: string =
      'Hello [@Maria](mailto:maria@gmail.com)\n\nWelcome to the mention integration with markdown editor demo. Type @ character and tag user from the suggestion list.';
    public placeholder: string = 'Enter the text here...';
    public tools: ToolbarModule = {
      items: [
        'Bold',
        'Italic',
        'StrikeThrough',
        '|',
        'Formats',
        'Blockquote',
        'OrderedList',
        'UnorderedList',
        'SuperScript',
        'SubScript',
        '|',
        'CreateTable',
        'CreateLink',
        'Image',
        '|',
        {
          tooltipText: 'Preview',
          template:
            '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn" aria-label="Preview Code">' +
            '<span class="e-btn-icon e-md-preview e-icons"></span></button>',
        },
        '|',
        'Undo',
        'Redo',
      ],
    };
  
    public formatter: MarkdownFormatter = new MarkdownFormatter({
      listTags: { OL: '1., 2., 3.' },
    });
    public mode: EditorMode = 'Markdown';
  
    public onCreate(): void {
      this.textArea = (
        this.rteObj!.contentModule as ContentRender
      ).getEditPanel() as HTMLTextAreaElement;
      this.textArea.addEventListener('keyup', () => {
        this.markDownConversion();
      });
      this.mdsource = document.getElementById('preview-code') as HTMLElement;
      this.mdsource?.addEventListener('click', (e: MouseEvent) => {
        this.fullPreview();
      });
    }
    public async markDownConversion(): Promise<void> {
      if (this.mdsource?.classList.contains('e-active')) {
        let id: string = this.rteObj?.getID() + 'html-view';
        let htmlPreview: Element = this.rteObj!.element.querySelector(
          '#' + id
        ) as Element;
        htmlPreview.innerHTML = await marked(
          (
            (
              this.rteObj!.contentModule as ContentRender
            ).getEditPanel() as HTMLTextAreaElement
          ).value
        );
      }
    }
    public async fullPreview(): Promise<void> {
      let id: string = this.rteObj!.getID() + 'html-preview';
      let htmlPreview: HTMLElement = this.rteObj!.element.querySelector(
        '#' + id
      ) as HTMLElement;
      if (this.mdsource!.classList.contains('e-active')) {
        this.mdsource!.classList.remove('e-active');
        this.textArea!.style.display = 'block';
        htmlPreview.style.display = 'none';
      } else {
        this.mdsource!.classList.add('e-active');
        if (!htmlPreview) {
          htmlPreview = createElement('div', {
            className: 'e-content e-pre-source',
          });
          htmlPreview.id = id;
          this.textArea!.parentNode!.appendChild(htmlPreview);
        }
        this.textArea!.style.display = 'none';
        htmlPreview.style.display = 'block';
        htmlPreview.innerHTML = await marked(
          (
            (
              this.rteObj!.contentModule as ContentRender
            ).getEditPanel() as HTMLTextAreaElement
          ).value
        );
        this.mdsource!.parentElement!.title = 'Code View';
      }
    }
}



