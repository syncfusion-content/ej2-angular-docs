import { Component, ViewChild } from "@angular/core";
import { StepperComponent, StepperChangedEventArgs } from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('ejStepper') stepper: StepperComponent | any;

  handleStepChanged = (args: StepperChangedEventArgs) => {
    let status = this.stepper.steps[1].status
    this.updateStatus(status)
  }
  updateStatus = (stepStatus: string) => {
    let statusMap = {
      'NotStarted' : { text: 'Your payment has not started yet', color: '#e74d4d' },
      'InProgress' : { text: 'Processing your payment', color: 'orange' },
      'Completed' : { text: 'Payment successful', color: '#4CAF50' }
    }

    let currentStatus = document.getElementById("paymentStatus");
    if (currentStatus) {
      let {text, color } = (statusMap as any)[stepStatus];
      currentStatus.innerText = text;
      currentStatus.style.backgroundColor = color;
    }
  }
}
