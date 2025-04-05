---
layout: post
title: Ej1 api migration in Angular Drop down list component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Drop down list component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Drop down list component

This article describes the API migration process of  DropDownList component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## DataBinding

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *dataSource* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [dataSource]="empList">` | **Property**: *dataSource* <br/>`<ejs-dropdownlist  id="state" [dataSource]="stateData"></ejs-dropdownlist>`|
| **Fields for mapping** | **Property**: *fields* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [fields]="fieldsvalues">`| **Property**: *fields* <br/>`<ejs-dropdownlist  id="state" [fields]="stateFields"></ejs-dropdownlist>`|
| **Query** | **Property**: *query* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [query]="query">`| **Property**: *Query*<br/>`<ejs-dropdownlist  id="state" [query]='query'></ejs-dropdownlist>`|
| **Begin event** | **Event** :*actionBegin* <br/>`<input type="text" id="dropdown1" ej-dropdownlist (actionBegin)="begin($event)">` | **Event** : *actionBegin* <br/>`<ejs-dropdownlist  id="state" (actionBegin)="begin($event)"></ejs-dropdownlist>`|
| **Complete event** | **Event**: *actionComplete* <br/>`<input type="text" id="dropdown1" ej-dropdownlist (actionComplete)="empList($event)">` | **Event**: *actionComplete* <br/>`<ejs-dropdownlist  id="state" (actionComplete)="complete($event)"></ejs-dropdownlist>`|
| **Failure event** | **Event**: *actionFailure* <br/>`<input type="text" id="dropdown1" ej-dropdownlist (actionFailure)="empList($event)">`| **Event**: *actionFailure* <br/>`<ejs-dropdownlist  id="state" (actionFailure)="failure($event)"></ejs-dropdownlist>`|
| **Success event**| **Event**: *actionSuccess* <br/>`<input type="text" id="dropdown1" ej-dropdownlist (actionSuccess)="success($event)">`| **Not Applicable** |
| **Data binding event** | **Event**: *dataBound* <br/> `<input type="text" id="dropdown1" ej-dropdownlist (dataBound)="databinding($event)">`| **Event**: *dataBind* <br/>`<ejs-dropdownlist  id="state" (dataBind)="dataBind($event)"></ejs-dropdownlist>`|

## Filtering

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** |	**Property**: *enableFilterSearch* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableFilterSearch]="enableFilterSearch">`| **Property**: *allowFiltering* <br/>`<ejs-dropdownlist  id="state" [allowFiltering]="allowFiltering"></ejs-dropdownlist>` |
| **Server filtering** | **Property**: *enableServerFiltering* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableServerFiltering]="enableServerFiltering">`| **Property**: *allowFiltering* <br/>`<ejs-dropdownlist  id="state" [allowFiltering]="allowFiltering"></ejs-dropdownlist>` |
| **Filter type** | **Property**: *filterType* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [filterType]="filtertype">` |<https://ej2.syncfusion.com/angular/demos/#/material/drop-down-list/filtering> |
| **No Records Template** |	**Not Applicable** | **Property**: *noRecordsTemplate* <br/> `<ejs-dropdownlist  id="state" [noRecordsTemplate]="noRecordsTemplate"></ejs-dropdownlist>` |
| **Filter Bar watermark text** | **Not Applicable** | **Property**: *filterBarPlaceholder* <br/>`<ejs-dropdownlist  id="state" [filterBarPlaceholder]="filterBarPlace"></ejs-dropdownlist>` |
| **Ignore casing and diacritics** | **Not Applicable** |**Property**: *ignoreAccent*<br/>`<ejs-dropdownlist  id="state" [ignoreAccent]="ignoreAccent"></ejs-dropdownlist>` |
| **Incremental search**| **Property**: *enableIncrementalSearch*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableIncrementatSearch]="enableIncrementalSearch">` | **By default it is true** |
| **Case sensitivity** | **Property**: *caseSensitiveSearch*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [caseSensitiveSearch]="caseSensitiveSearch">` | <https://ej2.syncfusion.com/angular/demos/#/material/drop-down-list/filtering> |
| **Search event** | **Event**: *search* <br/>`<input type="text" id="dropdown1" ej-dropdownlist (search)="search($event)">` | **Event**: *filtering* <br/>`<ejs-dropdownlist  id="state" (filtering)="filtering($event)"></ejs-dropdownlist>` |

