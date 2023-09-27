

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // sets mask format to the MaskedTextBox
    template: `
            <div class="col-sm-6">
                <br/><ejs-maskedtextbox #mask="" id="mask1" mask='00000-00000' value='93828-32132' name="mask_value1" placeholder= 'Default cursor position' floatLabelType= 'Always'></ejs-maskedtextbox><br/>
                <ejs-maskedtextbox #mask="" id="mask2" mask='00000-00000' value='83929-4342' name="mask_value2" placeholder= 'Cursor positioned at start' floatLabelType= 'Always' (focus)= "onStartfocus($event)"></ejs-maskedtextbox><br/>
                <ejs-maskedtextbox #mask="" id="mask3" mask='00000-00000' value='83929-3213' name="mask_value3" placeholder= 'Cursor positioned at end' floatLabelType= 'Always' (focus)= "onEndfocus($event)"></ejs-maskedtextbox><br/>
                <ejs-maskedtextbox #mask="" id="mask4" mask='+1 000-000-0000' value='234-432-432' name="mask_value4" placeholder= 'Cursor at specified position' floatLabelType= 'Always' (focus)= "onSpecificfocus($event)"></ejs-maskedtextbox>
            </div>
    `
})

export class AppComponent {
    public onStartfocus(args: any): void {
        //sets cursor position at start of MaskedTextBox
        args.selectionEnd= args.selectionStart = 0;
        }
        public onEndfocus(args: any): void {
        //sets cursor position at end of MaskedTextBox
        args.selectionStart=args.selectionEnd = args.maskedValue.length;
        }
        public onSpecificfocus(args: any): void {
        //sets cursor at specified position
        args.selectionStart = 3;
        args.selectionEnd = 3;
    }
}


