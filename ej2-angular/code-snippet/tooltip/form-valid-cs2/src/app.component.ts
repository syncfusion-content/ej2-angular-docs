import { Component, ViewChild, ElementRef } from '@angular/core';
import { TooltipComponent, TooltipModule } from '@syncfusion/ej2-angular-popups';

@Component({
  imports: [
    TooltipModule
  ],
  standalone: true,
  selector: 'my-app',
  template: `
    <div id="tool">
      <form id="details" role="form">
        <div id="user">
          <div class="info">User Name:</div>
          <ejs-tooltip #tooltip position="RightCenter" title="Please enter your name">
            <div class="inputs">
              <input #unameInput type="text" id="uname" class="e-info e-input" name="firstname" />
            </div>
          </ejs-tooltip>
        </div>
        <br />
        <div>
          <div class="info">Email Address:</div>
          <ejs-tooltip position="RightCenter" title="Enter a valid email address">
            <div class="inputs">
              <input type="text" id="mail" class="e-info e-input" name="email" />
            </div>
          </ejs-tooltip>
        </div>
        <br />
        <div>
          <div class="info">Password:</div>
          <ejs-tooltip #tooltipPwd position="RightCenter" title="Be at least 8 characters length">
            <div class="inputs">
              <input #pwdInput id="pwd" type="password" class="e-info e-input" name="password" />
            </div>
          </ejs-tooltip>
        </div>
        <br />
        <div>
          <div class="info">Confirm Password:</div>
          <ejs-tooltip position="RightCenter" title="Re-enter your password">
            <div class="inputs">
              <input #cpwdInput id="cpwd" type="password" class="e-info e-input" name="Cpwd" />
            </div>
          </ejs-tooltip>
        </div>
        <br />
        <div class="btn">
          <input id="sample" ejs-button type="button" value="Submit" (click)="submitdata()" />
          <input id="clear" ejs-button type="reset" value="Reset" (click)="cleardata()" />
        </div>
      </form>
    </div>
  `,
})
export class AppComponent {
  @ViewChild('tooltip') tooltip!: TooltipComponent;
  @ViewChild('tooltipPwd') tooltipPwd!: TooltipComponent;
  @ViewChild('unameInput') unameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('pwdInput') pwdInput!: ElementRef<HTMLInputElement>;
  @ViewChild('cpwdInput') cpwdInput!: ElementRef<HTMLInputElement>;

  submitdata() {
    const name = this.unameInput.nativeElement.value;
    const pwd = this.pwdInput.nativeElement.value;
    const cpwd = this.cpwdInput.nativeElement.value;

    if (name.length > 0 && name.length < 4) {
      this.unameInput.nativeElement.title = 'Required Minimum 4 Characters';
      this.unameInput.nativeElement.style.backgroundColor = 'red';
      this.tooltip.open(this.unameInput.nativeElement);
    } else {
      this.unameInput.nativeElement.style.backgroundColor = 'white';
    }

    if (pwd !== '' && pwd.length < 8) {
      this.pwdInput.nativeElement.title = 'Required Minimum 8 Characters';
      this.pwdInput.nativeElement.style.backgroundColor = 'red';
      this.tooltipPwd.open(this.pwdInput.nativeElement);
    } else {
      this.pwdInput.nativeElement.style.backgroundColor = 'white';
    }

    if (name.length >= 4 && pwd !== '' && pwd.length >= 8 && pwd === cpwd) {
      alert('Form Submitted');
    } else {
      alert('Details are not Valid');
    }
  }

  cleardata() {
    this.unameInput.nativeElement.style.backgroundColor = 'white';
    this.unameInput.nativeElement.title = 'Please enter your name';

    this.pwdInput.nativeElement.style.backgroundColor = 'white';
  }
}