

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // sets mask format to the MaskedTextBox
    template: `
            <div class="col-sm-6">
                <br/><ejs-maskedtextbox #mask="" mask='999-99999' value= "342-45432" name="mask_value" type="tel"></ejs-maskedtextbox>
            </div>
    `
})

export class AppComponent {
}


