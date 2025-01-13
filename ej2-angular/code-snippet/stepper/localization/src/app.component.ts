import { Component, OnInit } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';
import { StepperAllModule, StepperModule } from "@syncfusion/ej2-angular-navigations";

@Component({
  imports: [ StepperAllModule, StepperModule ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  ngOnInit() {
    // Load French culture for stepper optional property
      L10n.load({
          'fr-BE': {
          'stepper': {
                'optional': "facultatif"
              }
          }
      });
  };
}
