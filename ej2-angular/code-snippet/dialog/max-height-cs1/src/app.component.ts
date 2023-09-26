

import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
@Component({
    selector: 'app-root',
    template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div #container class='root-container'></div>
      <ejs-dialog id='dialog' #ejDialog header='Dialog' showCloseIcon='true' [visible]='visible' [target]='targetElement'
      width='800px' (created)="onCreated()" (beforeOpen)="onBeforeOpen($event)" [position]='position'>
      <ng-template #content>
            <div id="dlgContent" style="display: none">
                <div>
                    <b>JavaScript:</b><br />
                    JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript
                    language specification. Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web
                    content production; the majority of websites employ it and it is supported by all modern Web browsers without
                    plug-ins. JavaScript is a prototype-based programming language with first-class functions, making it a multi-paradigm language,
                    supporting object-oriented , imperative, and functional programming styles.
                    <br /><br /><br />
                    <b>MVC:</b><br />
                    Model–view–controller (MVC) is a software architecture pattern which separates the representation of information from the user's interaction with it. The model consists of application data, business rules, logic, and functions. A view can be any output representation of data, such as a chart or a diagram. Multiple views of the same data are possible, such as a bar chart for management and a tabular view for accountants. The controller mediates input, converting it to commands for the model or view.The central ideas behind MVC are code reusability and in addition to dividing the application into three kinds of components, the MVC design defines the interactions between them.
                    A controller can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). It can also send commands to the model to update the model's state (e.g., editing a document).
                    A model notifies its associated views and controllers when there is a change in its state. This notification allows the views to produce updated output, and the controllers to change the available set of commands. A passive implementation of MVC omits these notifications because the application does not require them or the software platform does not support them.
                    A view requests from the model the information that it needs to generate an output representation to the user.
                </div>
            </div>
        </ng-template>
      </ejs-dialog> `
})
export class AppComponent implements OnInit {
    @ViewChild('ejDialog') ejDialog: DialogComponent |any;
    // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef }) container: ElementRef| any;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;
    position = { X: 'center', Y: 'center' };
    //To get all element of the dialog component after component get initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }
    // Initialize the Dialog component's target element.
    public initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container.nativeElement.parentElement;
    }
    public visible: Boolean = false;
    // Hide the Dialog when click the footer button.
    public hideDialog: EmitType<object> = () => {
        this.ejDialog.hide();
    }
    // Sample level code to handle the button click action.
    public onOpenDialog = (event: any): void => {
        // Call the show method to open the Dialog.
        this.ejDialog.show();
    }
    public onCreated = (): void => {
      document.getElementById('dlgContent')!.style.display = 'block';
      this.ejDialog.refreshPosition();
    }
    public onBeforeOpen = function(args: any): void {
      // setting maxHeight to the Dialog.
      args.maxHeight = '300px';
    }
}


