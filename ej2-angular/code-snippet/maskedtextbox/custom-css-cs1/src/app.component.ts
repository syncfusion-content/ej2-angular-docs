

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // sets mask format to the MaskedTextBox
    template: `
            <div class="col-sm-6">
                <br/><ejs-maskedtextbox #mask="" id="mask1" mask='00000' value= "42648" name="mask_value" cssClass="e-style" placeholder= 'Enter user ID' floatLabelType= 'Always' (focus)= "onfocus($event)"></ejs-maskedtextbox>
            </div>
    `
})

export class AppComponent {
    public onfocus(args: any): void {
        //sets cursor position at start of MaskedTextBox
        args.selectionEnd= args.selectionStart;
    }
}


