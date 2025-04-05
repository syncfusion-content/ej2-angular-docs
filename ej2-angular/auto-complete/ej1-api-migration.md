---
layout: post
title: Ej1 api migration in Angular Auto complete component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Auto complete component

This article describes the API migration process of  AutoComplete component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.
> MultiSelect concept is not present in EJ2-AutoComplete.  If you want to use multiselection support in autocomplete, we suggest you to use MultiSelect component.

## DataBinding

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *dataSource* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [dataSource]="states" />`| **Property:** *datasource*<br/>`<ejs-autocomplete [datasource]="data"></ejs-autocomplete>`|
| **Fields for mapping** | **Property:** *fields*<br/>`<input type="text" id="databindinglocal" ej-autocomplete [fields]="fields" />`| **Property:** *fields*<br/>`<ejs-autocomplete id="country" [fields]="fields"></ejs-autocomplete>` |
| **Query** | **Property**: *query*<br/>`<input type="text" id="databindinglocal" ej-autocomplete [query]="query"/>`| **Property**: *query*<br/>`<ejs-autocomplete id="autocomplete" [query]="ej.Query().from('Customers').take(10)"></ejs-autocomplete>`|
| **Begin event** | **Event**: *actionBegin*<br/>`<input type="text" id="databindinglocal" ej-autocomplete (actionBegin)="actionBegin($event)"/>`|**Event**: *actionBegin*<br/> `<ejs-autocomplete id="autocomplete" (actionBegin)="onBegin($event)"></ejs-autocomplete>`|
| **Complete event** | **Event**: *actionComplete*<br/>`<input type="text" id="databindinglocal" ej-autocomplete (actionComplete)="actionComplete($event)"/>`|**Event**: *actionComplete* <br/> `<ejs-autocomplete id="autocomplete" (actionComplete)="onComplete($event)"></ejs-autocomplete>` |
| **Failure event** | **Event**: *actionFailure*<br/>`<input type="text" id="databindinglocal" ej-autocomplete (actionFailure)="actionFailure($event)"/>` |**Event**: *actionFailure* <br/> `<ejs-autocomplete id="autocomplete" (actionFailure)="onFailure($event)"></ejs-autocomplete>`|
| **Success event** | **Event**: *actionSuccess* <br/>`<input type="text" id="databindinglocal" ej-autocomplete (actionSuccess)="actionSuccess($event)"/>` |**Not Applicable** |

## Filtering

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Case sensitivity** | **Property**: *caseSensitiveSearch*<br/>`<input type="text" id="databindinglocal" ej-autocomplete [caseSensitiveSearch]="true" />`|**Property:** *ignoreCase*<br/>`<ejs-autocomplete id="autocomplete" [ignoreCase]="ignoreCase"></ejs-autocomplete>`|
| **Accent effective search** | **Not applicable** | **Property** : *ignoreAccent* <br/>`ejs-autocomplete id="autocomplete" [ignoreAccent]="ignoreAccent"></ejs-autocomplete>`|
| **Filtering Type** | **Property:** *filterType*<br/>`<input type="text" id="databindinglocal" ej-autocomplete [filterType]="filterType" />`| **Property**: *filterType*<br/>`<ejs-autocomplete id="autocomplete" [filterType]="filterType"></ejs-autocomplete>` |
| **Autofill** | **Property:** *enableAutoFill*<br/>`<input type="text" id="databindinglocal" ej-autocomplete [enableAutoFill]="enableAutoFill" />` | **Property:** *autoFill* <br/>`ejs-autocomplete id="autocomplete" [autoFill]="autoFill"></ejs-autocomplete>`|
| **Highlight the search word** | **Property**: *highlightSearch* `<input type="text" id="databindinglocal" ej-autocomplete [highlightSearch]="highlightSearch" />`|**Property:** *highlight* <br/>`ejs-autocomplete id="autocomplete" [highlight]="highlight"></ejs-autocomplete>` |
| **No of items to be shown** | **Property:** *itemsCount*<br/>`<input type="text" id="databindinglocal" ej-autocomplete [itemsCount]="itemsCount" />` |**Property:** *suggestionCount*<br/>`<ejs-autocomplete id="autocomplete" [suggestionCount]="suggestionCount"></ejs-autocomplete>` |
| **Minimum characters to enter** | **Property:** *minCharacter*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [minCharacter]="minCharacter" />` |**Property:** *minLength* <br/>`ejs-autocomplete id="autocomplete" [minLength]="minLength"></ejs-autocomplete>` |
| **Search** | **Method:** *search* <br/>`<input type="text" id="databindinglocal" ej-autocomplete />`<br/><br/>`$("#autocomplete").ejAutoComplete("search");` | **Not applicable** |

