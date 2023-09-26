


import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    // Name and Value attribute in form submit.
    template: `<form #form="ngForm" (ngSubmit)="submitForm(form)">
                <ul>
                    <li><ejs-radiobutton name="payment" [(ngModel)]="selectedOption" value="credit/debit" label="Credit / Debit card" checked="true"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" [(ngModel)]="selectedOption" value="netbanking" label="Net Banking"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" [(ngModel)]="selectedOption" value="cashondelivery" label="Cask On Delivery"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" [(ngModel)]="selectedOption" value="others" label="Others"></ejs-radiobutton></li>

                    <li><button ejs-button [isPrimary]="true">Submit</button></li>
                </ul>
               </form>`
})

export class AppComponent {
    public selectedOption: string = 'credit/debit';
    submitForm(form: NgForm): void  {
        console.log(form.value);
    }
 }



