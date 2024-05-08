import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, ComboBoxModule,ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    templateUrl: 'reactive-form.html'
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
    skillForm?: FormGroup | any;
    fb: FormBuilder;
    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.fb = builder;
        this.createForm();
    }
    createForm() {
        this.skillForm = this.fb.group({
            skillname: ['', Validators.required],
            sname: ['', Validators.required],
            smail: ['', Validators.required]
        });
    }
}