## Template

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *template* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [template]="template">` |**Property**: *itemTemplate*<br/>`<ejs-dropdownlist  id="state" [itemTemplate]="itemTemplate"></ejs-dropdownlist>`|
| **Group Template** | **Not Applicable** | **Property**: *groupTemplate* <br/>`<ejs-dropdownlist  id="state" [groupTemplate]="groupTemplate"></ejs-dropdownlist>`|
| **ValueTemplate** | **Not Applicable** | **Property**: *valueTemplate* <br/>`<ejs-dropdownlist  id="state" [valueTemplate]="valueTemplate"></ejs-dropdownlist>`|
| **Header Template** | **Property**: *headerTemplate* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [headerTemplate]="headertemplate">`| **Property**: *headerTemplate* <br/>`<ejs-dropdownlist  id="state" [headerTemplate]="headerTemplate"></ejs-dropdownlist>`|
| **FooterTemplate** | **Not applicable** |	**Property**: *footerTemplate* <br/>`<ejs-dropdownlist  id="state" [footerTemplate]="footerTemplate"></ejs-dropdownlist>`|
| **No records Template** | **Not applicable** | **Property**: *noRecordsTemplate* <br/>`<ejs-dropdownlist  id="state" [noRecordsTemplate]="noRecordsTemplate"></ejs-dropdownlist>`|
| **Action failure Template** | **Not applicable** | **Property**: *actionFailureTemplate* <br/>`<ejs-dropdownlist  id="state" [actionFailureTemplate]="actionFailureTemplate"></ejs-dropdownlist>`|

