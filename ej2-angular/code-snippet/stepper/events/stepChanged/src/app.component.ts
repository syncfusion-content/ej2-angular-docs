import { Component } from "@angular/core";
import { StepperChangedEventArgs } from "@syncfusion/ej2-navigations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public stepChanged(args: StepperChangedEventArgs): void {
    alert("Step changed from "+args.previousStep + " to " + args.activeStep)
  }
}
