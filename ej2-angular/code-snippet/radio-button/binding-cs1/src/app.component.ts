


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // To customize RadioButton appearance
    template: ` <div class="radioButton-control">
                    <h4>Select a payment method</h4>
                    <div class="row" *ngFor='let payment of paymentMethod'>
                        <ejs-radiobutton [label]='payment' [value]="payment" name="payment" [(ngModel)]="value"></ejs-radiobutton>
                    </div>
                </div>
                <div class="dropDownList-control">
                    <h4>Payment Method</h4>
                    <ejs-dropdownlist [dataSource]='paymentMethod' [(value)]="value" ></ejs-dropdownlist>
                </div>`
})

export class AppComponent {
    public paymentMethod: string[] = ['Credit card', 'Debit card', 'Net Banking', 'Other Wallets' ];
    public value:string = "Credit card";
}



