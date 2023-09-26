

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
    <h3> Built-in Controls </h3>
    <table class="table-section">
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DatePicker </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="date" mode="Inline" type="Date" [model]="dateModel" [value]='dateValue'></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DateTimePicker </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="dateTime" mode="Inline" type="DateTime" [value]='dateTimeValue' [model]="dateModel"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DropDownList </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="dropDowns" mode="Inline" type="DropDownList" value="Android" [model]="dropDownModel"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> MaskedTextBox </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="masked" mode="Inline" type="Mask" value="123-345-678" [model]="maskModel"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> NumericTextBox </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="numeric" mode="Inline" type="Numeric" value=10 [model]="numericModel"></ejs-inplaceeditor>
            </td>
            </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> TextBox </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="textbox" mode="Inline" type="Text" value="Andrew" [model]="textModel"></ejs-inplaceeditor>
            </td>
        </tr>
    </table>
    <h3> Injectable Controls </h3>
    <table class="table-section">
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> AutoComplete </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="autoComplete" mode="Inline" type="AutoComplete" value="Android" [model]="dropDownModel"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> ColorPicker </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="color" mode="Inline" type="Color" value="#81aefd"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> ComboBox </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="comboBox" mode="Inline" type="ComboBox" value="Android" [model]="dropDownModel"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DateRangePicker </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="dateRange" type="DateRange" mode="Inline" [value]="dateRangeValue" [model]="dateModel"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> MultiSelect </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="multiSelect" mode="Inline" type="MultiSelect" value="multiSelectValue" [model]="dropDownModel"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> RTE </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="rte" mode="Inline" type="RTE" value="<p>Enter your content here</p>" [model]="rteModel"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Slider </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="slider" mode="Inline" type="Slider" value=20></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> TimePicker </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="time" mode="Inline" type="Time" [value]="dateValue" [model]="dateModel"></ejs-inplaceeditor>
            </td>
        </tr>
    </table>
</div>
    `
})

export class AppComponent {
  public dateModel: Object = {  placeholder: 'Select date' };
  public dateValue: Date = new Date('11/23/2018');
  public dateTimeValue: Date = new Date('11/23/2018 12:30 PM');
  public frameWorkList: string[] = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
  public dropDownModel: object = { dataSource: this.frameWorkList, placeholder: 'Select frameworks'};
  public multiSelectModel: object = {  dataSource: this.frameWorkList, placeholder: 'Select framework'};
  public multiSelectValue: string[] = ['Android'];
  public maskModel: object = { mask: '000-000-000' };
  public numericModel: object = { placeholder: 'Enter number'};
  public textModel: object = { placeholder: 'Enter some text' };
  public dateRangeValue: Date[] =  [new Date('11/12/2018'), new Date('11/15/2018')];
  public rteModel: object = { placeholder: 'Enter your content here' };
}


