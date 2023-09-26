


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType, isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
      <div #container class='root-container'></div>
      <ejs-dialog id='dialog' #template showCloseIcon='true' (open)="dialogOpen()" [height]='height' [target]='targetElement' width='435px'>
      <ng-template #footerTemplate>
            <input id="inVal" class="e-input" type="text" placeholder="Enter your message here!"/>
            <button id="sendButton" class="e-control e-btn e-primary sendButton" data-ripple="true">Send</button>
        </ng-template>
        <ng-template #content>
            <div class="dialogContent">
                <span class="dialogText">Greetings Nancy! When will you share me the source files of the project?</span>
            </div>
        </ng-template>
        <ng-template #header>
            <img class="img2" src="https://ej2.syncfusion.com/products/typescript/dialog/template/images/1.png" style="display: inline-block;" alt="header image"/>
            <div title="Nancy" class="e-icon-settings dlg-template"> Nancy </div>
        </ng-template>
      </ejs-dialog>
        `
})

export class AppComponent implements OnInit {
    @ViewChild('template') template: DialogComponent | any;
    // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef }) container: ElementRef | any;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;
    public proxy: any = this;

    //To get all element of the dialog component after component get initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }

    // Initialize the Dialog component target element.
    public initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container.nativeElement.parentElement;
    }
    public height: string = '250px';
    public dialogOpen: EmitType<object> = () => {
        (document.getElementById('sendButton') as any).keypress = (e: any) => {
            if (e.keyCode === 13) { this.updateTextValue(); }
        };
        (document.getElementById('inVal')as HTMLElement).onkeydown = (e: any) => {
            if (e.keyCode === 13) { this.updateTextValue(); }
        };
        document.getElementById('sendButton')!.onclick = (): void => {
            this.updateTextValue();
        };
    }

    public updateTextValue: EmitType<object> = () => {
        let enteredVal: HTMLInputElement = document.getElementById('inVal') as HTMLInputElement;
        let dialogTextElement: HTMLElement = document.getElementsByClassName('dialogText')[0] as HTMLElement;
        let dialogTextWrap : HTMLElement = document.getElementsByClassName('dialogContent')[0] as HTMLElement;
        if (!isNullOrUndefined(document.getElementsByClassName('contentText')[0])) {
            detach(document.getElementsByClassName('contentText')[0]);
        }
        if (enteredVal.value !== '') {
            dialogTextElement.innerHTML = enteredVal.value;
        }
        enteredVal.value = '';
    }

    // Sample level code to handle the button click action
    public onOpenDialog = (event: any): void => {
        // Call the show method to open the Dialog
        this.template.show();
    }
}



function detach(arg0: Element) {
    throw new Error('Function not implemented.');
}

