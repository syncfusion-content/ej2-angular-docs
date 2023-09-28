


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <input class="e-input" type="text" value="John"  placeholder="Enter Name" readonly />
                <div class="e-float-input">
                    <input type='text' value="John" required readonly/>
                    <span class="e-float-line"></span>
                    <label class="e-float-text e-label-top">Enter Name</label>
                </div>
              </div>`
})

export class AppComponent {}


