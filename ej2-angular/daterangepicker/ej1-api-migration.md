---
layout: post
title: Ej1 api migration in Angular Daterangepicker component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Daterangepicker component

This article describes the API migration process of DateRangePicker component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Date Selection

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Setting the value
</td>
<td>
<b>Property:</b> <i>value</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" value="5/5/2019-6/6/2019"/>
```

</td>
<td>
<b>Property:</b> <i>value</i>

```
<ejs-daterangepicker id="daterangepicker" value='value'></ejs-daterangepicker>
```

```
public value: Date[] = [new Date("10/07/2017"), new Date("2/2/2019")]
```

</td>
</tr>
</thead>
</table>

## Date Format

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Display date format
</td>
<td>
<b>Property:</b> <i>dateFormat</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" dateFormat="dd/MM/yyyy"/>
```

</td>
<td>
<b>Property:</b> <i>format</i>

```
<ejs-daterangepicker id="daterangepicker" format="dd/MMM/yy hh:mm a"></ejs-daterangepicker>
```

</td>
</tr>
</thead>
</table>

## Date Range

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Minimum date
</td>
<td>
<b>Property:</b> <i>minDate</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" minDate="7/7/2019"/>
```

</td>
<td>
<b>Property:</b> <i>min</i>

```
<ejs-daterangepicker id="daterangepicker" min="7/7/2019"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Maximum date
</td>
<td>
<b>Property:</b> <i>maxDate</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" maxDate="7/7/2019"/>
```

</td>
<td>
<b>Property:</b> <i>max</i>

```
<ejs-daterangepicker id="daterangepicker" max="7/7/2019"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Start date
</td>
<td>
<b>Property:</b> <i>startDate</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" startDate="7/7/2019"/>
```

</td>
<td>
<b>Property:</b> <i>startDate</i>

```
<ejs-daterangepicker id="daterangepicker" startDate="7/7/2019"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
End date
</td>
<td>
<b>Property:</b> <i>endDate</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" endDate="7/7/2019"/>
```

</td>
<td>
<b>Property:</b> <i>endDate</i>

```
<ejs-daterangepicker id="daterangepicker" startDate="7/7/2019" endDate="8/8/2019"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Preset ranges
</td>
<td>
<b>Property:</b> <i>ranges</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" [ranges]='ranges'/>
```

```
ranges: Object = [{ label: "Today", range: [new Date(), new Date()] },{ label: "Last Week", range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()] }]
```

</td>
<td>
<b>Property:</b> <i>presets</i>

```
public today: Date = new Date(new Date().toDateString());
    public weekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
    public weekEnd: Date = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
        - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString());
```

```
<ejs-daterangepicker placeholder='Select a range'>
    <e-presets>
        <e-preset label="This Week" [start]='weekStart' [end]='weekEnd'></e-preset>
    </e-presets>
</ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Add ranges
</td>
<td>
<b>Method:</b> <i>addRanges()</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (create)='onCreate($event)'/>
```

```
public onCreate(e:any) {
    var dateObj = $("#daterangepicker").data("ejDateRangePicker");
    dateObj.addRanges("new Range", [new Date("11/12/2019"), new Date("11/12/2021")]);
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Clear ranges
</td>
<td>
<b>Method:</b> <i>clearRanges()</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (create)='onCreate($event)'/>
```

```
public onCreate(e:any) {
    var dateObj = $("#daterangepicker").data("ejDateRangePicker");
    dateObj.clearRanges();
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Get selected range
</td>
<td>
<b>Method:</b> <i>getSelectedRange()</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" startDate="5/5/2019" endDate="8/8/2019" (create)='onCreate($event)'/>
```

```
public onCreate(e:any) {
    var dateObj = $("#daterangepicker").data("ejDateRangePicker");
    console.log(dateObj.getSelectedRange());
}
```

</td>
<td>
<b>Method:</b> <i>getSelectedRange()</i>

```
<ejs-daterangepicker id="daterangepicker" #rangeObj startDate="7/7/2019" endDate="8/8/2019" (created)="onCreate($event)"></ejs-daterangepicker>
```

```
@ViewChild("rangeObj") rangeObj: DateRangePickerComponent;

public onCreate (args: any) {
    console.log(this.rangeObj.getSelectedRange());
}
```

</td>
</tr>
<tr>
<td>
Set date range
</td>
<td>
<b>Method:</b> <i>setRange()</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (create)='onCreate($event)'/>
```

```
public onCreate (args: any) {
    var dateObj = $("#daterangepicker").data("ejDateRangePicker");
    dateObj.setRange([new Date("11/12/2011"), new Date("11/12/2019")]);
}
```

<td>
<b>Not Applicable</b>
</td>
</tr>
</thead>
</table>

## Disabled Dates

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Disabled dates
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Can be achieved by</b>

```
<ejs-daterangepicker id="daterangepicker" (renderDayCell)="disableDaterange($event)"></ejs-daterangepicker>
```

```
public disableDaterange(args:any) {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.isDisabled = true;
    }
}
```

</td>
</tr>
</thead>
</table>

## Customization

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
CSS Class
</td>
<td>
<b>Property:</b> <i>cssClass</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" cssClass='gradient-lime'/>
```

</td>
<td>
<b>Property:</b> <i>cssClass</i>

```
<ejs-daterangepicker id="daterangepicker" cssClass="gradient-lime"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Enable/Disable the TimePicker with DateRangePicker
</td>
<td>
<b>Property:</b> <i>enableTimePicker</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" [enableTimePicker]='true'/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Time format
</td>
<td>
<b>Property:</b> <i>timeFormat</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" timeFormat="HH:mm"/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Minimum days span
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>minDays</i>

```
<ejs-daterangepicker id="daterangepicker" minDays="5"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Maximum days span
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>maxDays</i>

```
<ejs-daterangepicker id="daterangepicker" maxDays="5"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Button text
</td>
<td>
<b>Property:</b> <i>buttonText</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" [buttonText]='buttonText'/>
```

```
buttonText: Object = { reset: "Again", cancel: "Cut", apply: "Ok" }
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-daterangepicker id="daterangepicker" locale="en"></ejs-daterangepicker>
```

```
L10n.load({
    'en': {
        'daterangepicker': { applyText: 'Apply' }
    }
});
```

</td>
</tr>
<tr>
<td>
Show/Hide the popup button
</td>
<td>
<b>Property:</b> <i>showPopupButton</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" [showPopupButton]='false'/>
```

</td>
<td>
<b>Event:</b> <i>focus</i>

```
<ejs-daterangepicker id="daterangepicker" #rangeObj (focus)="onFocus($event)"></ejs-daterangepicker>
```

```
@ViewChild("rangeObj") rangeObj: DateRangePickerComponent;

public onFocus(args:any) {
    this.rangeObj.show();
}
```

```css
.e-control-wrapper .e-input-group-icon.e-range-icon {
    display: none;
}
```

</td>
</tr>
<tr>
<td>
Enable/Disable the rounded corner
</td>
<td>
<b>Property:</b> <i>showRoundedCorner</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" [showRoundedCorner]='true'/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-daterangepicker id="daterangepicker" cssClass="e-custom-style"></ejs-daterangepicker>
```

```css
.e-control-wrapper.e-custom-style.e-date-range-wrapper.e-input-group {
    border-radius: 4px;
}
```

</td>
</tr>
<tr>
<td>
FocusIn event
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>focus</i>

```
<ejs-daterangepicker id="daterangepicker" (focus)="onFocus($event)"></ejs-daterangepicker>
```

```
public onFocus(args:any) {/** code block */ }
```

</td>
</tr>
<tr>
<td>
FocusOut event
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>blur</i>

```
<ejs-daterangepicker id="daterangepicker" (blur)="onBlur($event)"></ejs-daterangepicker>
```

```
public onBlur(args:any) {/** code block */ }
```

</td>
</tr>
<tr>
<td>
FocusIn method
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>focusIn()</i>

```
<ejs-daterangepicker id="daterangepicker" #rangeObj (created)="onCreate($event)"></ejs-daterangepicker>
```

```
@ViewChild("rangeObj") rangeObj: DateRangePickerComponent;
public onCreate(args:any) {
    this.rangeObj.focusIn();
}
```

</td>
</tr>
<tr>
<td>
FocusOut method
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>focusOut()</i>

```
<ejs-daterangepicker id="daterangepicker" #rangeObj (created)="onCreate($event)"></ejs-daterangepicker>
```

```
@ViewChild("rangeObj") rangeObj: DateRangePickerComponent;
public onCreate(args:any) {
    this.rangeObj.focusOut();
}
```

</td>
</tr>
</thead>
</table>

## Accessibility

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Enable/Disable the RTL
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>enableRtl</i>

```
<ejs-daterangepicker id="daterangepicker" [enableRtl]="true"></ejs-daterangepicker>
```

</td>
</tr>
</thead>
</table>

## Persistence

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Enable/Disable the persistence
</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" [enablePersistence]='true'/>
```

</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```
<ejs-daterangepicker id="daterangepicker" [enablePersistence]="true"></ejs-daterangepicker>
```

</td>
</tr>
</thead>
</table>

## Common

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Width
</td>
<td>
<b>Property:</b> <i>width</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" width="200px"/>
```

</td>
<td>
<b>Property:</b> <i>width</i>

```
<ejs-daterangepicker id="daterangepicker" width="200px"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Readonly
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>readonly</i>

```
<ejs-daterangepicker id="daterangepicker" [readonly]="true"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Show/Hide the clear button
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>showClearButton</i>

```
<ejs-daterangepicker id="daterangepicker" [showClearButton]="false"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Height
</td>
<td>
<b>Property:</b> <i>height</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" height="35px"/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-daterangepicker id="daterangepicker" cssClass="e-custom-style"></ejs-daterangepicker>
```

```css
.e-control-wrapper.e-custom-style.e-date-range-wrapper.e-input-group {
    height: 35px;
}
```

</td>
</tr>
<tr>
<td>
Show/Hide the week number
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>weekNumber</i>

```
<ejs-daterangepicker id="daterangepicker" [weekNumber]="true"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Watermark text
</td>
<td>
<b>Property:</b> <i>watermarkText</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" watermarkText="Select a Range"/>
```

</td>
<td>
<b>Property:</b> <i>placeholder</i>

```
<ejs-daterangepicker id="daterangepicker" placeholder="Select a Range"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Enable/Disable
</td>
<td>
<b>Property:</b> <i>enabled</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" [enabled]="false"/>
```

</td>
<td>
<b>Property:</b> <i>enabled</i>

```
<ejs-daterangepicker id="daterangepicker" [enable]="false"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Disable the DateRangePicker
</td>
<td>
<b>Method:</b> <i>disable()</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (create)="onCreate($event)"/>
```

```
public onCreate(e:any) {
    var daterangeObj = $("#daterangepicker").data("ejDateRangePicker");
    daterangeObj.disable();
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Enable the DateRangePicker
</td>
<td>
<b>Method:</b> <i>enable()</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (create)="onCreate($event)"/>
```

```
public onCreate(e:any) {
    var daterangeObj = $("#daterangepicker").data("ejDateRangePicker");
    daterangeObj.enable();
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Enable/Disable the input textbox editing
</td>
<td>
<b>Property:</b> <i>allowEdit</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" [allowEdit]="false"/>
```

</td>
<td>
<b>Property:</b> <i>allowEdit</i>

```
<ejs-daterangepicker id="daterangepicker" [allowEdit]="false"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Specify the placeholder text behavior
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>floatLabelType</i>

```
<ejs-daterangepicker id="daterangepicker" floatLabelType="Auto"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
zIndex
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>zIndex</i>

```
<ejs-daterangepicker id="daterangepicker" zIndex="2000"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
Separator
</td>
<td>
<b>Property:</b> <i>separator</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" separator="#"/>
```

</td>
<td>
<b>Property:</b> <i>separator</i>

```
<ejs-daterangepicker id="daterangepicker" separator="@"></ejs-daterangepicker>
```

</td>
</tr>
</thead>
</table>

## Globalization

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Locale
</td>
<td>
<b>Property:</b> <i>locale</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" locale="en-Us"/>
```

</td>
<td>
<b>Property:</b> <i>locale</i>

```
<ejs-daterangepicker id="daterangepicker" locale="en"></ejs-daterangepicker>
```

</td>
</tr>
<tr>
<td>
First day of week
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>firstDayOfWeek</i>

```
<ejs-daterangepicker id="daterangepicker" [firstDayOfWeek]="3"></ejs-daterangepicker>
```

</td>
</tr>
</thead>
</table>

## Strict mode

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Strict mode
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>strictMode</i>

```
<ejs-daterangepicker id="daterangepicker" [strictMode]="true"></ejs-daterangepicker>
```

</td>
</tr>
</thead>
</table>

## Open and Close

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Close
</td>
<td>
<b>Event:</b> <i>close</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (close)="onClose($event)"/>
```

```
public onClose(e:any) {/** code block */}
```

</td>
<td>
<b>Event:</b> <i>close</i>

```
<ejs-daterangepicker id="daterangepicker" (close)="onClose($event)"></ejs-daterangepicker>
```

```
public onClose(args:any) {/** code block */}
```

</td>
</tr>
<tr>
<td>
Hide
</td>
<td>
<b>Method:</b> <i>popupHide()</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (create)="onCreate($event)"/>
```

```
public onCreate(e:any) {
    var daterangeObject = $("#daterangepicker").data("ejDateRangePicker");
    daterangeObject.popupShow(); daterangeObject.popupHide();
}
```

</td>
<td>
<b>Method:</b> <i>hide()</i>

```
<ejs-daterangepicker id="daterangepicker" #rangeObj (created)="create($event)"></ejs-daterangepicker>
```

```
@ViewChild("rangeObj") rangeObj: DateRangePickerComponent;
public create(args:any) {
    this.rangeObj.show();
    this.rangeObj.hide();
}
```

</td>
</tr>
<tr>
<td>
Open
</td>
<td>
<b>Event:</b> <i>open</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (open)="onOpen($event)"/>
```

```
public onOpen(e:any) {/** code block */}
```

</td>
<td>
<b>Event:</b> <i>open</i>

```
<ejs-daterangepicker id="daterangepicker" (open)="onOpen($event)"></ejs-daterangepicker>
```

```
public onOpen(args:any) {/** code block */}
```

</td>
</tr>
<tr>
<td>
Show
</td>
<td>
<b>Method:</b> <i>popupShow()</i>

```
<input type="text" ej-daterangepicker id="daterangepicker" (create)="onCreate($event)"/>
```

```
public onCreate(e:any) {
    var daterangeObject = $("#daterangepicker").data("ejDateRangePicker");
    daterangeObject.popupShow();
}
```

</td>
<td>
<b>Method:</b> <i>show()</i>

```
<ejs-daterangepicker id="daterangepicker" #rangeObj (created)="create($event)"></ejs-daterangepicker>
```

```
@ViewChild("rangeObj") rangeObj: DateRangePickerComponent;

public create(args:any) {
    this.rangeObj.show();
}
```

</td>
</tr>
</thead>
</table>
