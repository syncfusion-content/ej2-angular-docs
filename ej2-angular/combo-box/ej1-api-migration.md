---
layout: post
title: Ej1 api migration in Angular Combo box component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Combo box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Combo box component

This article describes the API migration process of ComboBox component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## DataBinding

<!-- markdownlint-disable MD010 -->

| Behavior	| API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** |	**Property**: *dataSource*<br/>`<input id="dropdown1" ej-combobox [dataSource]="data" />`|**Property**: *dataSource*<br/>`<ejs-combobox [dataSource]="dataSource"></ejs-combobox>`|
| **Fields for mapping** | **Property**: *fields*<br/>`<input id="dropdown1" ej-combobox [fields]="fieldsvalues"/>`|**Property**: *fields*<br/>`<ejs-combobox [fields]="fields"></ejs-combobox>` |
|**Query** | **Property**: *query*<br/>`<input id="dropdown1" ej-combobox [query]="query"/>` | **Property**: *query*<br/>`<ejs-combobox [query]="query"></ejs-combobox>` |
| **Begin event** | **Event**:*actionBegin*<br/>`<input id="dropdown1" ej-combobox (actionBegin)="actionBegin($event)"/>` | **Event**: *actionBegin*<br/>`<ejs-combobox (actionBegin)="actionBegin($event)"></ejs-combobox>` |
| **Complete event** | **Event**:*actionComplete*<br/>`<input id="dropdown1" ej-combobox (actionComplete)="actionComplete($event)"/>` | **Event**: *actionComplete*<br/>`<ejs-combobox (actionComplete)="actionComplete($event)"></ejs-combobox>`|
| **Failure event** |**Event**:*actionFailure*<br/>`<input id="dropdown1" ej-combobox (actionFailure)="actionFailure($event)"/>` | **Event**: *actionFailure*<br/>`<ejs-combobox (actionFailure)="actionFailure($event)"></ejs-combobox>` |

## Filtering

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default**| **Property**: *allowFiltering*<br/>`<input id="dropdown1" ej-combobox [allowFiltering]="allowFiltering"/>`  |	**Property**: *allowFiltering*<br/>`<ejs-combobox [allowFiltering]="true"></ejs-combobox>`|
| **No records template** | **Property**: *noRecordsTemplate*<br/>`<input id="dropdown1" ej-combobox [noRecordsTemplate]="noRecordsTemplate"/>` |**Property**: *noRecordsTemplate*<br/>`<ejs-combobox [noRecordsTemplate]="template"></ejs-combobox>` |
| **Ignore casing and diacritics**| **Not Applicable** | **Property**: *ignoreAccent*<br/>`<ejs-combobox [ignoreAccent] = "true"/>` |
| **Custom value addition** | **Property**: *allowCustom*<br/>`<input id="dropdown1" ej-combobox [allowCustom]="allowCustom"/>` | <https://ej2.syncfusion.com/angular/demos/#/material/combo-box/custom-value> |
| **Search event** | **Event**: *filtering*<br/>`<input id="dropdown1" ej-combobox (filtering) = "onFiltering($event)"/>` | **Event**: *filtering*<br/>`<ejs-combobox (filtering) = "onFiltering($event)"/>` |

## Template

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *itemTemplate*<br/>`<input id="dropdown1" ej-combobox [itemTemplate]="itemTemplate"/>` | **Property**: *itemTemplate*<br/>`<ejs-combobox [itemTemplate]="itemTemplate"></ejs-combobox>`|
| **Group Template** | **Property**: *groupTemplate*<br/>`<input id="dropdown1" ej-combobox [groupTemplate]="groupTemplate"/>` | **Property**: *groupTemplate*<br/>`<ejs-combobox [groupTemplate]="groupTemplate"></ejs-combobox>`|
| **ValueTemplate** | **Not Applicable** |**Property**: *valueTemplate*<br/>`<ejs-combobox [valueTemplate] = "valueTemplate"/>` |
| **Header Template** | **Property**: *headerTemplate*<br/>`<input id="dropdown1" ej-combobox [headerTemplate]="headerTemplate"/>` |	**Property**: *headerTemplate*<br/>`<ejs-combobox [headerTemplate]="headerTemplate"></ejs-combobox>` |
| **FooterTemplate**| **Property**: *footerTemplate*<br/>`<input id="dropdown1" ej-combobox [footerTemplate]="footerTemplate"/>`| **Property**: *footerTemplate*<br/>`<ejs-combobox [footerTemplate]="footerTemplate"></ejs-combobox>` |
| **No records Template** |	**Property**: *noRecordsTemplate*<br/>`<input id="dropdown1" ej-combobox [noRecordsTemplate]="noRecordsTemplate"/>`| **Property**: *noRecordsTemplate*<br/>`<ejs-combobox [noRecordsTemplate]="noRecordsTemplate"></ejs-combobox>` |
| **Auto fill** | **Property**: *autoFill*<br/>`<input id="dropdown1" ej-combobox [autoFill]="autoFill"/>`|**Property**: *autoFill*<br/>`<ejs-combobox [autoFill]="true"></ejs-combobox>`|
| **Action failure Template** |	**Property**: *actionFailureTemplate*<br/>`<input id="dropdown1" ej-combobox [actionFailureTemplate]="actionFailureTemplate"/>`|**Property**: *actionFailureTemplate*<br/>`<ejs-combobox [actionFailureTemplate]="actionFailureTemplate"></ejs-combobox>`|

