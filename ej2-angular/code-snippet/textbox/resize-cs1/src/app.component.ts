


import { Component, ViewChild } from '@angular/core';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-container',
    styleUrls: ['./index.css'],
    template: `<div class="multiline">
            <ejs-textbox #default [multiline]='true' value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center'
                floatLabelType='Auto' placeholder='Enter your address' (created)="createHandler($event)" (input)='inputHandler($event)' ></ejs-textbox>
            </div>
        `
})
export class AppComponent {
    @ViewChild('default')
    public textareaObj?: TextBoxComponent;
    public createHandler(args: any): void {
        (this.textareaObj as TextBoxComponent).addAttributes({rows: 1} as any);
        (this.textareaObj as TextBoxComponent).element.style.height = "auto";
        (this.textareaObj as TextBoxComponent).element.style.height = ((this.textareaObj as TextBoxComponent).element.scrollHeight)+"px";
    }
    public inputHandler(args: any): void {
        (this.textareaObj as TextBoxComponent).element.style.height = "auto";
        (this.textareaObj as TextBoxComponent).element.style.height = ((this.textareaObj as TextBoxComponent).element.scrollHeight)+"px";
    }
}