## Placeholder

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Watermark text** | **Property:** *watermarkText* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [watermarkText]="select" />`| **Property:** *placeholder* <br/>`ejs-autocomplete id="autocomplete" [placeholder]="select"></ejs-autocomplete>`|
| **Floating  of watermark text** | **Not applicable**   | **Property:** *floatLabelType* <br/>`ejs-autocomplete id="autocomplete" [floatLabelType]="floatLabelType"></ejs-autocomplete>`|

## Popup

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **No records showing** | **Property:** *showEmptyResultText* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [showEmptyResultText]="true" />` | **Not applicable** |
| **Popupbutton** | **Property:** *showPopupButton*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [showPopupButton]="true" />` | **Property:** *showPopupButton*<br/> `<ejs-autocomplete id="autocomplete" [showPopupButton]="true"></ejs-autocomplete>`|
| **Clear button** | **Property:** *showResetIcon* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [showResetIcon]="true" />` | **Property:** *showClearButton* <br/>`<ejs-autocomplete id="autocomplete" [showClearButton]="true"></ejs-autocomplete>` |
| **Animation** | **Property:** *animateType* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [animateType]="animateType" />` | **Not Applicable** |
| **Focusing the list item** | **Property:** *autoFocus*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [autoFocus]="true" />` |**Not applicable** |
| **Delaying the popup open time** | **Property:** *delaySuggestionTimeout*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [delaySuggestionTimeout]="delaySuggestionTimeout" />` | **Not applicable** |
| **Popup text when there is no popup items** | **Property:** *emptyResultText*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [emptyResultText]="no records" />`  |<https://ej2.syncfusion.com/angular/demos/#/material/auto-complete/template> |
| **Enable/disable the duplicate option** | **Property:** *enableDistinct*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [enableDistinct]="true" />` |**Not applicable**  |
| **Popup height** | **Property:** *popupHeight*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [popupHeight]="popupHeight" />` |**Property:** *popupHeight* <br/> `<ejs-autocomplete id="autocomplete" [popupHeight]="300px"></ejs-autocomplete>` |
| **Popup Width** | **Property:** *popupWidth*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [popupWidth]="popupWidth" />` |**Property:** *popupWidth* <br/> `<ej-autocomplete id="autocomplete" [popupWidth]="300px"></ej-autocomplete>`|
| **Open popup** | **Method:** *open*<br/> `<input type="text" id="databindinglocal" ej-autocomplete />`<br/>`$("#autocomplete").ejAutoComplete("open");` | **Method:** *showPopup*<br/> `<ej-autocomplete id="autocomplete"></ej-autocomplete>`<br/><br/>`@ViewChild('sample') public obj: AutoCompleteComponent;`<br/>`obj.open();`|
| **Close event** | **Event:** *close*<br/> `<input type="text" id="databindinglocal" ej-autocomplete (close)="close($event)" />` | **Event**: *close* <br/> `<ej-autocomplete id="autocomplete" (close)="onClose($event)"></ej-autocomplete>`|
| **Open event** | **Event:** *open*<br/> `<input type="text" id="databindinglocal" ej-autocomplete (open)="open($event)" />`| **Event:** *open* <br/> `<ej-autocomplete id="autocomplete" (open)="onOpen($event)"></ej-autocomplete>`|

## CSS

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *cssClass* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [cssClass]="cssClass" />` | **Property:** *cssClass* <br/> `<ej-autocomplete id="autocomplete" [cssClass]="customClass"></ej-autocomplete>`|
| **Height** | **Property:** *height* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [height]="height" />`| **Acheivable through the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#cssclass) property.** |
| **showRoundedCorner**   | **Property:** *showRoundedCorner* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [showRoundedCorner]="showRoundedCorner" />` | **Acheivable through the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#cssclass) property.**|
| **Width** | **Property:** *width* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [width]="width" />`| **Property:** *width* <br/> `<ej-autocomplete id="autocomplete" [width]="300px"></ej-autocomplete>`|
| **Visibility** | **Property:** *visible* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [visible]="true" />` | **Acheivable through the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#cssclass) property.** |

## Grouping

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *fields*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [fields]="fields" />`  |**Property:** *fields* <br/>`<ejs-autocomplete id="country" [fields]="fields"></ejs-autocomplete>`|

## Localization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *locale* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [locale]="fr-FE" />`| **Property:** *locale* <br/>`<ejs-autocomplete id="country" [locale]="locale"></ejs-autocomplete>`|

