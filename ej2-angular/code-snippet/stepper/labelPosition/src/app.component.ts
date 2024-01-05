import { Component, ViewChild } from "@angular/core";
import { StepperComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('ejStepper') stepper: StepperComponent | any;

  public updateLabelPosition(args: any): void {
    this.stepper.labelPosition = args.currentTarget.value;
  };
}
