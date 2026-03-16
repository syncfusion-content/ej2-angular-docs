---
layout: post
title: Ej1 api migration in Angular Numerictextbox component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Numerictextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# EJ1 API migration in Angular NumericTextBox component

This article describes the API migration process for the NumericTextBox component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Common

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| On creation | **Event:** *create*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="120" (create)="onCreate()"/>`<br /><br />**script**<br />`onCreate() {}` | **Event:** *created*<br /><br />`<ejs-numerictextbox value="120" (created)="onCreate()"></ejs-numerictextbox>`<br /><br />**script**<br />`public onCreate(): void {}` |
| Custom CSS class | **Property:** *cssClass*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="120" cssClass="custom"/>` | **Property:** *cssClass*<br /><br />`<ejs-numerictextbox value="120" cssClass="custom"></ejs-numerictextbox>` |
| On destruction | **Event:** *destroy*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="120" (destroy)="onDestroy()"/>`<br /><br />**script**<br />`onDestroy() {}` | **Event:** *destroyed*<br /><br />`<ejs-numerictextbox value="120" (destroyed)="onDestroy()"></ejs-numerictextbox>`<br /><br />**script**<br />`public onDestroy(): void {}` |
| Destroys textbox | **Method** *destroy*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100"/>`<br />`var numericObj = $("#numeric").data("ejNumericTextbox");`<br />`numericObj.destroy();` | **Method:** *destroy*<br /><br />`<ejs-numerictextbox value="100" #numeric></ejs-numerictextbox>`<br />`@ViewChild("numeric") numeric: NumericTextBoxComponent;`<br />`numeric.destroy();` |
| Control state | **Property** *enabled*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" enabled=false/>` | **Property:** *enabled*<br /><br />`<ejs-numerictextbox value="100" enabled=false></ejs-numerictextbox>` |
| Persistence | **Property** *enablePersistence*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" enablePersistence=true/>` | **Property:** *enablePersistence*<br /><br />`<ejs-numerictextbox value="100" enablePersistence=true></ejs-numerictextbox>` |
| Right To Left | **Property** *enableRTL*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" enableRTL=true/>` | **Property:** *enableRtl*<br /><br />`<ejs-numerictextbox value="100" enableRtl=true></ejs-numerictextbox>` |
| On focus | **Event:** *focusIn*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="20" (focusIn)="onFocusIn()"/>`<br /><br />**script**<br />`onFocusIn() {}` | **Event:** *focus*<br /><br />`<ejs-numerictextbox value='12345'(focus) = "onFocus()"></ejs-numerictextbox>`<br/><br />**script**<br/>`public onFocus(): void {}` |
| On blur | **Event:** *focusOut*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" (focusOut)="onFocusOut()"/>`<br /><br />**script**<br />`onFocusOut() {}` | **Event:** *blur*<br /><br />`<ejs-numerictextbox value='12345'(blur) = "onBlur()"></ejs-numerictextbox>`<br/><br />**script**<br/>`public onBlur(): void {}` |
| Sets Height | **Property** *height*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" height="40px"/>` | **Can be achieved using,** <br /><br />`<ejs-numerictextbox value="100" cssClass="custom"></ejs-numerictextbox>`<br />**Css**<br />.e-numerictextbox.custom{<br />height: 40px;<br />} |
| HTML Attributes | **Property** *htmlAttributes*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" [htmlAttributes]= "htmlAttr" />`<br /><br />**script**<br />`constructor() {`<br />`this.htmlAttr = {name: "numerictextbox"};`<br />`}` | **Can be achieved using**<br/>**script**<br />`<ejs-numerictextbox #numeric value="1234" name="numerictextbox"></ejs-numerictextbox>` |
| Name of editor | **Property** *name*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" name="textbox"/>` | **Can be achieved using**<br/>**script**<br />`<ejs-numerictextbox #numeric value="1234" name="numerictextbox"></ejs-numerictextbox>`  |
| Read only | **Property** *readOnly*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="80" readOnly=true/>` | **Property:** *readonly*<br /><br />`<ejs-numerictextbox value="80" readonly=true></ejs-numerictextbox>` |
| Rounded corners | **Property** *showRoundedCorner*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="80" showRoundedCorner=true/>` | **Can be achieved using**<br/>**script**<br />`<ejs-numerictextbox #numeric value="1234" floatLabelType="Always" cssClass="e-style"></ejs-numerictextbox>`<br/>**CSS**<br/>`.e-control-wrapper.e-numeric.e-input-group.e-style {`<br/>`border: 2.5px solid;`<br/>`border-radius: 1rem;`<br/> `padding-left: 12px;` <br/>`}`<br/>`.e-control-wrapper.e-numeric.e-float-input.e-style .e-float-line::before, .e-control-wrapper.e-numeric.e-float-input.e-style  .e-float-line::after{`<br/>`background: none ;`<br/>`}`<br/>`.e-control-wrapper.e-numeric.e-input-group.e-style.e-input-focus{`<br/> `border: solid grey  !important;`<br/>`}` |
| Spin Button | **Property** *showSpinButton*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="20" showSpinButton=false/>` | **Property:** *showSpinButton*<br /><br />`<ejs-numerictextbox value="20" showSpinButton=false></ejs-numerictextbox>` |
| Width | **Property** *width*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="20" width="220px"/>` | **Property:** *width*<br /><br />`<ejs-numerictextbox value="20" width="220px"></ejs-numerictextbox>` |
| Clear Button | Not Applicable | **Property:** *showClearButton*<br /><br />`<ejs-numerictextbox value="100" showClearButton=true></ejs-numerictextbox>` |

