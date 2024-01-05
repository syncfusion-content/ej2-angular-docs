import { Component } from "@angular/core";
import { StepperClickEventArgs } from "@syncfusion/ej2-navigations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public stepClick(args: StepperClickEventArgs): void {
    //Your required action here
  }
}
