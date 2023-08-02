


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
        selector: 'app-root',
        template: `<ejs-richtexteditor id='defaultRTE' #sample [placeholder]='placeholder' (created)='oncreate($event)'></ejs-richtexteditor>`,
        providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class AppComponent  {
  @ViewChild('sample') public rteObj?: RichTextEditorComponent;
  // Build data to be used in At.JS config.
  public employeeList: { [key: string]: Object }[] = [
      { id: 'emp01', name: 'Jacob', email: 'jacob@mail.com' },
      { id: 'emp02', name: 'Isabella', email: 'isabella@mail.com' },
      { id: 'emp03', name: 'Ethan', email: 'ethan@mail.com' },
      { id: 'emp04', name: 'Emma', email: 'emma@mail.com' },
      { id: 'emp05', name: 'Michael', email: 'michael@mail.com' },
      { id: 'emp06', name: 'Olivia', email: 'olivia@mail.com' },
      { id: 'emp07', name: 'Jeniffer', email: 'jeniffer@mail.com' }
  ];

  public config: Object | undefined;
public placeholder: String = "Type @ to get the e-mail list";
public leftBarWidth: number | undefined;
public leftPadding: number | undefined;

public initializeConfig(): void {
  this.leftBarWidth = window.parent.document.getElementById('doc-left-toc')!.offsetWidth;
  this.leftPadding = +getComputedStyle((window.parent.document as any).getElementById('md-cnt'))!.paddingRight.match(/\d/g)!.join('');

  this.config = {
    at: "@",
    callbacks: {
      beforeReposition:  (offset: { left: number; }) => {
        offset.left = (this as any).rect().left - (this.leftBarWidth! + this.leftPadding!);
      }
    },
    data: this.employeeList,
    displayTpl: '<li>${name} <small>${email}</small></li>',
    limit: 200
  };
}

public oncreate(e: any): void {
    const textArea: HTMLElement = (this.rteObj!.contentModule as any).getEditPanel() as HTMLElement;
    (textArea as any).atwho(this.config);
    (textArea as any).on('keydown', function(e: any) {
    if (e.keyCode === 13 && ((textArea) as any).atwho('isSelecting')) {
        return false;
      }
      return undefined
    });
    }
}



