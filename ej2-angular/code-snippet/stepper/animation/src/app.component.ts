import { Component } from "@angular/core";
import { StepperAnimationSettingsModel, StepperAllModule, StepperModule } from "@syncfusion/ej2-angular-navigations";

@Component({
  imports: [ StepperAllModule, StepperModule ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public animateStepper: StepperAnimationSettingsModel = {enable: true, duration: 2000, delay: 500};
}