## Virtual Scrolling

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** |	**Property**: *allowVirtualScrolling* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [allowVirtualScrolling]="caseSensitiveSearch">` | **Not applicable** |

## Applying CSS

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *cssClass* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [cssClass]="customClass">` | **Property**: *cssClass* <br/>`<ejs-dropdownlist  id="state" [cssClass]="cssClass"></ejs-dropdownlist>`|
| **showRoundedCorner** | **Property**: *showRoundedCorner* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [showRoundedCorner]="showRoundedCorner">` | **Property**: *cssClass* <br/>`<ejs-dropdownlist  id="state" [cssClass]="cssClass"></ejs-dropdownlist>`|

## Sorting

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** |	**Property**: *enableSorting* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableSorting]="enableSorting">` | **Enabled only on using sortorder **Property**** |
| **Order of sorting** | **Property**: *sortOrder* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [sortOrder]="sortOrder">` | **Property**: *sortOrder* <br/>`<ejs-dropdownlist  id="state" [sortOrder]="sortOrder"></ejs-dropdownlist>`|

## Popup

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--- | --- | --- |
| **Popup height** | **Property**: *popupHeight* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [popupHeight]="popupHeight">`| **Property**: popupHeight <br/>`<ejs-dropdownlist  id="state" [floatLabelType]="floatLabelType"></ejs-dropdownlist>`|
| **Popup width** |	**Property**: *popupWidth* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [popupWidth]="popupWidth">` | **Property**: *popupWidth* <br/>`<ejs-dropdownlist  id="state" [floatLabelType]="floatLabelType"></ejs-dropdownlist>`|
| **Popup show on load** |	**Property**: *showPopupOnLoad* <br/> `<input type="text" id="dropdown1" ej-dropdownlist [showPopupOnLoad]="showPopupOnLoad">`|	**By default, the data load on demand.** |
| **enableAnimation** |	**Property**: *enableAnimation* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableAnimation]="enableAnimation">`| **Not applicable** |
| **Popup resizing** | **Property**: *enablePopupResize* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enablePopupResize]="enablePopupResize">`| **Not applicable** |
| **Maximum Popup height** | **Property**: *maxPopupHeight* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [maxPopupHeight]="maxPopupHeight">`| **Not applicable** |
| **Minimum Popup height** | **Property**: *minPopupHeight*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [minPopupHeight]="minPopupHeight">`<br/>}); | **Not applicable** |
| **Maximum Popup width** | **Property**: *maxPopupWidth* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [maxPopupWidth]="maxPopupWidth">`| **Not applicable** |
| **Minimum Popup width** |	**Property**: *minPopupWidth* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [minPopupWidth]="minPopupWidth">` | **Not applicable** |
| **Loading data** | **Property**: *loadOnDemand* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [loadOnDemand]="loadOnDemand">` | **By default, it is true** |
| **Popup showing manually** | **Method**: *showPopup* <br/>`<input type="text" id="dropdown1" ej-dropdownlist>`<br/><br/>`$('#dropdown1').ejDropDownList('showPopup')` | **Method**: *showPopup* <br/>`<ejs-dropdownlist  id="state" #sample></ejs-dropdownlist>`<br/><br/>`@ViewChild('sample')   public ddlObj: DropDownListComponent;`<br/><br/>`ddlObj.showPopup();`|
| **Popup hiding manually** |**Method**: *hidePopup* <br/>`<input type="text" id="dropdown1" ej-dropdownlist>`<br/><br/>`$('#dropdown1').ejDropDownList('hidePopup')` | **Method**: *hidePopup*<br/>`<ejs-dropdownlist  id="state" #sample></ejs-dropdownlist>`<br/><br/>`@ViewChild('sample')   public ddlObj: DropDownListComponent;`<br/><br/>`ddlObj.hidePopup();`|
| **Before Popup hide event** | **Event**: *beforePopupHide* <br/>`<input type="text" id="dropdown1" ej-dropdownlist (beforePopupHide)="beforePopupHide($event)">`| **Not applicable** |
| **Before Popup shown event** | **Event**: *beforePopupShown*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (beforePopupShown)="beforePopupShown($event)">`| **Event**: *beforeOpen* <br/>`<input type="text" id="dropdown1" ej-dropdownlist (beforeOpen)="beforeOpen($event)">`|
| **Popup hide event** | **Event**: *popupHide*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (popupHide)="popupHide($event)">`|**Event**: *close* <br/>`<input type="text" id="dropdown1" ej-dropdownlist (close)="close($event)">` |
| **Popup resize event** | **Event**: *popupResize*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [popupResize]="popupResize($event)">`|	**Not applicable** |
| **Popup resize start event**| **Event**: *popupResizeStart*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (popupResizeStart)="popupResizeStart($event)">`|	**Not applicable** |
| **Popup resize stop event** | **Event**: *popupResizeStop*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (popupResizeStop)="popupResizeStop($event)">`| **Not applicable** |
| **Popup shown event** | **Event**: *popupShown*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (popupShown)="popupShown($event)">`| **Event**: *open*<br/> `<input type="text" id="dropdown1" ej-dropdownlist (open)="open($event)">`|

## Placeholder

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Watermark text** | **Property**: *watermarkText* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [watermarkText]="watermarkText">`| **Property**: *placeholder* <br/>`<ejs-dropdownlist  id="state" [placeholder]="placeholder"></ejs-dropdownlist>`|
| **Floating  of watermark text** | **Not applicable** |	**Property**: *floatLabelType* <br/>`<ejs-dropdownlist  id="state" [floatLabelType]="floatLabelType"></ejs-dropdownlist>`|

## Grouping

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *fields.groupBy* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [fields]="fields">`|**Property**: *fields.groupBy*<br/>`@Html.EJS().DropDownList("games").Fields(new DropDownListFieldSettings { GroupBy = "Game" }).Render()`|
| **Group Template**| **Not applicable** | **Property**: *groupTemplate*<br/>`<ejs-dropdownlist  id="state" [groupTemplate]="groupTemplate"></ejs-dropdownlist>` |

