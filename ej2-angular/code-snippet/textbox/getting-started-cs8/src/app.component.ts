


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <input class="e-input" type="text"  placeholder="Enter Name" disabled />
                <div class="e-float-input e-disabled">
                    <input type='text' required disabled/>
                    <span class="e-float-line"></span>
                    <label class="e-float-text">Enter Name</label>
                </div>
              </div>`
})

export class AppComponent {}


