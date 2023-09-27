


import { Component, ViewEncapsulation, Inject } from '@angular/core';

@Component({
  selector: 'my-thing',
  templateUrl: './app.component.html'
})
export class AccordionComponent {}

@Component({
  selector: 'control-content',
  templateUrl: './reusable-content.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyApp {}