## Accessibility

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Globalization** | **Property**: *locale*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [locale]="locale">`| **Property**: *locale*<br/>`<ejs-dropdownlist  id="state" [locale]="locale"></ejs-dropdownlist>` |
| **Rtl support** |	**Property**: *enableRtl*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableRtl]="enableRtl">` | **Property**: *enableRtl*<br/>`<ejs-dropdownlist  id="state" [enableRtl]="enableRtl"></ejs-dropdownlist>` |

## Miscellaneous

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Enable/disable** | **Property**: *enabled*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [enabled]="enabled">` | **Property**: *enabled* <br/>`<ejs-dropdownlist  id="state" [enabled]="enabled"></ejs-dropdownlist>` |
| Read only | **Property**: *readOnly* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [readOnly]="readOnly">` | <br/>**Property**: *readOnly*<br/>`<ejs-dropdownlist  id="state" [readOnly]="readOnly"></ejs-dropdownlist>` |
| Persistence of data | **Property**: *enablePersistence*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [enablePersistence]="enablePersistence">` |**Property**: *enablePersistence*<br/>`<ejs-dropdownlist  id="state" [enablePersistence]="enablePersistence"></ejs-dropdownlist>` |
| **Disable** |	**Method**: *disable*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/> <br/>`$('#dropdown1').ejDropDownList('disable')`|**Property**: *enabled*<br/>`<ejs-dropdownlist  id="state" [enabled]="enabled"></ejs-dropdownlist>`|
| **Enable** | **Method**: *enable*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/> <br/>`$('#dropdown').ejDropDownList('enable')`| **Property**: *enabled*<br/>`<ejs-dropdownlist  id="state" [enabled]="enabled"></ejs-dropdownlist>`|
| **Height** | **Property**: *height* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [height]="height">`| **Property**: *height* <br/>`<ejs-dropdownlist  id="state" [height]="height"></ejs-dropdownlist>`|
| **Width** |	**Property**: *width* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [width]="width">` | **Property**: *width* <br/>`<ejs-dropdownlist  id="state" [width]="width"></ejs-dropdownlist>`|

## Selection

<!-- markdownlint-disable MD010 -->

| Behavior	| API in Essential<sup style="font-size:70%">&reg;</sup> JS 1	| API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--- | --- | --- |
| Selecting particular index | **Property**: *selectedIndex*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [selectedIndex]="selectedIndex">` | **Property**: *index*<br/>`<ejs-dropdownlist  id="state" [index]="index"></ejs-dropdownlist>` |
| **Selecting particular value** | **Property**: *value*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [value]="value">` | **Property**: *value*<br/>`<ejs-dropdownlist  id="state" [value]="text"></ejs-dropdownlist>`|
| **Selecting particular text** | **Property**: *text* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [text]="text">`|**Property**: *text*<br/>`<ejs-dropdownlist  id="state" [text]="text"></ejs-dropdownlist>` |
| **Target id** | **Property**: *targetId* <br/>`<input type="text" id="dropdown1" ej-dropdownlist [targetId]="targetid">` | **Not applicable** |
| **Selecting item using text**	| **Method**: *selectItemByText* <br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/> <br/>`$('#dropdown1').ejDropDownList('selectItemByText','car')` |	**Not applicable** |
| **Unselect item using text** | **Method**: *unselectItemByText*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/> <br/>`$('#dropdown1').ejDropDownList('unselectItemByText','car')`| **Not applicable** |
| **Selecting item using value**| **Method**: *selectItemByValue*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/> <br/>`$('#dropdown').ejDropDownList('selectItemByValue','car')` | **Not applicable** |
| **Getting data by using value** |	**Method**: *getItemDataByValue*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/><br/>`$('#dropdown').ejDropDownList('unselectItemByValue','car')` | **Method**: *getDataByValue*<br/>`<ejs-dropdownlist #sample id="state" ></ejs-dropdownlist>`<br/><br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`ddlObj.getItemDataByValue("data");`|
| **Get selected value** | **Method**: *getSelectedItem*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/> <br/>`$('#dropdown').ejDropDownList('getSelectedItem')` |**Not applicable** |
| **Get selected text** | **Method**: *getSelectedText*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/> <br/>`$('#dropdown').ejDropDownList('getSelectedText')`| **Property**: *text*<br/>`<ejs-dropdownlist  id="state" [text]="text"></ejs-dropdownlist>` |
| **Select event** | **Event**: *select*<br/>`<input type="text" id="dropdown1" ej-dropdownlist select="onSelect">`| **Event**: *select*<br/>`<ejs-dropdownlist  id="state" (select)="select($event)"></ejs-dropdownlist>`|
| **Addition of Html attributes** | **Property**: *htmlAttributes*<br/>`<input type="text" id="dropdown1" ej-dropdownlist [htmlAttribute]="attribute">`| **Property**: *htmlAttributes*<br/>`<ejs-dropdownlist  id="state" [htmlAttributes]="htmlAttributes"></ejs-dropdownlist>` |

