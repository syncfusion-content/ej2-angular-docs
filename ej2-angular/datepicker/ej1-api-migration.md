---
layout: post
title: Ej1 api migration in Angular Datepicker component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Datepicker component

This article describes the API migration process of DatePicker component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

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
<input type="text" ej-datepicker id="datepicker" value="5/5/2019"/>
```

</td>
<td>
<b>Property:</b> <i>value</i>

```
<ejs-datepicker id="datepicker" value='5/5/2019'></ejs-datepicker>
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
<input type="text" ej-datepicker id="datepicker" dateFormat='yyyy/MM/dd'/>
```

</td>
<td>
<b>Property:</b> <i>format</i>

```
<ejs-datepicker id="datepicker" format="yyyy-MM-dd"></ejs-datepicker>
```

</td>
</tr>
<tr>
<td>
Day header format
</td>
<td>
<b>Property:</b> <i>dayHeaderFormat</i>

```
<input type="text" ej-datepicker id="datepicker" dayHeaderFormat="long"/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
</thead>
</table>

## Calendar Views

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
Start view
</td>
<td>
<b>Property:</b> <i>startLevel</i>

```
<input type="text" ej-datepicker id="datepicker" startLevel="year"/>
```

</td>
<td>
<b>Property:</b> <i>start</i>

```
<ejs-datepicker id="datepicker" start="Decade"></ejs-datepicker>
```

</td>
</tr>
<tr>
<td>
Depth view
</td>
<td>
<b>Property:</b> <i>depthLevel</i>

```
<input type="text" ej-datepicker id="datepicker" depthLevel="year"/>
```

</td>
<td>
<b>Property:</b> <i>depth</i>

```
<ejs-datepicker id="datepicker" depth="Year"></ejs-datepicker>
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
<input type="text" ej-datepicker id="datepicker" minDate="5/5/2019"/>
```

</td>
<td>
<b>Property:</b> <i>min</i>

```
<ejs-datepicker id="datepicker" min="6/6/2019"></ejs-datepicker>
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
<input type="text" ej-datepicker id="datepicker" maxDate="5/5/2019"/>
```

</td>
<td>
<b>Property:</b> <i>max</i>

```
<ejs-datepicker id="datepicker" max="6/6/2019"></ejs-datepicker>
```

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
Block-out dates
</td>
<td>
<b>Property:</b> <i>blackoutDates</i>

```
<input type="text" ej-datepicker id="datepicker" [blackoutDates]='blackoutDates'/>
```

```
blackoutDates : Object = [new Date(2016, 4, 10), new Date(2016, 4, 15), new Date(2016, 4, 20), new Date(2016, 4, 22), new Date(2016, 5, 12), new Date(2016, 5, 24)]
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" (renderDayCell)="disableDate($event)"></ejs-datepicker>
```

```
public disableDate(args) {
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
<input type="text" ej-datepicker id="datepicker" cssClass="gradient-lime"/>
```

</td>
<td>
<b>Property:</b> <i>cssClass</i>

```
<ejs-datepicker id="datepicker"  cssClass='gradient-lime'></ejs-datepicker>
```

</td>
</tr>
<tr>
<td>
Event callback for each cell creation
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>renderDayCell</i>

```
<ejs-datepicker id="datepicker" (renderDayCell)="onRenderCell($event)"></ejs-datepicker>
```

```
public onRenderCell(args:any) {/** code block */}
```

</td>
</tr>
<tr>
<td>
Show/Hide the today button
</td>
<td>
<b>Property:</b> <i>showFooter</i>

```
<input type="text" ej-datepicker id="datepicker" [showFooter]="false"/>
```

</td>
<td>
<b>Property:</b> <i>showTodayButton</i>

```
<ejs-datepicker id="datepicker" [showTodayButton]="false"></ejs-datepicker>
```

</td>
</tr>
<tr>
<td>
Show/Hide the other month dates
</td>
<td>
<b>Property:</b> <i>showOtherMonths</i>

```
<input type="text" ej-datepicker id="datepicker" [showOtherMonths]="false"/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker"></ejs-datepicker>
```

```css

.e-datepicker .e-calendar .e-content tr.e-month-hide, .e-datepicker .e-calendar .e-content td.e-other-month > .e-day {
        visibility: none;
   }

.e-datepicker .e-calendar .e-content td.e-month-hide, .e-datepicker .e-calendar .e-content td.e-other-month {
        pointer-events: none;
        touch-action: none;
}
```

