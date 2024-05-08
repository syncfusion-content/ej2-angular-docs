import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';

@Component({
imports: [
        
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render ButtonGroup. -->
                <form>
                    <div class='e-btn-group'>
                        <input type="radio" id="male" name="gender" value="male" checked/>
                        <label class="e-btn" for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label class="e-btn" for="female">Female</label>
                        <input type="radio" id="transgender" name="gender" value="transgender"/>
                        <label class="e-btn" for="transgender">Transgender</label>
                    </div>
                    <button class='e-btn e-primary'>Submit</button>
                </form>
                </div>`
})

export class AppComponent {
}


