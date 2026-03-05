import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AccordionModule } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewEncapsulation, Inject } from '@angular/core';


@Component({
  standalone: true,
  selector: 'my-thing',
  templateUrl: './app.component.html',
  imports: [AccordionModule]
})
export class AccordionComponent {}

@Component({
  standalone: true,
  selector: 'control-content',
  templateUrl: './reusable-content.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [AccordionComponent]
})
export class MyApp {}