</td>
</tr>
<tr>
<td>
Show/Hide the disabled date
</td>
<td>
<b>Property:</b> <i>showDisabledRange</i>

```
<input type="text" ej-datepicker id="datepicker" [showDisabledRange]="false" [blackoutDates]='blackoutDates'/>
```

```
blackoutDates : Object = [new Date(2016, 4, 10), new Date(2016, 4, 15), new Date(2016, 4, 20), new Date(2016, 4, 22), new Date(2016, 5, 12), new Date(2016, 5, 24)]
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Show/Hide the popup button
</td>
<td>
<b>Property:</b> <i>showPopupButton</i>

```
<input type="text" ej-datepicker id="datepicker" [showPopupButton]="false"/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" #dateObj (focus)="onFocus($event)"></ejs-datepicker>
```

```
@ViewChild("dateObj") dateObj: DatePickerComponent;

public onFocus(args:any) {
    this.dateObj.show();
}
```

```css
.e-control-wrapper .e-input-group-icon.e-date-icon {
    display: none;
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
<input type="text" ej-datepicker id="datepicker" [showRoundedCorner]="true"/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" #dateObj cssClass='e-customStyle'></ejs-datepicker>
```

```css
.e-control-wrapper.e-customStyle.e-date-wrapper.e-input-group {
    border-radius: 4px;
}
```

</td>
</tr>
<tr>
<td>
Skip a month
</td>
<td>
<b>Property:</b> <i>stepMonths</i>

```
<input type="text" ej-datepicker id="datepicker" [stepMonths]="3"/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" #dateObj value='5/5/2019' (open)="onOpen($event)"></ejs-datepicker>
```

```
@ViewChild("dateObj") dateObj: DatePickerComponent;
public onOpen(args:any){
    this.dateObj.navigateTo('Year', new Date("03/18/2028"));
}
```

</td>
</tr>
<tr>
<td>
Show/Hide the tooltip
</td>
<td>
<b>Property:</b> <i>showTooltip</i>

```
<input type="text" ej-datepicker id="datepicker" [showTooltip]="false"/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Today button text
</td>
<td>
<b>Property:</b> <i>buttonText</i>

```
<input type="text" ej-datepicker id="datepicker" buttonText="Now"/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" locale='de'></ejs-datepicker>
```

```
L10n.load({
    'de': {
        'datepicker': { placeholder: 'Wählen Sie ein Datum aus',
        `today: 'heute' }
    }
});
```

</td>
</tr>
<tr>
<td>
Display inline
</td>
<td>
<b>Property:</b> <i>displayInline</i>

```
<input type="text" ej-datepicker id="datepicker" [displayInline]='true'/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Enable/Disable  the animation
</td>
<td>
<b>Property:</b> <i>enableAnimation</i>

```
<input type="text" ej-datepicker id="datepicker" [enableAnimation]='false'/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Highlight dates
</td>
<td>
<b>Property:</b> <i>highlightSection</i>

```
<input type="text" ej-datepicker id="datepicker" highlightSection='month'/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" (renderDayCell)='highlightDate($event)'></ejs-datepicker>
```

```
public highlightDate(args:any) {
    if (args.date.getDate() === 10) {
        args.element.classList.add('e-highlightweekend');
    }
}
```

```css
.e-highlightweekend {
    background-color: #cfe9f3;
}
```

</td>
</tr>
<tr>
<td>
Highlight weekend
</td>
<td>
<b>Property:</b> <i>highlightWeekend</i>

```
<input type="text" ej-datepicker id="datepicker" [highlightWeekend]='true'/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" (renderDayCell)='highlightDate($event)'></ejs-datepicker>
```

```

public highlightDate(args:any) {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.element.classList.add('e-highlightweekend');
    }
}
```

```css
.e-highlightweekend {
    background-color: #cfe9f3;
}
```

</td>
</tr>
<tr>
<td>
Tooltip format
</td>
<td>
<b>Property:</b> <i>tooltipFormat</i>

```
<input type="text" ej-datepicker id="datepicker" tooltipFormat='dd/MM/yyyy'/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Special dates
</td>
<td>
<b>Property:</b> <i>specialDates</i>

```
<input type="text" ej-datepicker id="datepicker" [specialDates]='specialdate'/>
```

