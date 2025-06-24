---
layout: post
title: Ej1 api migration in Angular Split button component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Split button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Split button component

This article describes the API migration process of SplitButton component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Specifies the text of the splitbutton | **Property:** *text* <br/><br/> `<ej-splitbutton id="splitbutton" text="login"></ej-splitbutton>` | **Property:** *content* <br/><br/> `<ejs-splitbutton id="splitbutton" content="Paste"></ejs-splitbutton>` |
| Popup content | **Property:** *target* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target"></ej-splitbutton>` | **Property:** *target* <br/><br/> `<ejs-splitbutton id="splitbutton" target="#target" content="SplitButton"></ejs-splitbutton>` |
| Popup items | Not applicable | **Property:** *items* <br/><br/> `<ejs-splitbutton id="splitbutton" content="Paste" [items]="items"></ejs-splitbutton>` <br/> items: ItemModel[] = [ <br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Cut' <br/> &nbsp; },<br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Copy' <br/> &nbsp; },<br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Paste' <br/> &nbsp; } <br/> ]; |
| Arrow position | **Property:** *arrowPosition* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" target="#target" arrowPosition="Left"></ej-splitbutton>` | Not applicable |
| Button mode | **Property:** *buttonMode* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" target="#target" buttonMode="Dropdown"></ej-splitbutton>` | Not applicable |
| Content type | **Property:** *contentType* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" contentType="TextOnly" target="#target"></ej-splitbutton>` | Not applicable |
| Icons | **Property:** *prefixIcon* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" contentType="TextAndImage" prefixIcon="e-icon e-handup" target="#target"></ej-splitbutton>` | **Property:** *iconCss* <br/><br/> `<ejs-splitbutton id="splitbutton" content="Paste" [items]="items" iconCss="e-icons e-paste"></ejs-splitbutton>` |
| Icon position | **Property:** *imagePosition* <br/><br/>  `<ej-splitbutton id="splitbutton" text="login" contentType="TextAndImage" prefixIcon="e-icon e-handup" target="#target" imagePosition="ImageTop"></ej-splitbutton>` | **Property:** *iconPosition* <br/><br/> `<ejs-splitbutton id="splitbutton" content="Paste" [items]="items" iconCss="e-icons e-paste" iconPosition="Top"></ejs-splitbutton>` |
| Secondary icon | **Property:** *suffixIcon* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" contentType="ImageTextImage" prefixIcon="e-icon e-handup" suffixIcon="e-icon e-palette" target="#target"></ej-splitbutton>` | Not applicable |
| Adding custom class | **Property:** *cssClass* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" cssClass="custom-class"></ej-splitbutton>` | **Property:** *cssClass* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" cssClass="custom-class"></ejs-splitbutton>` |
| Disabled state | **Property:** *enabled* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" target="#target" [enabled]="false"></ej-splitbutton>` | **Property:** *disabled* <br/><br/> `<ejs-splitbutton id="splitbutton" (items)="items" [disabled]="true"></ejs-splitbutton>` |
| RTL | **Property:** *enableRTL* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" target="#target" contentType="TextAndImage" prefixIcon="e-icon e-handup" [enableRTL]="true"></ej-splitbutton>` | **Property:** *enableRtl* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="Paste" [enableRtl]="true" iconCss="e-icons e-paste"></ejs-splitbutton>` |
| Height | **Property:** *height* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" target="#target" height="30px"></ej-splitbutton>` | Not applicable |
| Width | **Property:** *width* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" target="#target" width="100px"></ej-splitbutton>` | Not applicable |
| HTML attributes | **Property:** *htmlAttributes* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" target="#target" [htmlAttributes]="attributes"></ej-splitbutton>` | Not applicable |
| Show rounded corner | **Property:** *showRoundedCorner* <br/><br/> `<ej-splitbutton id="splitbutton" text="login" target="#target" [showRoundedCorner]="true"></ej-splitbutton>` | Not applicable |
| Size | **Property:** *size* <br/><br/> `<ej-splitbutton id="splitbutton" size="small" text="Small" target="#target"></ej-splitbutton>` | **Property:** *cssClass* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="Small" cssClass="e-small"></ejs-splitbutton>` |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Destroy method | **Method:** *destroy* <br/><br/> `<ej-splitbutton #split id="splitbutton" text="SplitButton" target="#target"></ej-splitbutton>`<br/> @ViewChild('split') <br/> public splitButton: SplitButtonComponent; <br/> this.splitButton.destroy(); | **Method:** *destroy* <br/><br/> `<ejs-splitbutton #split id="splitbutton" [items]="items" content="SplitButton"></ejs-splitbutton>`<br/> @ViewChild('split') <br/> public splitButton: SplitButtonComponent; <br/> this.splitButton.destroy(); |
| Disable method | **Method:** *disable* <br/><br/> `<ej-splitbutton #split id="splitbutton" text="SplitButton" target="#target"></ej-splitbutton>`<br/> @ViewChild('split') <br/> public splitButton: SplitButtonComponent; <br/> this.splitButton.disable(); | Not applicable |
| Enable method | **Method:** *enable* <br/><br/> `<ej-splitbutton #split id="splitbutton" text="SplitButton" target="#target"></ej-splitbutton>`<br/> @ViewChild('split') <br/> public splitButton: SplitButtonComponent; <br/> this.splitButton.enable(); | Not applicable |
| Hide popup | **Method:** *hide* <br/><br/> `<ej-splitbutton #split id="splitbutton" text="SplitButton" target="#target"></ej-splitbutton>`<br/> @ViewChild('split') <br/> public splitButton: SplitButtonComponent; <br/> this.splitButton.hide(); | **Method:** *toggle* <br/><br/> `<ejs-splitbutton #split id="splitbutton" [items]="items" content="SplitButton"></ejs-splitbutton>`<br/> @ViewChild('split') <br/> public splitButton: SplitButtonComponent; <br/> this.splitButton.toggle(); |
| Show popup | **Method:** *show* <br/><br/> `<ej-splitbutton #split id="splitbutton" text="SplitButton" target="#target"></ej-splitbutton>`<br/> @ViewChild('split') <br/> public splitButton: SplitButtonComponent; <br/> this.splitButton.show(); | **Method:** *toggle* <br/><br/> `<ejs-splitbutton #split id="splitbutton" [items]="items" content="SplitButton"></ejs-splitbutton>`<br/> @ViewChild('split') <br/> public splitButton: SplitButtonComponent; <br/> this.splitButton.toggle(); |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| BeforeOpen event | **Event:** *beforeOpen* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (beforeOpen)="beforeOpen($event)"></ej-splitbutton>`<br/> beforeOpen(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *beforeOpen* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="SplitButton" (beforeOpen)="beforeOpen($event)"></ejs-splitbutton>`<br/> beforeOpen(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| Click event | **Event:** *click* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (click)="click($event)"></ej-splitbutton>` <br/> click(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *click* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="SplitButton" (click)="click($event)"></ejs-splitbutton>`<br/> click(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| Close event | **Event:** *close* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (close)="close($event)"></ej-splitbutton>` <br/> close(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *close* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="SplitButton" (close)="close($event)"></ejs-splitbutton>`<br/> close(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| Create event | **Event:** *create* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (create)="create($event)"></ej-splitbutton>` <br/> create(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *created* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="SplitButton" (created)="created()"></ejs-splitbutton>`<br/> created() {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>}|
| Destroy event | **Event:** *destroy* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (destroy)="destroy($event)"></ej-splitbutton>` <br/> destroy(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | Not applicable |
| ItemMouseOut event | **Event:** *itemMouseOut* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (itemMouseOut)="itemMouseOut($event)"></ej-splitbutton>` <br/> itemMouseOut(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | Not applicable |
| ItemMouseOver event | **Event:** *itemMouseOver* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (itemMouseOver)="itemMouseOver($event)"></ej-splitbutton>` <br/> itemMouseOver(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | Not applicable |
| Item select event | **Event:** *itemSelected* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (itemSelected)="itemSelected($event)"></ej-splitbutton>` <br/> itemSelected(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *select* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="SplitButton" (select)="select($event)"></ejs-splitbutton>` <br/> select(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| Open event | **Event:** *open* <br/><br/> `<ej-splitbutton id="splitbutton" text="SplitButton" target="#target" (open)="open($event)"></ej-splitbutton>` <br/> open(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *open* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="SplitButton" (open)="open($event)"></ejs-splitbutton>`<br/> open(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| BeforeClose event | Not applicable | **Event:** *beforeClose* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="SplitButton" (beforeClose)="beforeClose($event)"></ejs-splitbutton>`<br/> beforeClose(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| BeforeItemRender event | Not applicable | **Event:** *beforeItemRender* <br/><br/> `<ejs-splitbutton id="splitbutton" [items]="items" content="SplitButton" (beforeItemRender)="beforeItemRender($event)"></ejs-splitbutton>`<br/> beforeItemRender(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |