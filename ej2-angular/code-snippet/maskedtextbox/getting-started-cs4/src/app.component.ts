

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // sets different types of standard masks to the MaskedTextBox component
    template: `
             <div class='wrap'>
                 <ejs-maskedtextbox mask='#####' placeholder='Mask ##### (ex: 012+-)' floatLabelType= 'Always'></ejs-maskedtextbox>
             </div>
             <div class='wrap'>
                 <ejs-maskedtextbox mask='LLLLLL' placeholder='Mask LLLLLL (ex: Sample)' floatLabelType= 'Always'></ejs-maskedtextbox>
             </div>
             <div class='wrap'>
                 <ejs-maskedtextbox mask='&&&&&' placeholder='Mask &&&&& (ex: A12@#)' floatLabelType= 'Always'></ejs-maskedtextbox>
             </div>
             <div class='wrap'>
                 <ejs-maskedtextbox mask='>LLL<LLL' placeholder='Mask >LLL<LL (ex: SAMple)' floatLabelType= 'Always'></ejs-maskedtextbox>
             </div>
             <div class='wrap'>
                 <ejs-maskedtextbox mask='\\A999' placeholder='Mask \\A999 (ex: A321)' floatLabelType= 'Always'></ejs-maskedtextbox>
             </div>`
})
export class AppComponent {
    constructor() {
    }
}