```
specialdate: Object = [ { date: new Date(), tooltip: "In Australia" }]
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" (renderDayCell)='customDates($event)' value='5/5/2017'></ejs-datepicker>
```

```
public customDates(args:any) {
     let span: HTMLElement;
    if (args.date.getDate() === 10) {
        span = document.createElement('span');
        span.setAttribute('class', 'e-icons highlight');
        args.element.firstElementChild.setAttribute('title', 'Birthday !');
        args.element.setAttribute('title', 'Birthday !');
        args.element.setAttribute('data-val', 'Birthday !');
        args.element.appendChild(span);
    }
}
```

</td>
</tr>
<tr>
<td>
FocusIn event
</td>
<td>
<b>Event:</b> <i>focusIn</i>

```
<input type="text" ej-datepicker id="datepicker" (focusIn)='onFocus($event)'/>
```

```
public onFocus(e:any) {
    /** code block */
}
```

</td>
<td>
<b>Event:</b> <i>focus</i>

```
<ejs-datepicker id="datepicker" (focus)='onFocus($event)'></ejs-datepicker>
```

```
public onFocus(args:any) {
    /** code block */  
}
```

</td>
</tr>
<tr>
<td>
FocusOut event
</td>
<td>
<b>Event:</b> <i>focusOut</i>

```
<input type="text" ej-datepicker id="datepicker" (focusOut)='onFocus($event)'/>
```

```
public onFocus(e:any) {
    /** code block */
}
```

</td>
<td>
<b>Event:</b> <i>blur</i>

```
<ejs-datepicker id="datepicker" (blur)='onBlur($event)'></ejs-datepicker>
```

```
public onBlur(args:any) {
    /** code block */  
}
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
<ejs-datepicker id="datepicker" #dateObj (created)='create($event)'></ejs-datepicker>
```

```
@ViewChild("dateObj") dateObj : DatePickerComponent;
public create(args:any){
    this.dateObj.focusIn();
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
<ejs-datepicker id="datepicker" #dateObj (created)='create($event)'></ejs-datepicker>
```

```
@ViewChild("dateObj") dateObj : DatePickerComponent;
public create(args:any){
    this.dateObj.focusIn();
    this.dateObj.focusOut();
}
```

</td>
</tr>
<tr>
<td>
Prevent popup close
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>Close</i>

```
<ejs-datepicker id="datepicker"  (close)='onClose($event)'></ejs-datepicker>
```

```
public onClose(args) {
    /*Triggers when the popup gets close*/
    args.cancel = true;
}
```

</td>
</tr>
<tr>
<td>
Prevent popup open
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>Open</i>

```
<ejs-datepicker id="datepicker" (open)='onOpen($event)'></ejs-datepicker>
```

```
public onOpen(args:any) {
    /*Triggers when the popup gets close*/
    args.cancel = true;
}
```

</td>
</tr>
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
<b>Property:</b> <i>enableRTL</i>

```
<input type="text" ej-datepicker id="datepicker" [enableRTL]='true'/>
```

</td>
<td>
<b>Property:</b> <i>enableRtl</i>

```
<ejs-datepicker id="datepicker" [enableRtl]='true'></ejs-datepicker>
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
<input type="text" ej-datepicker id="datepicker" [enablePersistence]='true'/>
```

</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```
<ejs-datepicker id="datepicker" [enablePersistence]='true'></ejs-datepicker>
```

</td>
</tr>
</thead>
</table>

## Validation

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
Validation rules
</td>
<td>
<b>Property:</b> <i>validationRules</i>

```
<input type="text" ej-datepicker id="timePicker"  [validationRules]="validationRules"/>
```

```
validationRules:Object;
constructor(){
    this.validationRules = {required:true};
}
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" floatLabelType='Always'></ejs-datepicker>
```

```
let options: FormValidatorModel = {
    rules: {
        'datepicker': { required: [true, "Value is required"] } }};
        this.formObject = new FormValidator('#form-element', options);
```

</td>
</tr>
<tr>
<td>
Validation message
</td>
<td>
<b>Property:</b> <i>validationMessage</i>

```
<input type="text" ej-datepicker id="timePicker"  [validationRules]="validationRules" [validationMessage]="validationMessage"/>
```

```
validationRules:Object;
validationMessage:Object;
constructor(){
    this.validationMessage = {required: "Required Date value"};
    this.validationRules = {required:true};
}
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker #datepicker id="datepicker" floatLabelType='Always'></ejs-datepicker>
```

