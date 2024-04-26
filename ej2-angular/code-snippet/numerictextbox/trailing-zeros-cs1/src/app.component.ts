import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'



import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
         NumericTextBoxModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component

    template: `
            <ejs-numerictextbox #numeric='' id="numeric"  decimals='2' format='n2' value='10'  placeholder= 'NumericTextBox' floatLabelType= 'Always' (change)="onChange($event)" (created)="onCreate($event)" ></ejs-numerictextbox>
            `
})
export class AppComponent {
    @ViewChild('formElement') numeric?: any;
    public onChange(args: any) {
        var numericObj =  this.numeric.ej2_instances[0];
        numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
    }
    public onCreate(args: any): void {
         document.getElementsByClassName('e-numerictextbox')[0].addEventListener('focus',() =>{
            var numericObj = this.numeric.ej2_instances[0] as any;
            numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
        });
    }
    constructor() {
    }
}



