


import { Component, ViewChild } from '@angular/core';
import { TooltipComponent, TooltipModule } from '@syncfusion/ej2-angular-popups';
@Component({
    selector: 'my-app',
    template: `
    <div id="tool">
           <form id="details" role="form">
        <div id="user">
          <div class="info">User Name:</div>
          <ejs-tooltip #tooltip position='RightCenter' title="Please enter your name">
          <div class="inputs"><input type="text" id="uname" class="e-info e-input" name="firstname" title="Please enter your name"></div>
        </ejs-tooltip>
        </div>
        <br/>
        <div>
          <div class="info">Email Address:</div>
          <ejs-tooltip position='RightCenter' title="Enter a valid email address">
          <div class="inputs"><input type="text" id="mail" class="e-info e-input" name="email" title="Enter a valid email address"></div>
        </ejs-tooltip>
        </div>
        <br/>
        <div>
          <div class="info">Password:</div>
          <ejs-tooltip #tooltippwd position='RightCenter' title="Be at least 8 characters length">
          <div class="inputs"><input id="pwd" type="password" class="e-info e-input" name="password" title="Be at least 8 characters length"></div>
        </ejs-tooltip>
        </div>
        <br/>
        <div>
          <div class="info">Confirm Password:</div>
          <ejs-tooltip position='RightCenter' title="Re-enter your password">
          <div class="inputs"><input id="cpwd" type="password" class="e-info e-input" name="Cpwd" title="Re-enter your password"></div>
        </ejs-tooltip>
        </div>
        <br/>
        <div class="btn">
          <input id="sample" ejs-button type="button" value="Submit" (click)="submitdata($event)" />
          <input id="clear" ejs-button type="reset" value="Reset" (click)="cleardata($event)" />
        </div>
      </form>
      </div>
        `,
})

export class AppComponent {
  @ViewChild('tooltip')
  tooltip: TooltipComponent| any
  @ViewChild('tooltippwd')
  tooltipcontrol: TooltipComponent | any
  submitdata(event : any){
  let name = (document.getElementById('uname')! as any).value;
  let pwd = (document.getElementById('pwd')! as any).value;
  let cpwd = (document.getElementById('cpwd')! as any).value;
  if(name.length > 0 && name.length < 4){
    document.getElementById('uname')!.title = 'Required Minimum 4 Characters';
    document.getElementById('uname')!.style.backgroundColor = 'red';
    let target = document.getElementById('uname');
    this.tooltip.open(target);
  } else {
     document.getElementById('uname')!.style.backgroundColor = 'white';
  }
  if(pwd !== '' && pwd.length < 8){
     document.getElementById('pwd')!.title = 'Required Minimum 8 Characters';
    document.getElementById('pwd')!.style.backgroundColor = 'red';
    let pwdtarget = document.getElementById('pwd');
    this.tooltipcontrol.open(pwdtarget);
  } else {
     document.getElementById('pwd')!.style.backgroundColor = 'white';
  }
  if(name.length >= 4 && pwd !== '' && pwd.length >= 8  &&  pwd == cpwd ){
     alert('Form Submitted');
  } else {
     alert('Details are not Valid');
  }
}
cleardata(event: any){
  document.getElementById('uname')!.style.backgroundColor = 'white';
  document.getElementById('pwd')!.style.backgroundColor = 'white';
  let target = document.getElementById('uname');
  this.tooltip.close(target);
  document.getElementById('uname')!.title = 'Please enter your name';
  let pwdtarget = document.getElementById('pwd');
  this.tooltipcontrol.close(pwdtarget);
}
}



