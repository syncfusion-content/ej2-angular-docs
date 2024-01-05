import { Component } from "@angular/core";
import { StepperRenderingEventArgs } from "@syncfusion/ej2-navigations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public beforeStepRender(args: StepperRenderingEventArgs): void {
    //Your required action here
  }
}
