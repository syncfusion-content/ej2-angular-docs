

import { Component } from '@angular/core';
import { ValidateEventArgs } from '@syncfusion/ej2-angular-inplace-editor';


@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
    <table class="table-section">
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Default Error Message </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor #textBox id="textBox" type="Date" name="Today" emptyText="dd/mm/yyyy" mode="Inline" [model]="model" [validationRules]="validation"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Customized Error Message </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor #date id="date" type="Date" mode="Inline" emptyText="dd/mm/yyyy" [model]="model" name="TodayCustom" [validationRules]="rules" (validating)="validating($event)"></ejs-inplaceeditor>
            </td>
        </tr>
    </table>
</div>
    `
})

export class AppComponent {
    public model: object = { placeholder: 'Select date' };
    public validation: object = { Today: { required: true}};
    public rules: object = { TodayCustom: { required: true } };

    public validating(e: ValidateEventArgs): void {
        e.errorMessage = 'Field should not be empty';
    }
}


