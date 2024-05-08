import { Component } from "@angular/core";
import { StepperChangingEventArgs } from "@syncfusion/ej2-navigations";

@Component({
imports: [ StepperAllModule, StepperModule ],


standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public stepChanging(args: StepperChangingEventArgs): void {
    alert("Step changing from "+args.previousStep + " to " + args.activeStep)
  }
}