```
let options: FormValidatorModel = {
    rules: {
        'datepicker': {
                    required: [true, "Value is required"]
                }
            },
            customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                inputElement.parentElement.parentElement.appendChild(errorElement);
            }
        };
this.formObject = new FormValidator('#form-element', options);
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
<input type="text" ej-datepicker id="datepicker" width='300px'/>
```

</td>
<td>
<b>Property:</b> <i>width</i>

```
<ejs-datepicker id="datepicker" width='300px'></ejs-datepicker>
```

</td>
</tr>
<tr>
<td>
Readonly
</td>
<td>
<b>Property:</b> <i>readonly</i>

```
<input type="text" ej-datepicker id="datepicker" [readOnly]='true'/>
```

</td>
<td>
<b>Property:</b> <i>readonly</i>

```
<ejs-datepicker id="datepicker" [readonly]='true'></ejs-datepicker>
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
<ejs-datepicker id="datepicker" [showClearButton]='false'></ejs-datepicker>
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
<input type="text" ej-datepicker id="datepicker" height='50px'/>
```

</td>
<td>
<b>Can be achieved by</b>

```
<ejs-datepicker id="datepicker" cssClass='e-custom-style'></ejs-datepicker>
```

```css
.e-control-wrapper.e-custom-style.e-date-wrapper.e-input-group {
    height: 35px;
}
```

</td>
</tr>
<tr>
<td>
Html attributes
</td>
<td>
<b>Property:</b> <i>HtmlAttributes</i>

```
<input type="text" ej-datepicker id="datepicker" [htmlAttributes] = 'htmlAttributes'/>
```

