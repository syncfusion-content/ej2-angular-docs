---
layout: post
title: Ej1 api migration in Angular Button component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Button component

This article describes the API migration process of Button component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Specifies the text of the button | **Property:** *text* <br/><br/> `<button ej-button id="btn" text="Button"></button>` | **Property:** *content* <br/><br/> `<button ejs-button id="btn" content="Button"></button>` |
| Specifies the content type of the button | **Property:** *ContentType* <br/><br/>  `<button ej-button id="btn" text="Save" contentType="TextAndImage" prefixIcon="e-icon e-save"></button>`| Not applicable |
| Specifies icon for the button | **Property:** *prefixIcon* <br/><br/> `<button ej-button id="btn" contentType="ImageOnly" prefixIcon="e-icon e-save"></button>` | **Property:** *iconCss* <br/><br/> `<button ejs-button id="btn" iconCss="e-icons e-save"></button>` |
| Positioning icon in the button | **Property:** *imagePosition* <br/><br/> `<button ej-button id="btn" contentType="TextAndImage" text="Save" prefixIcon="e-icon e-save" imagePosition="ImageRight"></button>`| **Property:** *iconPosition* <br/><br/> `<button ejs-button id="btn" content="Save" iconCss="e-icons e-save" iconPosition="Right"></button>` |
| Specifies secondary icon for the button | **Property:** *suffixIcon* <br/><br/> `<button ej-button id="btn" text="FileSearch" contentType="ImageTextImage" prefixIcon="e-icon e-search" suffixIcon="e-icon e-file-html"></button>` | Not applicable |
| Adding custom class | **Property:** *cssClass* <br/><br/> `<button ej-button id="btn" text="Button" cssClass="custom-class"></button>` | **Property:** *cssClass* <br/><br/> `<button ejs-button id="btn" cssClass="custom-class" content="Button"></button>` |
| Specifies the size of the button | **Property:** *size* <br/><br/> `<button ej-button id="btn" text="Button" size="small"></button>` | **Property:** *cssClass* <br/><br/> `<button ejs-button id="btn" cssClass="e-small" content="Button"></button>` |
| Triggers click event repeatedly while pressing the button | **Property:** *repeatButton* <br/><br/> `<button ej-button id="btn" text="Click" [repeatButton]="true"></button>` | Not applicable |
| Sets time interval between two consecutive click event on the repeat button | **Property:** *timeInterval* <br/><br/> `<button ej-button id="btn" text="Click" [repeatButton]="true" timeInterval="100"></button>` | Not applicable |
| Specifies the type of the button | **Property:** *type* <br/><br/> `<button ej-button id="btn" text="Button" type="Button"></button>` | Not applicable |
| Changes normal button into rounded corner | **Property:** *showRoundedCorner* <br/><br/>  `<button ej-button id="btn" text="Button" [showRoundedCorner]="true"></button>` | Not applicable |
| Specifies the width of the button | **Property:** *width* <br/><br/> `<button ej-button id="btn" text="Button" width="150px"></button>` | Not applicable |
| Specifies the height of the button | **Property:** *height* <br/><br/> `<button ej-button id="btn" text="Button" height="50px"></button>` | Not applicable |
| Adds HTML attributes to the button | **Property:** *htmlAttributes* <br/><br/> `<button ej-button id="btn" text="Button" [htmlAttributes]="attributes"></button>` | Not applicable |
| Allows the appearance of the Button to be enhanced and visually appealing | Not applicable | **Property:** *isPrimary* <br/><br/> `<button ejs-button id="btn" isPrimary="true" content="Button"></button>` |
| Makes the button toggle from normal to active state | **Property:** *isToggle* <br/><br/> Not applicable | **Property:** *isToggle* <br/><br/> `<button ejs-button id="btn" isToggle="true" content="Play"></button>`  |
| Specifies the disabled state of the button | **Property:** *enabled* <br/><br/> `<button ej-button id="btn" text="Button" [enabled]="false"></button>` | **Property:** *disabled* <br/><br/> `<button ejs-button id="btn" [disabled]="true" content="Button"></button>` |
| Enable or disable rendering component in right to left direction | **Property:** *enableRTL* <br/><br/>  `<button ej-button id="btn" contentType="TextAndImage" text="Save" prefixIcon="e-icon e-save" [enableRTL]="true"></button>` | **Property:** *enableRtl* <br/><br/> `<button ejs-button id="btn" [enableRtl]="true" content="Save" iconCss="e-icons e-save"></button>` |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Destroys the control | **Methods:** *destroy* <br/><br/> `<button ej-button #btn id="btn" text="Button"></button>` <br/> @ViewChild('btn') <br/> public btnObj: ButtonComponent; <br/> this.btnObj.destroy(); | **Methods:** *destroy* <br/><br/> `<button ejs-button #btn id="btn" content="Button"></button>` <br/> @ViewChild('btn') <br/> public btnObj: ButtonComponent; <br/> this.btnObj.destroy(); |
| Disables the button | **Methods:** *disable* <br/><br/> `<button ej-button #btn id="btn" text="Button"></button>` <br/> @ViewChild('btn') <br/> public btnObj: ButtonComponent; <br/> this.btnObj.disable(); | Not applicable |
| Enables the button | **Methods:** *enable* <br/><br/> `<button ej-button #btn id="btn" text="Button"></button>` <br/> @ViewChild('btn') <br/> public btnObj: ButtonComponent; <br/> this.btnObj.enable(); | Not applicable |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Triggers while clicking the button | **Events:** *click* <br/><br/> `<button ej-button id="btn" text="Button" (click)="btnClick($event)"></button>` <br/> btnClick(args) {<br/>/** code block */<br/>} | Not applicable |
| Triggers once the component rendering is completed | **Events:** *create* <br/><br/> `<button ej-button id="btn" text="Button" (click)="create($event)"></button>` <br/> create(args) {<br/>/** code block */<br/>} | **Events:** *created* <br/><br/> `<button ejs-button id="btn" content="Button" (created)="created()"></button>`<br/> created() {<br/>/** code block */<br/>} |
| Triggers once the component is destroyed | **Events:** *destroy* <br/><br/> `<button ej-button id="btn" text="Button" (destroy)="destroy($event)"></button>` <br/> destroy(args) {<br/>/** code block */<br/>} | Not applicable |