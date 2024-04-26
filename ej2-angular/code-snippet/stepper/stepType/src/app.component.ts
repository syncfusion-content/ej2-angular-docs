import { Component, ViewChild } from "@angular/core";
import { StepperComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [ StepperAllModule, StepperModule ],


standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('ejStepper') stepper: StepperComponent | any;

  public updateType(args: any): void {
    this.stepper.stepType = args.currentTarget.value;
  };
}