## Applying CSS

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | ---|
| **Default** | **Property**: *cssClass* <br/>`<input id="dropdown1" ej-combobox [cssClass]="cssClass"/>`| **Property**: *cssClass*<br/>`<ejs-combobox [cssClass]="customclass"></ejs-combobox>` |
| **width** | **Property**: *width* <br/>`<input id="dropdown1" ej-combobox [width]="width"/>` | **Property**: *width*<br/>`<ejs-combobox [width]="200px"></ejs-combobox>` |

## Grouping

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2|
| --- | --- | --- |
| **Default** | **Property**: *fields*<br/>`<input id="dropdown1" ej-combobox [fields]="fields"/>`| **Property**: *fields*<br/>`<ejs-combobox [fields]="field"></ejs-combobox>` |

## Accessibility

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2|
| --- | --- | --- |
| **Globalization** | **Property**: *locale*<br/>`<input id="dropdown1" ej-combobox [locale]="locale"/>`| **Property**: *locale*<br/>`<ejs-combobox [locale]="locale"/>` |
| **Rtl support**| **Property**: *enableRtl*<br/>`<input id="dropdown1" ej-combobox [enableRtl]="enableRtl"/>`|**Property**: *enableRtl*<br/>`<ejs-combobox [enableRtl]="true"/>`|

## Placeholder

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2|
| --- | --- | --- |
| **Watermark text** | **Property**: *placeholder*<br/>`<input id="dropdown1" ej-combobox [placeholder]="placeholder"/>`|<br/>**Property**: *placeholder*<br/>`<ejs-combobox [placeholder]="select"/>` |
| **Floating  of watermark text**| **Not applicable** |**Property**: *floatLabelType*<br/>`<ejs-combobox [floatLabelType]="floatLabelType"/>` |

## Miscellaneous

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2|
| --- | --- | --- |
| **Enable/disable** | **Property**: *enabled*<br/>`<input id="dropdown1" ej-combobox [enabled]="enabled"/>`|**Property**: *enabled*<br/>`<ejs-combobox [enabled]="true"/>` |
| **Read only** | **Property**: *readOnly*<br/>`<input id="dropdown1" ej-combobox [readOnly]="readOnly"/>` |**Property**: *readOnly*<br/>`<ejs-combobox [readOnly]="true"/>`|
| **Addition of Html attributes** | **Property**: *htmlAttributes*<br/>`<input id="dropdown1" ej-combobox [htmlAttributes]="htmlAttributes"/>` | **Property**: *htmlAttributes*<br/>`<ejs-combobox [htmlAttributes]="htmlAttributes"/>`|

## Sorting

<!-- markdownlint-disable MD010 -->

|Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Order of sorting** | **Property**: *sortOrder*<br/>`<input id="dropdown1" ej-combobox [sortOrder]="sortOrder"/>` | **Property**: *sortOrder*<br/>`<ejs-combobox [sortOrder]="sortOrder"/>`|

## Selection

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Selecting particular index** | **Property**: *index*<br/>`<input id="dropdown1" ej-combobox [index]="index"/>` | **Property**: *index*<br/>`<ejs-combobox [index]="index"/>` |
| **Selecting particular value** | **Property**: *value*<br/>`<input id="dropdown1" ej-combobox [value]="value"/>`| **Property**: *value*<br/>`<ejs-combobox [value]="data"/>` |
| **Selecting particular text** | **Property**: *text* <br/>`<input id="dropdown1" ej-combobox [text]="text"/>` | **Property**: *text*<br/>`<ejs-combobox [text]="data"/>`|
| **Getting data by using value** |	**Method**: *getItemDataByValue*<br/>`<input id="dropdown1" ej-combobox />` <br/> <br/>$('#dropdown').ejDropDownList('getItemDataByValue',"data") | **Method**: *getDataByValue*<br/>`<ejs-combobox #sample id="combobox"/>`<br/> <br/>`@ViewChild('sample') public cmbObj: ComboBoxComponent;`<br/><br/> cmbObj.getDataByValue("data");
| **Select event** | **Event**: *select*<br/>`<input id="dropdown1" ej-combobox (select)="onSelect($event)"/>`| **Event**: *select*<br/>`<ejs-combobox (select)="onSelect($event)"/>`|

