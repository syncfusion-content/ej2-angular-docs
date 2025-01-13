import { Component } from "@angular/core";
import { StepperClickEventArgs, StepperAllModule, StepperModule } from "@syncfusion/ej2-angular-navigations";

@Component({
  imports: [ StepperAllModule, StepperModule ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public stepClick(args: StepperClickEventArgs): void {
    //Your required action here
  }
}
