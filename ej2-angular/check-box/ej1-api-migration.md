---
layout: post
title: Ej1 api migration in Angular Check box component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Check box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Check box component

This article describes the API migration process of Checkbox component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Checkbox label | **Property:** *text* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox"></ej-checkbox>` | **Property:** *label* <br/><br/> `<ejs-checkbox id="checkbox" label="Checkbox"></ejs-checkbox>` |
| Checked state | **Property:** *enableTriState and checkState* <br/><br/> `<ej-checkbox id="checkbox" [enableTriState]="true" text="Checked state" checkState="check"></ej-checkbox>` | **Property:** *checked* <br/><br/> `<ejs-checkbox id="checkbox" [checked]="true" label="Checked state"></ejs-checkbox>` |
| Indeterminate state | **Property:** *enableTriState and checkState* <br/><br/> `<ej-checkbox id="checkbox" text="Indeterminate state" [enableTriState]="true" checkState="indeterminate"></ej-checkbox>` | **Property:** *indeterminate* <br/><br/> `<ejs-checkbox id="indeterminate" [indeterminate]="true" label="Intermediate state"></ejs-checkbox>` |
| Adding custom class | **Property:** *cssClass* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" cssClass="custom-class"></ej-checkbox>` | **Property:** *cssClass* <br/><br/> `<ejs-checkbox id="checkbox" cssClass="custom-class" label="Checkbox"></ejs-checkbox>` |
| Label position | Not applicable | **Property:** *labelPosition* <br/><br/> `<ejs-checkbox id="checkbox" label="Checkbox" labelPosition="Before"></ejs-checkbox>` |
| Disabled state | **Property:** *enabled* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" [enabled]="false"></ej-checkbox>` | **Property:** *disabled* <br/><br/> `<ejs-checkbox id="checkbox" label="Checkbox" disabled="true"></ejs-checkbox>` |
| State persistence | **Property:** *enablePersistence* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" [enablePersistence]="true"></ej-checkbox>` | **Property:** *enablePersistence* <br/><br/> `<ejs-checkbox id="checkbox" label="Checkbox" [enablePersistence]="true"></ejs-checkbox>` |
| RTL | **Property:** *enableRTL* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" [enableRTL]="true"></ej-checkbox>` | **Property:** *enableRtl* <br/><br/> `<ejs-checkbox id="checkbox" label="Checkbox" [enableRtl]="true"></ejs-checkbox>` |
| HTML Attributes | **Property:** *htmlAttributes* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" [htmlAttributes]="attributes"></ej-checkbox>` | Not applicable |
| Id property | **Property:** *id* <br/><br/>`<ej-checkbox id="checkbox" text="sync"></ej-checkbox>` | Not applicable |
| Prefix value of Id | **Property:** *idPrefix* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" idPrefix="ng"/>` | Not applicable |
| Name attribute | **Property:** *name* <br/><br/> `<ej-checkbox id="checkbox" name="conformation"></ej-checkbox>` | **Property:** *name* <br/><br/> `<ejs-checkbox id="checkbox" name="conformation"></ejs-checkbox>` |
| Value attribute | **Property:** *value* <br/><br/> `<ej-checkbox id="checkbox" name="conformation" value="Received"></ej-checkbox>` | **Property:** *value* <br/><br/> `<ejs-checkbox id="checkbox" name="conformation" value="Received"></ejs-checkbox>` |
| Show rounded corner | **Property:** *showRoundedCorner* <br/><br/>`<ej-checkbox id="checkbox" text="Checkbox" [showRoundedCorner]="true"></ej-checkbox>` | Not applicable |
| Size | **Property:** *size* <br/><br/> `<ej-checkbox id="checkbox"  text="Small" size="small"></ej-checkbox>` | **Property:** *cssClass* <br/><br/> `<ejs-checkbox id="checkbox" cssClass="e-small" label="Checkbox"></ejs-checkbox>` |
| Validation rules | **Property:** *validationRules* <br/><br/> `<ej-checkbox id="checkbox" [validationRules]="rules"></ej-checkbox>` | Not applicable |
| Validation message | **Property:** *validationMessage* <br/><br/>  `<ej-checkbox id="checkbox" [validationRules]="rules" [validationMessage]="message"></ej-checkbox>` | Not applicable |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Destroy | **Method:** *destroy* <br/><br/> `<ej-checkbox #checkbox id="checkbox" text="Checkbox"></ej-checkbox>` <br/> @ViewChild('checkbox') <br/> public checkbox: CheckBoxComponent; <br/> this.checkbox.destroy(); | **Method:** *destroy* <br/><br/> `<ejs-checkbox #checkbox id="checkbox" label="Checkbox"></ejs-checkbox>` <br/> @ViewChild('checkbox') <br/> public checkbox: CheckBoxComponent; <br/> this.checkbox.destroy(); |
| Disable the Checkbox | **Method:** *disable* <br/><br/> `<ej-checkbox #checkbox id="checkbox" text="Checkbox"></ej-checkbox>` <br/> @ViewChild('checkbox') <br/> public checkbox: CheckBoxComponent; <br/> this.checkbox.disable(); | Not applicable |
| Enable the Checkbox | **Method:** *enable* <br/><br/> `<ej-checkbox #checkbox id="checkbox" text="Checkbox"></ej-checkbox>` <br/>  @ViewChild('checkbox') <br/> public checkbox: CheckBoxComponent; <br/> this.checkbox.enable(); | Not applicable |
| Check state of the Checkbox | **Method:** *isChecked* <br/><br/> `<ej-checkbox #checkbox id="checkbox" text="Checkbox"></ej-checkbox>` <br/>  @ViewChild('checkbox') <br/> public checkbox: CheckBoxComponent; <br/> this.checkbox.isChecked(); | Not applicable |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| BeforeChange Event | **Events:** *beforeChange* <br/><br/> `ej-checkbox id="checkbox" text="Checkbox" (beforeChange)="beforeChange($event)"></ej-checkbox>`<br/>beforeChange(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | Not applicable |
| Change Event | **Events:** *change* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" (change)="change($event)"></ej-checkbox>`<br/>change(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | **Events:** *change* <br/><br/> `<ejs-checkbox id="checkbox" label="Checkbox" (change)="change($event)"></ejs-checkbox>`<br/>change(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} |
| created Event | **Events:** *create* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" (create)="create($event)"></ej-checkbox>`<br/>create(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | **Events:** *created* <br/><br/> `<ejs-checkbox id="checkbox" label="Checkbox" (created)="created()"></ejs-checkbox>`<br/>function created() {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} |
| Destroy Event | **Events:** *destroy* <br/><br/> `<ej-checkbox id="checkbox" text="Checkbox" (destroy)="destroy($event)"></ej-checkbox>`<br/>destroy(args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | Not applicable |