## Globalization

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Localization culture | **Property** *locale*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="80" locale="de-DE"/>` | **Property:** *locale*<br /><br />`<ejs-numerictextbox value="80" locale="de-DE"></ejs-numerictextbox>` |

## Group

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Group digits in editor | **Property** *groupSize*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" groupSize="2"/>` | Not Applicable |
| Group Separator | **Property** *groupSeparator*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" groupSeparator="-"/>` | Not Applicable |

## Numeric configuration

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Triggers on value change | **Event** *change*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="120" (change)="onChange()"/>`<br /><br />**script**<br />`onChange() {}`| **Event:** *change*<br /><br />`<ejs-numerictextbox value="120" (change)="onChange()"></ejs-numerictextbox>`<br /><br />**script**<br />`public onChange(): void {}` |
| Sets digits allowed after decimal point | **Property** *decimalPlaces*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" decimalPlaces="2"/>` | **Property:** *decimals*<br /><br />`<ejs-numerictextbox value="80" format="n2" decimals="2"></ejs-numerictextbox>` |
| Decrement value | Not Applicable | **Method:** *decrement*<br /><br />`<ejs-numerictextbox #numeric value="100"></ejs-numerictextbox>`<br />`@ViewChild("numeric") numeric: NumericTextBoxComponent;`<br />`numeric.decrement();` |
| Disable the textbox | **Method** *disable*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="200"/>`<br />`var numericObj = $("#numeric").data("ejNumericTextbox");`<br />`numericObj.disable();` | **Can be achieved using**<br/>**script**<br />`<ejs-numerictextbox #numeric value="1234"></ejs-numerictextbox>`<br />`@ViewChild("numeric") numeric: NumericTextBoxComponent;`<br />`numeric.enabled = false;` |
| Enable the textbox | **Method** *enable*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="200"/>`<br />`var numericObj = $("#numeric").data("ejNumericTextbox");`<br />`numericObj.enable();` | **Can be achieved using**<br/>**script**<br />`<ejs-numerictextbox #numeric value="1234"></ejs-numerictextbox>`<br />`@ViewChild("numeric") numeric: NumericTextBoxComponent;`<br />`numeric.enabled = true;` |
| Gets value of editor | **Method** *getValue*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100"/>`<br />`var numericObj = $("#numeric").data("ejNumericTextbox");`<br />`numericObj.getValue();` | **Method:** *getText*<br /><br />`<ejs-numerictextbox value="100" #numeric></ejs-numerictextbox>`<br />`@ViewChild("numeric") numeric: NumericTextBoxComponent;`<br />`numeric.getText();` |
| Increment value | Not Applicable | **Method:** *increment*<br /><br />`<ejs-numerictextbox #numeric value="80"></ejs-numerictextbox>`<br />`@ViewChild("numeric") numeric: NumericTextBoxComponent;`<br />`numeric.increment();` |
| Step value | **Property** *incrementStep*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" incrementStep="2"/>` | **Property:** *step*<br /><br />`<ejs-numerictextbox value="100" step="2"></ejs-numerictextbox>` |
| Sets Maximum value | **Property** *maxValue*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" maxValue="200"/>` | **Property:** *max*<br /><br />`<ejs-numerictextbox value="100" max="200"></ejs-numerictextbox>` |
| Sets Minimum value | **Property** *minValue*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" minValue="20"/>` | **Property:** *min*<br /><br />`<ejs-numerictextbox value="100" min="20"></ejs-numerictextbox>` |
| Negative pattern for formatting values | **Property** *negativePattern*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="-20" negativePattern: "( n)"/>` | Not Applicable |
| Positive pattern for formatting values | **Property** *positivePattern*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="20" positivePattern: "n kg"/>` | Not Applicable |
| Specifies value | **Property** *value*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" />` | **Property:** *value*<br /><br />`<ejs-numerictextbox value="100"></ejs-numerictextbox>` |
| Displays hint on editor | **Property** *watermarkText*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="80" watermarkText="Enter value" />` | **Property:** *placeholder*<br /><br />`<ejs-numerictextbox value="100" placeholder="Enter value"></ejs-numerictextbox>` |
| Placeholder float type | Not Applicable | **Property:** *floatLabelType*<br /><br />`<ejs-numerictextbox value="200" placeholder="Enter value" floatLabelType="Auto"></ejs-numerictextbox>` |

## Number Formats

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Set Currency symbol | **Property** *currencySymbol*<br /><br />`<input id="currency" type="text" ej-currencytextbox value="100" currencySymbol="EUR">` | **Property:** *currency*<br /><br />`<ejs-numerictextbox value="100" format="c2" currency="EUR"></ejs-numerictextbox>` |
| Number Format | Not Applicable | **Property:** *format*<br /><br />`<ejs-numerictextbox value="200" format="n2"></ejs-numerictextbox>` |

## Validation

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Strict Mode | **Property** *enableStrictMode*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="80" enableStrictMode=true />` | **Property:** *strictMode*<br /><br />`<ejs-numerictextbox value="80" strictMode=true></ejs-numerictextbox>` |
| Validation on typing | **Property** *validateOnType*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="80" validateOnType=true />` | **Property:** *validateDecimalOnType*<br /><br />`<ejs-numerictextbox value="100" validateDecimalOnType=true></ejs-numerictextbox>` |
| Validation Message | **Property** *validationMessage*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" />`<br /><br />**script**<br />`constructor() {`<br />`this.validationRules = {required: true};`<br />`this.validationMessage = {required: "Required value"}`<br />`}` | **Can be achieved using Form Validator**<br/>`<form #formElement class="form-horizontal">`<br/>`<ejs-numerictextbox #numeric="" id="numeric" (created)="onCreate($event)" (change)= "onChange($event)"></ejs-numerictextbox>`<br/>`</form>`<br/>`let options: FormValidatorModel = {`<br/> `rules: {`<br/>`'numericRange': { required: [true, "Number is required"] },`<br/>`},`<br/>`customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {`<br/>`inputElement.parentNode.parentNode.parentNode.appendChild(errorElement);`<br/>`}`<br/>`};`<br/>`this.formObject = new FormValidator(this.element.nativeElement, options);`<br/>`public onCreate(){`<br/>`document.getElementById("numeric").setAttribute("name", "numericRange");`<br/>`}`|
| Validation Rules | **Property** *validationRules*<br /><br />`<input id="numeric" type="text" ej-numerictextbox value="100" />`<br />`constructor() {`<br /><br />**script**<br />`this.validationRules = {required: true};`<br />`}` | **Can be achieved using Form Validator**<br/>`<form #formElement class="form-horizontal">`<br/>`<ejs-numerictextbox #numeric="" id="numeric" (created)="onCreate($event)" (change)= "onChange($event)"></ejs-numerictextbox>`<br/>`</form>`<br/>`let options: FormValidatorModel = {`<br/> `rules: {`<br/>`'numericRange': { required: [true] },`<br/>`},`<br/>`customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {`<br/>`inputElement.parentNode.parentNode.parentNode.appendChild(errorElement);`<br/>`}`<br/>`};`<br/>`this.formObject = new FormValidator(this.element.nativeElement, options);`<br/>`public onCreate(){`<br/>`document.getElementById("numeric").setAttribute("name", "numericRange");`<br/>`}`|
