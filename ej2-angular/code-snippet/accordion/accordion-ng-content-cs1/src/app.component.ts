import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AccordionModule } from '@syncfusion/ej2-angular-navigations'
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, Inject } from '@angular/core';

@Component({
imports: [ AccordionModule ],
standalone: true,
  selector: 'my-thing',
  templateUrl: './app.component.html'
})
export class AccordionComponent {}

@Component({
  selector: 'control-content',
  templateUrl: './reusable-content.html',
  styleUrls: ['./app.component.css'],
  imports: [ CommonModule, AccordionComponent],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