## Common

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Adding new item** | **Method** : *addItem*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/><br/>`$('#dropdown1').ejDropDownList("addItem", {text:"India"});` | **Method**: *addItem*<br/>`<ejs-dropdownlist #sample/>`<br/> <br/>`@ViewChild('sample')   public ddlObj: DropDownListComponent;`<br/><br/>`ddlObj.addItem({Id: 'game4', Game: 'Golf'}, 2);` |
| **Clearing the text**| **Method** : *clearText*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/> <br/>`$('#dropdown').ejDropDownList('clearText')` | **Property**: *value*<br/>`<ejs-dropdownlist  id="state" [value]=""></ejs-dropdownlist>`|
| **Destroy the component** | **Method** : *destroy*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/><br/>`$('#dropdown1').ejDropDownList('destroy')`| **Method**: *destroy*<br/>`<ejs-dropdownlist #sample/>`<br/> <br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`ddlObj.destroy;` |
| **Getting the data** | **Method** : *getListData*<br/>`<input type="text" id="dropdown1" ej-dropdownlist >`<br/><br/>`$('#dropdown1').ejDropDownList('getListData')` |**Method** : *getItems*<br/>`<ejs-dropdownlist #sample/>`<br/><br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`ddlObj.getItems;` |
| **Create event** | **Event**: *create*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (create)="created($event)">` | **Event**: *created*<br/>`<ejs-dropdownlist (created) ="created($event)" />` |
| **Destroy event** | **Event**: *destroy*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (destroy)="destroy($event)">`|**Event**: *destroyed*<br/>`<ejs-dropdownlist (destroyed) ="destroy($event)" />` |
| **Cascade  event** | **Event**: *cascade*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (cascade)="cascade($event)">`|<https://ej2.syncfusion.com/angular/demos/#/material/drop-down-list/cascading> |
| **Change event** | **Event**: *change*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (change)="change($event)">`| **Event**: *change*<br/>`<ejs-dropdownlist (change) ="change($event)" />` |
| **Focus out event** |	**Event**: *focusOut*<br/>`<input type="text" id="dropdown1" ej-dropdownlist (focusOut)="focusOut($event)">`| **Event**: *blur*<br/>`<ejs-dropdownlist (blur) ="blur($event)" />`|
| **Focus in event**| **Event**: *focusIn*<br/><br/>`<input type="text" id="dropdown1" ej-dropdownlist (focusIn)="focusIn($event)">` | **Event**: *focus*<br/>`<ejs-dropdownlist (focus) ="onfofus($event)" />` |
