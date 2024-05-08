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
    styleUrls: ['./style.css'],
    template:   `<div class="e-section-control">
                    <form>
                        <!-- Submit type button -->
                        <button type="submit" ejs-button>Submit</button>

                            <!-- Reset type button -->
                        <button type="reset" ejs-button>Reset</button>
                    </form>
                </div>`
                
})

export class AppComponent { }