## Template

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *template* `<input type="text" id="databindinglocal" ej-autocomplete [template]="template" />`|**Property:** *itemTemplate*<br/> `<ejs-autocomplete id="employees" [itemTemplate]="itemTemplate">></ejs-autocomplete>` |
| **Group Template** | **Not Applicable**  | **Property:** *groupTemplate* <br/>`<ejs-autocomplete id="employees" [groupTemplate]="groupTemplate"></ejs-autocomplete>`|
| **ValueTemplate** | **Not applicable** | **Property:** *valueTemplate* <br/>`<ejs-autocomplete id="employees" valueTemplate="data"></ejs-autocomplete>`|
| **Header Template** | **Not applicable** | **Property:** *headerTemplate* <br/> `<ejs-autocomplete id="employees" [headerTemplate]="headerTemplate"></ejs-autocomplete>`|
| **FooterTemplate** | **Not applicable** | **Property:** *footerTemplate* <br/>`<ejs-autocomplete id="employees" [footerTemplate]="footerTemplate"></ejs-autocomplete>`|
| **No records Template** | **Not applicable** | **Property:** *noRecordsTemplate* <br/>`<ejs-autocomplete id="employees" [noRecordsTemplate]="noRecordsTemplate"></ejs-autocomplete>`|
| **Action failure Template** | **Not applicable** | **Property:** *actionFailureTemplate* <br/>`<ejs-autocomplete id="employees" [actionFailureTemplate]="actionFailureTemplate"></ejs-autocomplete>`|

## Sorting

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *allowSorting* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [allowSorting]="true" />` | **Acheivable through the [sortOrder](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#sortorder) property.** |
| **Order of sorting** | **Property:** *sortOrder* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [sortOrder]="sortOrder" />`|**Property:** *sortOrder*<br/> `<ejs-autocomplete id="country" [sortOrder]="sortOrder"></ejs-autocomplete>`|