```
htmlAttributes : Object = {required:"required"}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Enable/Disable the week number
</td>
<td>
<b>Property:</b> <i>weekNumber</i>

```
<input type="text" ej-datepicker id="datepicker" [weekNumber] = 'true'/>
```

</td>
<td>
<b>Property:</b> <i>weekNumber</i>

```
<ejs-datepicker id="datepicker" [weekNumber]='true'></ejs-datepicker>
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
<input type="text" ej-datepicker id="datepicker" watermarkText= 'Enter a date'/>
```

</td>
<td>
<b>Property:</b> <i>placeholder</i>

```
<ejs-datepicker id="datepicker" placeholder='Enter Date'></ejs-datepicker>
```

</td>
</tr>
<tr>
<td>
Disable/Enable
</td>
<td>
<b>Property:</b> <i>enabled</i>

```
<input type="text" ej-datepicker id="datepicker" [enabled]= 'false'/>
```

</td>
<td>
<b>Property:</b> <i>enabled</i>

```
<ejs-datepicker id="datepicker" [enabled]='false'></ejs-datepicker>
```

</td>
</tr>
<tr>
<td>
Disable the DatePicker
</td>
<td>
<b>Method:</b> <i>disable()</i>

```
<input type="text" ej-datepicker id="datepicker" (create)= 'onCreate($event)'/>
```

```
public onCreate(e:any) {
    var dateObject = $("#datepicker").data("ejDatePicker");
    dateObject.disable();
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Enable the DatePicker
</td>
<td>
<b>Method:</b> <i>enable()</i>

```
<input type="text" ej-datepicker id="datepicker" (create)= 'onCreate($event)'/>
```

```
public onCreate(e:any) {
    var dateObject = $("#datepicker").data("ejDatePicker");
    dateObject.enable();
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Enable/Disable the textBox editing
</td>
<td>
<b>Property:</b> <i>AllowEdit</i>

```
<input type="text" ej-datepicker id="datepicker" [allowEdit]= 'true'/>
```

</td>
<td>
<b>Property:</b> <i>AllowEdit</i>

```
<ejs-datepicker id="datepicker" [allowEdit]='false'></ejs-datepicker>
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
<ejs-datepicker id="datepicker" zIndex="2000"></ejs-datepicker>
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
<ejs-datepicker id="datepicker" placeholder='Enter date' floatLabelType='Auto'></ejs-datepicker>
```

</td>
</tr>
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
<b>Property:</b> <i>Locale</i>

```
<input type="text" ej-datepicker id="datepicker" locale="en-US"/>
```

</td>
<td>
<b>Property:</b> <i>locale</i>

```
<ejs-datepicker id="datepicker" locale='en'></ejs-datepicker>
```

</td>
</tr>
<tr>
<td>
First day of week
</td>
<td>
<b>Property:</b> <i>startDay</i>

```
<input type="text" ej-datepicker id="datepicker" [startDay]="4"/>
```

</td>
<td>
<b>Property:</b> <i>firstDayOfWeek</i>

```
<ejs-datepicker id="datepicker" [firstDayOfWeek]='5'></ejs-datepicker>
```

</td>
</tr>
</thead>
</table>

## Strict Mode

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
<b>Property:</b> <i>enableStrictMode</i>

```
<input type="text" ej-datepicker id="datepicker" [enableStrictMode]="true"/>
```

</td>
<td>
<b>Property:</b> <i>strictMode</i>

```
<ejs-datepicker id="datepicker" min="5/5/2019" max="6/6/2019" value="7/7/2019" [strictMode]='true'></ejs-datepicker>
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
<b>Event:</b> <i>Close</i>

```
<input type="text" ej-datepicker id="datepicker" (close)="onClose($event)"/>
```

```
public onClose(e:any) { /** code block */ }
```

</td>
<td>
<b>Event:</b> <i>Close</i>

```
<ejs-datepicker id="datepicker" (close)="onClose($event")></ejs-datepicker>
```

```
public onClose(args:any) { /** code block */ }
```

</td>
</tr>
<tr>
<td>
Hide
</td>
<td>
<b>Method:</b> <i>hide()</i>

```
<input type="text" ej-datepicker id="datepicker" (create)="onCreate($event")/>
```

```
public onCreate(e:any) {
    var dateObject = $("#datepicker").data("ejDatePicker");
    dateObject.show();
    dateObject.hide();
}
```

</td>
<td>
<b>Method:</b> <i>hide()</i>

```
<ejs-datepicker id="datepicker" #dateObj (created)="onCreate($event")></ejs-datepicker>
```

```
@ViewChild("dateObj") dateObj: DatePickerComponent;
public onCreate(args:any){
    this.dateObj.show();
    this.dateObj.hide();
}
```

</td>
</tr>
<tr>
<td>
Open
</td>
<td>
<b>Event:</b> <i>Open</i>

```
<input type="text" ej-datepicker id="datepicker" (open)="onOpen($event)"/>
```

```
public onOpen(e:any) { /** code block */ }
```

</td>
<td>
<b>Event:</b> <i>Open</i>

```
<ejs-datepicker id="datepicker" (open)="onOpen($event")></ejs-datepicker>
```

```
public onOpen(args:any) { /** code block */ }
```

</td>
</tr>
<tr>
<td>
Show
</td>
<td>
<b>Method:</b> <i>show()</i>

```
<input type="text" ej-datepicker id="datepicker" (create)="onCreate($event")/>
```

```
public onCreate(e:any) {
    var dateObject = $("#datepicker").data("ejDatePicker");
    dateObject.show();
}
```

</td>
<td>
<b>Method:</b> <i>show()</i>

```
<ejs-datepicker id="datepicker" #dateObj (created)="onCreate($event")></ejs-datepicker>
```

```
@ViewChild("dateObj") dateObj: DatePickerComponent;
public onCreate(args:any){
    this.dateObj.show();
}
```

</td>
</tr>
</thead>
</table>

## View Navigation

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
Navigate to specific month
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>navigateTo()</i>

```
<ejs-datepicker id="datepicker" #dateObj value='5/5/2019' (open)="onOpen($event)"></ejs-datepicker>
```

```
@ViewChild("dateObj") dateObj: DatePickerComponent;
public onOpen(args:any){
    this.dateObj.navigateTo('Year', new Date("03/18/2028"));
}
```

</td>
</tr>
<tr>
<td>
Navigation callback
</td>
<td>
<b>Event:</b> <i>Navigate</i>

```
<input type="text" ej-datepicker id="datepicker" (navigate)="onNavigate($event")/>
```

```
public onNavigate(e:any) {/** code block */ }
```

</td>
<td>
<b>Event:</b> <i>Navigated</i>

```
<ejs-datepicker id="datepicker" (navigated)="onNavigated($event)"></ejs-datepicker>
```

```
public onNavigated(args:any) {/** code block */ }
```

</td>
</tr>
<tr>
<td>
Enable/Disable the drill down
</td>
<td>
<b>Property:</b> <i>allowDirllDown</i>

```
<input type="text" ej-datepicker id="datepicker" [allowDirllDown]="true")/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
</thead>
</table>