import { Component } from "@angular/core";
import { StepperRenderingEventArgs, StepperAllModule, StepperModule } from "@syncfusion/ej2-angular-navigations";

@Component({
  imports: [ StepperAllModule, StepperModule ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public beforeStepRender(args: StepperRenderingEventArgs): void {
    //Your required action here
  }
}
