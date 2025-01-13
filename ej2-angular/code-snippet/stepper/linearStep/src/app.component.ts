import { Component, ViewChild } from "@angular/core";
import { StepperComponent, StepperAllModule, StepperModule } from "@syncfusion/ej2-angular-navigations";

@Component({
  imports: [ StepperAllModule, StepperModule ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('ejStepper') stepper: StepperComponent | any;

  public updateLinear(args: any): void {
    this.stepper.linear = (/true/).test(args.currentTarget.value) ? true : false;
    this.stepper.reset();
  };
}
