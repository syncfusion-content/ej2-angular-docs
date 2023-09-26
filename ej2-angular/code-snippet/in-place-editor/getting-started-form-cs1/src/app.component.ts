


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id='container'>
    <div class="control-group">
        <div class="e-heading">
        <h3> Modify Basic Details </h3>
        </div>
        <table>
            <tr>
                <td>Name</td>
                <td class='left'>
                    <ejs-inplaceeditor id="element" mode="Inline" value="Andrew" [model]="elementModel"></ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td>Date of Birth</td>
                <td class='left'>
                    <ejs-inplaceeditor id="dateofbirth" type="Date" mode="Inline" [value]="dateValue" [model]="dateModel"></ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td>Gender</td>
                <td class='left'>
                    <ejs-inplaceeditor id="gender" type="DropDownList" mode="Inline" value="Male" [model]="genderModel"></ejs-inplaceeditor>
                </td>
            </tr>
        </table>
        </div>
        </div>`
})

export class AppComponent {
  public genderData: string[] = ['Male', 'Female'];
  public dateModel: Object = { showTodayButton: true, placeholder: 'Select date of birth' };
  public dateValue: Date = new Date('04/12/2018');
  public elementModel: Object = { placeholder: 'Enter your name' };
  public genderModel: Object = {  dataSource: this.genderData, placeholder: 'Select gender' };
}



