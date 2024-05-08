import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'



import { Component } from '@angular/core';

@Component({
imports: [
        
        FormsModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">

                <textarea class="e-input" placeholder="Address"></textarea>

                <div class="e-float-input">
                    <textarea required></textarea>
                    <span class="e-float-line"></span>
                    <label class="e-float-text"> Address </label>
                </div>
               </div>`
})

export class AppComponent { }