## Accessibility

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **RTL support** | **Property:** *enableRtl* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [enableRtl]="true" />` | **Property:** *enableRtl* <br/>`<ejs-autocomplete id="country" [enableRtl]="true"></ejs-autocomplete>`|

## Selection

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------ | ----------- |
|**Selecting particular value**| **Property**: *selectValueByKey* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [selectValueByKey]="selectValueByKey" />`|**Acheivable through the [value](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#value) property.**  | **Property**: *value*<br/>`<input type="text" id="databindinglocal" ej-autocomplete [value]="value" />` | **Property:** *value*<br/> `<ejs-autocomplete id="country" [value]="data"></ejs-autocomplete>`|
| **Selecting particular text** | **Property:** *text*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [text]="text" />` | **Not applicable** |
| **Selecting particular value** |**Method:** *selectValueByKey*<br/>`<input type="text" id="databindinglocal" ej-autocomplete />`<br/>`@ViewChild('sample') public obj: AutoCompleteComponent;`<br/> `obj.selectValueByKey("key")`| **Acheivable through the [value](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#value) property.**  |
| **Selecting particular text** |**Method:** *selectValueByText* <br/> `<input type="text" id="databindinglocal" ej-autocomplete />`<br/>`@ViewChild('sample') public obj: AutoCompleteComponent;`<br/> `obj.selectValueByText("key")`|**Not applicable** |
| **Select event** |**Event**: *select*<br/>`<input type="text" id="databindinglocal" ej-autocomplete (select)="select($event)" />` | **Event:** *select* <br/> `<ejs-autocomplete id="country" (select)="select($event)"></ejs-autocomplete>`|

## Miscellaneous

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Enable/disable** | **Property:** *enabled*<br/>`<input type="text" id="databindinglocal" ej-autocomplete [enabled]="true" />` | **Property:** *enabled* <br/>`<ejs-autocomplete id="country" [enabled]="true"></ejs-autocomplete>`|
| **Enable persistence** | **Property:** *enablePersistence*<br/> `<input type="text" id="databindinglocal" ej-autocomplete [enablePersistence]="true" />`  | **Property:** *enablePersistence* <br/> `<ejs-autocomplete id="country" [enablePersistence]="true"></ejs-autocomplete>`|
| **Loading icon** | **Property:** *showLoadingIcon* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [showLoadingIcon]="true" />` | **By default,it is showing** |
| **Read only** | **Property:** *readOnly* <br/> `<input type="text" id="databindinglocal" ej-autocomplete [readOnly]="true" />` | **Property:** *readOnly*  `<ej-autocomplete id="autocomplete" [readOnly]="true"></ej-autocomplete>`  |
| **Disable** | **Method:** *disable*<br/> `<input type="text" id="databindinglocal" ej-autocomplete />`<br/>`@ViewChild('sample') public obj: AutoCompleteComponent;`<br/>`obj.disable();` | **Acheivable through the [enabled](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#enabled) property.**  |

## Common

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Addition of new option watermark text** | **Property:** *addNewText* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [addNewText]="addNewText" />` | **Not applicable** |
| **Addition of new item** | **Property:**  *allowAddNew* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [allowAddNew]="allowAddNew" />`  | **Property:** *allowCustom*<br/> `<ej-autocomplete id="autocomplete" [allowCustom]="true"></ej-autocomplete>`|
| **Reset the autocomplete** | **Property:** *showResetIcon* <br/>`<input type="text" id="databindinglocal" ej-autocomplete [showResetIcon]="showResetIcon" />`|**Property:** *showClearIcon* <br/>`<ejs-autocomplete id="country" [showClearIcon]="true"></ejs-autocomplete>` |
| **Destroy** | **Method:** *destroy*<br/> `<input type="text" id="autocomplete" ej-autocomplete />`<br/>`$("#autocomplete").ejAutoComplete("destroy");`| **Method:** *destroy* <br/>`<ejs-autocomplete id="country"></ejs-autocomplete>`<br/> <br/>`@ViewChild('sample') public autoObj: AutoCompleteComponent;`<br/><br/>`autoObj.destroy();`|
| **Reset the autocomplete** | **Method:** *clearText*<br/> `<input type="text" id="databindinglocal" ej-autocomplete />`<br/>`@ViewChild('sample') public obj: AutoCompleteComponent;`<br/>`obj.clearText();`  | `<ej-autocomplete id="autocomplete" [value]=""></ej-autocomplete>`  |
| **Multicolumn** | **Property:** *multiColumnSettings*<br/> `<ej-autocomplete id="autocomplete" datasource="ViewBag.datasource"><e-multicolumnsettings enable="true" show-header="true" string-format="{0} ({1})" search-column-indices="@val.SearchColumnIndices"><e-multi-columns><e-multi-column field="UniqueKey" header-text="Unique Key"></e-multi-column><e-multi-column field="Text" header-text="Text"></e-multi-column></e-multi-columns></e-multicolumnsettings></ej-autocomplete>` |**Not applicable** |
| **Hide the Autocomplete** | **Method:** *hide*<br/> `<input type="text" id="databindinglocal" ej-autocomplete />`<br/>`@ViewChild('sample') public obj: AutoCompleteComponent;`<br/>`obj.hide();` | **Acheivable through the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#cssclass) property.**
| **Getting particular text** | **Method:** *getActiveText* <br/> `<input type="text" id="databindinglocal" ej-autocomplete />`<br/>`@ViewChild('sample') public obj: AutoCompleteComponent;`<br/>`obj.getActiveText();`|**Not applicable** |
| **Getting particular value** | **Method:** *getValue*<br/> `<input type="text" id="databindinglocal" ej-autocomplete />`<br/>`@ViewChild('sample') public obj: AutoCompleteComponent;`<br/>obj.getValue();` |**Acheivable through the [value](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#value) property.** |
| **Change event** | **Event:** *change*<br/>`<input type="text" id="databindinglocal" ej-autocomplete (change)="change($event)" />`|**Event:** *change* <br/>`<ejs-autocomplete id="country" (change)="onChange($event)"></ejs-autocomplete>`|
| **Create event** | **Event:** *create* <br/>`<input type="text" id="databindinglocal" ej-autocomplete (create)="create($event)" />`|**Event:** *created* <br/>`<ejs-autocomplete id="country" (created)="onCreated($event)"></ejs-autocomplete>`|
| **Destroy event** | **Event:** *destroy* <br/>`<input type="text" id="databindinglocal" ej-autocomplete (destroy)="destroy($event)" />` |**Event:** *destroyed* <br/>`<ejs-autocomplete id="country" (destroyed)="onDestroy($event)"></ejs-autocomplete>`|
| **Focus out event** | **Event**: *focusOut*<br/>`<input type="text" id="databindinglocal" ej-autocomplete (focusOut)="focusOut($event)" />`| **Event:** *blur* <br/>`<ejs-autocomplete id="country" (blur)="onChange($event)"></ejs-autocomplete>` |
| **Focus in event** | **Event** : *focusIn*<br/>`<input type="text" id="databindinglocal" ej-autocomplete (focusIn)="focusIn($event)" />` | **Event:** *focus* <br/>`<ejs-autocomplete id="country" (focus)="onFocus($event)"></ejs-autocomplete>` |
