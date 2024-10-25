---
layout: post
title: Migration from css TextBox to angular TextBox | Syncfusion
description: Learn here all about Migration from css TextBox to angular TextBox in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Migration from css TextBox to angular TextBox 
documentation: ug
domainurl: ##DomainURL##
---

# Migration from css TextBox to angular TextBox

> From v16.3.21 version, the TextBox is provided as Angular component to achieve the floating label TextBox with minimal code. You can find the available TextBox properties, methods, and events in the [API reference](https://ej2.syncfusion.com/angular/documentation/api/textbox/).

The following table describes the migration from CSS TextBox to Angular TextBox component.

## Normal TextBox

<!-- markdownlint-disable MD038 -->

| **Rendering mode** | **CSS TextBox** | **Angular TextBox component** |
| -----------------------| -----------------------------------| ------------------------------------------- |
| Default rendering |  `<div class='e-input-group'>`<br/>`<input class='e-input' type='text' placeholder='Enter Value'/>`<br/>`</div>` |  `<ejs-textbox id="default" placeholder="Enter Value" floatLabelType="Never"></ejs-textbox>` |
| TextBox with clear button |  `<div class='e-input-group'>`<br/>`<input class='e-input' placeholder='Enter Value' required='true'>`<br/>`<span class='e-clear-icon'></span>`<br/>`</div>`<br/><br/>Note: You have to write action for clear button. |  `<ejs-textbox id="clear-input" placeholder="Enter Value" floatLabelType="Never" [showClearButton]="true"></ejs-textbox>` |
| Validation states |  `<div class='e-input-group e-error'>`<br/>`<input class='e-input' type='text' placeholder='Enter Value' />`<br/>`</div>`<br/><br/>Note: TextBox component consists of three types of validation rules such as success, warning, and error. |  `<ejs-textbox id="validation" placeholder="Enter Value" floatLabelType="Never" cssClass="e-error"></ejs-textbox>` |

## Floating label TextBox

<!-- markdownlint-disable MD038 -->

| **Rendering mode** | **CSS TextBox** | **Angular TextBox component** |
| -----------------------| -----------------------------------| ------------------------------------------- |
| Default rendering |  `<div class='e-float-input'>`<br/>`<input type='text' required />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`</div>` |  `<ejs-textbox id="default" placeholder="Enter Value" floatLabelType="Auto"></ejs-textbox>` |
| TextBox with clear button |  `<div class='e-float-input e-input-group'>`<br/>`<input type='text' required  value= 'Clear Input' />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`<span class='e-clear-icon'></span>`<br/>`</div>`<br/><br/>Note: You have to write action for clear button. |  `<ejs-textbox id="clear-input" placeholder="Enter Value" floatLabelType="Auto" [showClearButton]="true"></ejs-textbox>` |
| Validation states |  `<div class='e-float-input e-error'>`<br/>`<input type='text' required  />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`</div>`<br/><br/> Note: TextBox component consists of three types of validation rules such as success, warning, and error. |  `<ejs-textbox id="validation" placeholder="Enter Value" floatLabelType="Auto" cssClass="e-error"></ejs-textbox>` |