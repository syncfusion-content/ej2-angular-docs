import { NgModule } from '@angular/core';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { DialogAllModule } from '@syncfusion/ej2-angular-popups';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

/**
 * Module
 */
 @NgModule({ declarations: [ AppComponent ], imports: [ CommonModule, ScheduleAllModule, RecurrenceEditorAllModule, DialogAllModule, BrowserModule], providers: [], bootstrap: [AppComponent]
 })
 export class AppModule { }