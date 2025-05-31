import { AccordionModule } from '@syncfusion/ej2-angular-navigations';

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  imports: [AccordionModule],
  standalone: true,
  selector: 'my-thing',
  templateUrl: './app.component.html',
})
export class AccordionComponent {}

@Component({
  imports: [AccordionComponent],
  standalone: true,
  selector: 'control-content',
  templateUrl: './reusable-content.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
