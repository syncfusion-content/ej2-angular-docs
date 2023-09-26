


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id='container'>
    <div class="control-group">
    <table>
        <tr>
            <td><b>TextBox :</b></td>
            <td><ejs-inplaceeditor id="texteditor1" type="Text" mode="Inline" [(value)]="value" [model]="modelObj"></ejs-inplaceeditor></td>
            <td><ejs-inplaceeditor id="texteditor2" type="Text" mode="Inline" [(ngModel)]="value" [model]="modelObj"></ejs-inplaceeditor></td>
        </tr>
        <tr>
            <td><b>Datepicker :</b></td>
            <td><ejs-inplaceeditor id="dateeditor1" type="Date" mode="Inline" [(value)]="dateValue" [model]="dateModel"></ejs-inplaceeditor></td>
            <td><ejs-inplaceeditor id="dateeditor2" type="Date" mode="Inline" [(ngModel)]="dateValue" [model]="dateModel"></ejs-inplaceeditor></td>
        </tr>
        <tr>
            <td><b>DropDownList :</b></td>
            <td><ejs-inplaceeditor id="dropDowneditor1" type="DropDownList" mode="Inline" [(value)]="dropdownValue" [model]="dropDownmodelObj"></ejs-inplaceeditor></td>
            <td><ejs-inplaceeditor id="dropDowneditor2" type="DropDownList" mode="Inline" [(ngModel)]="dropdownValue" [model]="dropDownmodelObj"></ejs-inplaceeditor></td>
        </tr>
    </table>
</div>
</div>`
})

export class AppComponent {
  public value: string = 'Andrew';
  public modelObj: Object = { placeholder: 'Enter employee name' };
  public dateModel: Object = { showTodayButton: true, placeholder: 'Select date of birth' };
  public dateValue: Date = new Date('04/12/2018');
  public dropdownValue: string = 'Android';
  public frameWorkList : string[] = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue','Ionic'];
  public dropDownmodelObj: Object = { placeholder: 'Select frameWorks', dataSource: this.frameWorkList };
}



