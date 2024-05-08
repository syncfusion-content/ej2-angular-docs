import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
imports: [
        FormsModule, ReactiveFormsModule, AutoCompleteModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    templateUrl: 'form-support.html'
})
export class AppComponent {
    // defined the array of data
    public skillset: string[] = [
        'ASP.NET', 'ActionScript', 'Basic',
        'C++' , 'C#' , 'dBase' , 'Delphi' ,
        'ESPOL' , 'F#' , 'FoxPro' , 'Java',
        'J#' , 'Lisp' , 'Logo' , 'PHP'
    ];
    public placeholder: String = 'e.g: ActionScript';
    sname: any;
    skillname: any;
    smail: any;
    constructor() {
    }
    skillForm = {
        skillname: null,
        sname: '',
        smail: ''
    };
}



