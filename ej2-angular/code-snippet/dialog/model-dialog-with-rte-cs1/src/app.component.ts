


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent , NodeSelection } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Modal Dialog</button>
    <div #container class='root-container'></div>
    <ejs-dialog id='dialog' #ejDialog isModal='true' (overlayClick)="onOverlayClick()" (open)="dlgopen()" content='This is a modal dialog' [target]='targetElement' width='250px'>
    <ng-template #content>
   <ejs-richtexteditor id='defaultRTE'#sample>
   <ng-template #valueTemplate>
      <p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
     <p><b>Key features:</b></p>
         <ul>
         <li> <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p> </li>
         <li> <p>Capable of handling markdown editing.</p> </li>
         <li> <p>Contains a modular library to load the necessary functionality on demand.</p> </li></ul>
    </ng-template>
    </ejs-richtexteditor>
    </ng-template>
    </ejs-dialog>`
})

export class AppComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog: DialogComponent |any;
  // The Dialog shows within the target element.
  @ViewChild('container', { read: ElementRef }) container: ElementRef |any;
  @ViewChild('sample') public rteObj?: RichTextEditorComponent;
  // The Dialog shows within the target element.
  public targetElement?: HTMLElement;

  // To get all element of the dialog component after component get initialized.
  ngOnInit() {
    this.initilaizeTarget();
  }

  // Initialize the Dialog component target element.
  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  }
  // Sample level code to handle the button click action
  public onOpenDialog = (event: any): void => {
      // Call the show method to open the Dialog
      this.ejDialog.show();
  };
  // Sample level code to hide the Dialog when click the Dialog overlay
  public onOverlayClick: EmitType<object> = () => {
      this.ejDialog.hide();
  }
  public dlgopen: EmitType<object> = () => {
      this.rteObj!.refreshUI();
  }
}



