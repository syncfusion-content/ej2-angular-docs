---
layout: post
title: Ej1 api migration in Angular Radio button component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Radio button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Radio button component

This article describes the API migration process of RadioButton component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Label | **Property:** *text* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" />` | **Property:** *label* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton"></ejs-radiobutton>` |
| Checked state | **Property:** *checked* <br/><br/> `<input type="radio" ej-radiobutton id="radio" text="RadioButton" [checked]="true" />` | **Property:** *checked* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton" [checked]="true"></ejs-radiobutton>` |
| Adding custom css class | **Property:** *cssClass* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" cssClass="custom-class" />` | **Property:** *cssClass* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton" cssClass="custom-class"></ejs-radiobutton>` |
| Disabled state | **Property:** *enabled* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" [enabled]="false" />` | **Property:** *disabled* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton" [disabled]="true"></ejs-radiobutton>` |
| State persistence | **Property:** *enablePersistence* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" [enablePersistence]="true" />` | **Property:** *enablePersistence* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton" [enablePersistence]="true"></ejs-radiobutton>` |
| RTL | **Property:** *enableRTL* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" [enableRTL]="true" />` | **Property:** *enableRtl* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton" [enableRtl]="true"></ejs-radiobutton>` |
| HTML Attributes | **Property:** *htmlAttributes* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" [htmlAttributes]="attributes" />` | Not applicable |
| Id property | **Property:** *id* <br/><br/>`<input type="radio" ej-radiobutton  id="sync" />` | Not applicable |
| Prefix value of Id | **Property:** *idPrefix* <br/><br/> `<input type="radio" ej-radiobutton  idPrefix="ng" />` | Not applicable |
| Name attribute | **Property:** *name* <br/><br/> `<input type="radio" ej-radiobutton id="radio"  name="gender" [checked]="true" text="Male" />` | **Property:** *name* <br/><br/> `<ejs-radiobutton id="radio" name="gender" [checked]="true" label="Male"></ejs-radiobutton>` |
| Value attribute | **Property:** *value* <br/><br/> `<input type="radio" ej-radiobutton id="radio"  name="gender" [checked]="true"  value="male" text="Male" />` | **Property:** *value* <br/><br/> `<ejs-radiobutton id="radio" name="gender" [checked]="true"  value="male" label="Male"></ejs-radiobutton>` |
| Size | **Property:** *size* <br/><br/> `<input type="radio" ej-radiobutton id="radio" size="small" text="RadioButton" />` | **Property:** *cssClass* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton" cssClass="e-small"></ejs-radiobutton>` |
| Validation rules | **Property:** *validationRules* <br/><br/> `<input type="radio" ej-radiobutton id="radio" text="RadioButton" [validationRules]="rules" />` | Not applicable |
| Validation message | **Property:** *validationMessage* <br/><br/> `<input type="radio" ej-radiobutton id="radio" text="RadioButton" [validationRules]="rules" [validationMessage]="message" />` | Not applicable |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Destroy | **Method:** *destroy* <br/><br/> `<input #radio type="radio" ej-radiobutton  id="radio" text="RadioButton" />` <br/> @ViewChild('radio') <br/> public radioButton: RadioButtonComponent; <br/> this.radioButton.destroy(); | **Method:** *destroy* <br/><br/> `<ejs-radiobutton #radio id="radio" label="RadioButton"></ejs-radiobutton>` <br/>  @ViewChild('radio') <br/> public radioButton: RadioButtonComponent; <br/> this.radioButton.destroy(); |
| Disable the RadioButton | **Method:** *disable* <br/><br/> `<input #radio type="radio" ej-radiobutton  id="radio" text="RadioButton" />` <br/>  @ViewChild('radio') <br/> public radioButton: RadioButtonComponent; <br/> this.radioButton.disable(); | Not applicable |
| Enable the RadioButton | **Method:** *enable* <br/><br/> `<input #radio type="radio" ej-radiobutton  id="radio" text="RadioButton" />` <br/>  @ViewChild('radio') <br/> public radioButton: RadioButtonComponent; <br/> this.radioButton.enable(); | Not applicable |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| BeforeChange Event | **Event:** *beforeChange* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" (beforeChange)="beforeChange($event)" />` <br/>beforeChange(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | Not applicable |
| Change Event | **Event:** *change* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" (change)="change($event)" />` <br/>change(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | **Event:** *change* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton" (change)="change($event)"></ejs-radiobutton>` <br/> change(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} |
| Create Event | **Event:** *create* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" (create)="create($event)" />` <br/> create(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | **Event:** *created* <br/><br/> `<ejs-radiobutton id="radio" label="RadioButton" (created)="created()"></ejs-radiobutton>` <br/> created() {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} |
| Destroy Event | **Event:** *destroy* <br/><br/> `<input type="radio" ej-radiobutton  id="radio" text="RadioButton" (destroy)="destroy($event)" />` <br/> destroy(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | Not applicable |