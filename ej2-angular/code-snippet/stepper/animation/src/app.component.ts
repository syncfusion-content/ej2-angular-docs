import { Component } from "@angular/core";
import { StepperAnimationSettingsModel } from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public animateStepper: StepperAnimationSettingsModel = {enable: true, duration: 2000, delay: 500};
}
