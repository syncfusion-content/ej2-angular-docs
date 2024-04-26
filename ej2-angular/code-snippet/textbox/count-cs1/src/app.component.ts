import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'




import { Component, ViewChild } from '@angular/core';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
         FormsModule, TextBoxModule
    ],


standalone: true,
    selector: 'app-container',
    styleUrls: ['./index.css'],
    template: `<div class="multiline">
                <ejs-textbox #default [multiline]='true' maxlength='25' floatLabelType='Auto' placeholder='Enter your address' (input)='inputHandler($event)' ></ejs-textbox>
               <span id='numbercount'></span>
               </div>
              `
})
export class AppComponent {
     @ViewChild('default')
    public textareaObj?: TextBoxComponent;

    public inputHandler(args: any): void {
        let word: any, addresscountRem, addressCount: string;
        word = this.textareaObj?.element.value;
        addressCount = word.length;
        addresscountRem = document.getElementById('numbercount');
        (addresscountRem as HTMLElement).textContent = addressCount+"/25";
    }
}



