import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'
import { FormsModule } from '@angular/forms'




import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
imports: [
        
        RadioButtonModule,
        ButtonModule,
        FormsModule
    ],


standalone: true,
    selector: 'app-root',
    // Name and Value attribute in form submit.
    template: ` <div class="e-section-control">
                <form #form="ngForm" (ngSubmit)="submitForm(form)">
                <ul>
                    <li><ejs-radiobutton name="payment" [(ngModel)]="selectedOption" value="credit/debit" label="Credit / Debit card" checked="true"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" [(ngModel)]="selectedOption" value="netbanking" label="Net Banking"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" [(ngModel)]="selectedOption" value="cashondelivery" label="Cask On Delivery"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" [(ngModel)]="selectedOption" value="others" label="Others"></ejs-radiobutton></li>

                    <li><button ejs-button [isPrimary]="true">Submit</button></li>
                </ul>
               </form>
               </div>`
})

export class AppComponent {
    public selectedOption: string = 'credit/debit';
    submitForm(form: NgForm): void  {
        console.log(form.value);
    }
 }