## Popup

<!-- markdownlint-disable MD010 -->

| Behavior| API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Popup height** | **Property**: *popupHeight*<br/>`<input id="dropdown1" ej-combobox [popupHeight]="popupHeight"/>`|**Property**:*popupheight*<br/>`<ejs-combobox [popupHeight]="300px"/>`|
| **Popup width** | **Property**: *popupWidth*<br/>`<input id="dropdown1" ej-combobox [popupWidth]="popupWidth"/>`|**Property**:*popupWidth*<br/>`<ejs-combobox [popupWidth]="300px"/>` |
| **Popup showing manually** | **Method**: *showPopup*<br/>`<input id="dropdown1" ej-combobox />` <br/> <br/>$('#dropdown').ejComboBox("showPopup");|	**Method**: *showPopup*<br/>`<ejs-combobox #sample id="combobox"/>`<br/> <br/>`@ViewChild('sample') public cmbObj: ComboBoxComponent;`<br/><br/>cmbObj.showPopup(); |
| **Popup hiding manually** | **Method**: *hidePopup*<br/>`<input id="dropdown1" ej-combobox />` <br/> <br/>$('#dropdown').ejComboBox("hidePopup"); | **Method**: *hidePopup*<br/>`<ejs-combobox #sample id="combobox"/>`<br/> <br/>`@ViewChild('sample') public cmbObj: ComboBoxComponent;`<br/><br/> cmbObj.hidePopup(); |
| **Popup hide event** | **Event**: *close*<br/>`<input id="dropdown1" ej-combobox (close)="onClose($event)"/>` | **Event**: *close*<br/>`<ejs-combobox (close)="onClose($event)"/>`|
| **Popup shown event** | **Event**: *open*<br/>`<input id="dropdown1" ej-combobox (open)="onopen($event)"/>`| **Event**: *open*<br/>`<ejs-combobox (open)="onopen($event)"/>`|

## Common

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 |API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Adding new item** | **Method** : *addItem*<br/>`<input id="dropdown1" ej-combobox />` <br/> <br/>$('#dropdown').ejComboBox("addItem", { text :"India"});| **Method**: *addItem*<br/>`<ejs-combobox #sample id="combobox"/>`<br/> <br/>`@ViewChild('sample') public cmbObj: ComboBoxComponent;`<br/><br/> cmbObj.addItem({Id: 'id', Game: 'Golf'},2);|
| **Focus out event** | **Not applicable** | **Event**: *blur*<br/>`<ejs-combobox (blur)="onblur($event)"/>` |
| **Focus in event** | **Event**: *focus*<br/>`<input id="dropdown1" ej-combobox (focus)="focus($event)"/>` | **Event**: *focusIn*<br/>`<ejs-combobox (focusIn)="onopen($event)"/>` |
| **Focus out** | **Method**: *focusOut*<br/>`<input id="dropdown1" ej-combobox />` <br/> <br/>$('#dropdown').ejComboBox("focusOut");| **Method**: *focusOut*<br/>`<ejs-combobox #sample id="combobox"/>`<br/> <br/>`@ViewChild('sample') public cmbObj: ComboBoxComponent;`<br/><br/> cmbObj.focusOut(); |
| **Focus in** | **Method**: *focusIn*<br/>`<input id="dropdown1" ej-combobox />` <br/> <br/>$('#dropdown').ejComboBox("focusIn"); | **Method**: *focusIn*<br/>`<ejs-combobox #sample id="combobox"/>`<br/> <br/>`@ViewChild('sample') public cmbObj: ComboBoxComponent;`<br/><br/> cmbObj.focusIn(); |
| **Getting the data** | **Method** : *getItems*<br/>`<input id="dropdown1" ej-combobox />` <br/> <br/>$('#dropdown').ejComboBox("getItems"); | **Method**: *getItems*<br/>`<ejs-combobox #sample id="combobox"/>`<br/> <br/>`@ViewChild('sample') public cmbObj: ComboBoxComponent;`<br/><br/> cmbObj.getItems();|
| **Create event** | **Event**: *create*<br/>`<input id="dropdown1" ej-combobox (create)="create($event)"/>` |	**Event**: *created*<br/>`<ejs-combobox (created)="created($event)"/>` |
| **Change event** | **Event**: *change*<br/>`<input id="dropdown1" ej-combobox (change)="change($event)"/>` | **Event**: *change*<br/>`<ejs-combobox (change)="change($event)"/>` |
| **Custom value event** | **Event**: *customValueSpecifier*<br/>`<input id="dropdown1" ej-combobox (customValueSpecifier)="customValueSpecifier($event)"/>` | **Event**: *customValueSpecifier*<br/>`<ejs-combobox (customValueSpecifier)="customValueSpecifier($event)"/>` |
