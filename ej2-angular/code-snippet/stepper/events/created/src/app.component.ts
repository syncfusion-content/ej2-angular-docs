import { Component } from "@angular/core";

@Component({
imports: [ StepperAllModule, StepperModule ],


standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public created(): void {
    //Your required action here
  }
}
