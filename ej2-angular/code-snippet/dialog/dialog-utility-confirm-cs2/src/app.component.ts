import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'




import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
imports: [
        
    ],


standalone: true,
    selector: 'app-root',
    template: `<button class="e-control e-btn" id="targetButton" (click)="onOpenDialog($event)">Open Confirm Dialog</button>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    public onOpenDialog = function(event: any): void {
        DialogUtility.confirm('This is a Confirmation Dialog!');
    }
}



