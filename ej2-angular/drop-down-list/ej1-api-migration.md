---
layout: post
title: EJ1 API Migration in Angular DropDownList Component | Syncfusion
description: Learn about the API migration from Essential JS 1 to Essential JS 2 for the Syncfusion Angular DropDownList component.
platform: ej2-angular
control: DropDownList
documentation: ug
domainurl: ##DomainURL##
---

# EJ1 API Migration in Angular DropDownList Component

This article describes the API migration process of the DropDownList component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## DataBinding

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: `dataSource` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [dataSource]="empList">` | **Property**: `dataSource` <br/>`<ejs-dropdownlist id="state" [dataSource]="stateData"></ejs-dropdownlist>`|
| **Fields for mapping** | **Property**: `fields` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [fields]="fieldsvalues">`| **Property**: `fields` <br/>`<ejs-dropdownlist id="state" [fields]="stateFields"></ejs-dropdownlist>`|
| **Query** | **Property**: `query` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [query]="query">`| **Property**: `query`<br/>`<ejs-dropdownlist id="state" [query]='query'></ejs-dropdownlist>`|
| **Begin event** | **Event**: `actionBegin` <br/>`<input type="text" id="dropdown1" ej-dropdownlist (actionBegin)="begin($event)">` | **Event**: `actionBegin` <br/>`<ejs-dropdownlist id="state" (actionBegin)="begin($event)"></ejs-dropdownlist>`|
| **Complete event** | **Event**: `actionComplete` <br/>`<input type="text" id="dropdown1" ej-dropdownlist (actionComplete)="empList($event)">` | **Event**: `actionComplete` <br/>`<ejs-dropdownlist id="state" (actionComplete)="complete($event)"></ejs-dropdownlist>`|
| **Failure event** | **Event**: `actionFailure` <br/>`<input type="text" id="dropdown1" ej-dropdownlist (actionFailure)="empList($event)">`| **Event**: `actionFailure` <br/>`<ejs-dropdownlist id="state" (actionFailure)="failure($event)"></ejs-dropdownlist>`|
| **Success event**| **Event**: `actionSuccess` <br/>`<input type="text" id="dropdown1" ej-dropdownlist (actionSuccess)="success($event)">`| **Not Applicable**. The success result is returned within the `actionComplete` event argument. |
| **Data binding event**| **Event**: `dataBound` <br/> `<input type="text" id="dropdown1" ej-dropdownlist (dataBound)="databinding($event)">`| **Event**: `dataBound` <br/>`<ejs-dropdownlist id="state" (dataBound)="dataBound($event)"></ejs-dropdownlist>`|

## Filtering

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: `enableFilterSearch` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableFilterSearch]="enableFilterSearch">`| **Property**: `allowFiltering` <br/>`<ejs-dropdownlist id="state" [allowFiltering]="true"></ejs-dropdownlist>` |
| **Server filtering** | **Property**: `enableServerFiltering` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableServerFiltering]="enableServerFiltering">`| **Property**: `allowFiltering`. Server filtering is handled within the `filtering` event. <br/>`<ejs-dropdownlist id="state" [allowFiltering]="true" (filtering)="onFiltering($event)"></ejs-dropdownlist>` |
| **Filter type**| **Property**: `filterType` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [filterType]="filtertype">` | **Property**: `filterType`. <br/>`<ejs-dropdownlist id="state" filterType="Contains"></ejs-dropdownlist>` |
| **Filter Bar watermark text** | **Not Applicable** | **Property**: `filterBarPlaceholder` <br/>`<ejs-dropdownlist id="state" [filterBarPlaceholder]="filterBarPlace"></ejs-dropdownlist>` |
| **Ignore casing and diacritics** | **Not Applicable** | **Property**: `ignoreAccent`<br/>`<ejs-dropdownlist id="state" [ignoreAccent]="true"></ejs-dropdownlist>` |
| **Incremental search**| **Property**: `enableIncrementalSearch`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableIncrementalSearch]="enableIncrementalSearch">` | Incremental search is enabled by default. |
| **Case sensitivity** | **Property**: `caseSensitiveSearch`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [caseSensitiveSearch]="caseSensitiveSearch">` | **Property**: `ignoreCase` (set to `false`). <br/>`<ejs-dropdownlist id="state" [ignoreCase]="false"></ejs-dropdownlist>` |
| **Search event**| **Event**: `search` <br/>`<input type="text" id="dropdown1" ej-dropdownlist (search)="search($event)">` | **Event**: `filtering` <br/>`<ejs-dropdownlist id="state" (filtering)="filtering($event)"></ejs-dropdownlist>` |

## Template

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: `template` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [template]="template">` |**Property**: `itemTemplate`<br/>`<ejs-dropdownlist id="state" [itemTemplate]="itemTemplate"></ejs-dropdownlist>`|
| **Group Template** | **Not Applicable** | **Property**: `groupTemplate` <br/>`<ejs-dropdownlist id="state" [groupTemplate]="groupTemplate"></ejs-dropdownlist>`|
| **Value Template** | **Not Applicable** | **Property**: `valueTemplate` <br/>`<ejs-dropdownlist id="state" [valueTemplate]="valueTemplate"></ejs-dropdownlist>`|
| **Header Template** | **Property**: `headerTemplate` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [headerTemplate]="headertemplate">`| **Property**: `headerTemplate` <br/>`<ejs-dropdownlist id="state" [headerTemplate]="headerTemplate"></ejs-dropdownlist>`|
| **Footer Template** | **Not applicable** | **Property**: `footerTemplate` <br/>`<ejs-dropdownlist id="state" [footerTemplate]="footerTemplate"></ejs-dropdownlist>`|
| **No Records Template**| **Not applicable** | **Property**: `noRecordsTemplate` <br/>`<ejs-dropdownlist id="state" [noRecordsTemplate]="noRecordsTemplate"></ejs-dropdownlist>`|
| **Action Failure Template** | **Not applicable** | **Property**: `actionFailureTemplate` <br/>`<ejs-dropdownlist id="state" [actionFailureTemplate]="actionFailureTemplate"></ejs-dropdownlist>`|

## Virtual Scrolling

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: `allowVirtualScrolling` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [allowVirtualScrolling]="true">` | **Property**: `enableVirtualization` <br/>`<ejs-dropdownlist id="state" [enableVirtualization]="true"></ejs-dropdownlist>` |

## Applying CSS

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: `cssClass` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [cssClass]="customClass">` | **Property**: `cssClass` <br/>`<ejs-dropdownlist id="state" [cssClass]="cssClass"></ejs-dropdownlist>`|
| **showRoundedCorner** | **Property**: `showRoundedCorner` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [showRoundedCorner]="showRoundedCorner">` | Assign the `e-corner` class to the `cssClass` property. <br/>`<ejs-dropdownlist id="state" cssClass="e-corner"></ejs-dropdownlist>`|

## Sorting

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: `enableSorting` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableSorting]="enableSorting">` | In EJ2, sorting is enabled when the `sortOrder` property is set. |
| **Order of sorting**| **Property**: `sortOrder` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [sortOrder]="sortOrder">` | **Property**: `sortOrder` <br/>`<ejs-dropdownlist id="state" [sortOrder]="sortOrder"></ejs-dropdownlist>`|

## Popup

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--- | --- | --- |
| **Popup height**| **Property**: `popupHeight` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [popupHeight]="popupHeight">`| **Property**: `popupHeight` <br/>`<ejs-dropdownlist id="state" [popupHeight]="'200px'"></ejs-dropdownlist>`|
| **Popup width** | **Property**: `popupWidth` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [popupWidth]="popupWidth">` | **Property**: `popupWidth` <br/>`<ejs-dropdownlist id="state" [popupWidth]="'250px'"></ejs-dropdownlist>`|
| **Popup show on load** | **Property**: `showPopupOnLoad` <br/> `<input type="text" id="dropdown1" ej-dropdownlist [showPopupOnLoad]="showPopupOnLoad">`| Call the `showPopup()` method in the `created` event. |
| **enableAnimation** | **Property**: `enableAnimation` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableAnimation]="enableAnimation">`| **Not applicable**. Animation is enabled by default. |
| **Popup resizing** | **Property**: `enablePopupResize` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [enablePopupResize]="enablePopupResize">`| **Not applicable** |
| **Maximum Popup height** | **Property**: `maxPopupHeight` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [maxPopupHeight]="maxPopupHeight">`| **Not applicable** |
| **Minimum Popup height** | **Property**: `minPopupHeight`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [minPopupHeight]="minPopupHeight">`| **Not applicable** |
| **Maximum Popup width**| **Property**: `maxPopupWidth` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [maxPopupWidth]="maxPopupWidth">`| **Not applicable** |
| **Minimum Popup width** | **Property**: `minPopupWidth` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [minPopupWidth]="minPopupWidth">` | **Not applicable** |
| **Loading data** | **Property**: `loadOnDemand` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [loadOnDemand]="loadOnDemand">` | Data is loaded on demand by default. |
| **Popup showing manually** | **Method**: `showPopup` <br/>`$('#dropdown1').ejDropDownList('showPopup')` | **Method**: `showPopup` <br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`this.ddlObj.showPopup();`|
| **Popup hiding manually** |**Method**: `hidePopup` <br/>`$('#dropdown1').ejDropDownList('hidePopup')` | **Method**: `hidePopup`<br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`this.ddlObj.hidePopup();`|
| **Before Popup hide event** | **Event**: `beforePopupHide` <br/>`<input type="text" id="dropdown1" ej-dropdownlist (beforePopupHide)="beforePopupHide($event)">`| **Not applicable** |
| **Before Popup shown event** | **Event**: `beforePopupShown`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (beforePopupShown)="beforePopupShown($event)">`| **Event**: `beforeOpen` <br/>`<ejs-dropdownlist (beforeOpen)="beforeOpen($event)"></ejs-dropdownlist>`|
| **Popup hide event** | **Event**: `popupHide`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (popupHide)="popupHide($event)">`|**Event**: `close` <br/>`<ejs-dropdownlist (close)="close($event)"></ejs-dropdownlist>` |
| **Popup resize event** | **Event**: `popupResize`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [popupResize]="popupResize($event)">`| **Not applicable** |
| **Popup resize start event**| **Event**: `popupResizeStart`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (popupResizeStart)="popupResizeStart($event)">`| **Not applicable** |
| **Popup resize stop event** | **Event**: `popupResizeStop`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (popupResizeStop)="popupResizeStop($event)">`| **Not applicable** |
| **Popup shown event** | **Event**: `popupShown`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (popupShown)="popupShown($event)">`| **Event**: `open`<br/> `<ejs-dropdownlist (open)="open($event)"></ejs-dropdownlist>`|

## Placeholder

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Watermark text** | **Property**: `watermarkText` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [watermarkText]="watermarkText">`| **Property**: `placeholder` <br/>`<ejs-dropdownlist id="state" [placeholder]="placeholder"></ejs-dropdownlist>`|
| **Floating of watermark text** | **Not applicable** | **Property**: `floatLabelType` <br/>`<ejs-dropdownlist id="state" [floatLabelType]="floatLabelType"></ejs-dropdownlist>`|

## Grouping

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Default** | **Property**: `fields.groupBy` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [fields]="fields">`|**Property**: `fields.groupBy`<br/>`<ejs-dropdownlist id="games" [fields]="{ groupBy: 'Category' }"></ejs-dropdownlist>`|
| **Group Template**| **Not applicable** | **Property**: `groupTemplate`<br/>`<ejs-dropdownlist id="state" [groupTemplate]="groupTemplate"></ejs-dropdownlist>` |

## Accessibility

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Globalization** | **Property**: `locale`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [locale]="locale">`| **Property**: `locale`<br/>`<ejs-dropdownlist id="state" [locale]="locale"></ejs-dropdownlist>` |
| **RTL support** | **Property**: `enableRtl`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [enableRtl]="enableRtl">` | **Property**: `enableRtl`<br/>`<ejs-dropdownlist id="state" [enableRtl]="enableRtl"></ejs-dropdownlist>` |

## Miscellaneous

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Enable/disable**| **Property**: `enabled`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [enabled]="enabled">` | **Property**: `enabled` <br/>`<ejs-dropdownlist id="state" [enabled]="enabled"></ejs-dropdownlist>` |
| **Read only** | **Property**: `readOnly` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [readOnly]="readOnly">` | **Property**: `readonly`<br/>`<ejs-dropdownlist id="state" [readonly]="readOnly"></ejs-dropdownlist>` |
| **Persistence of data** | **Property**: `enablePersistence`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [enablePersistence]="enablePersistence">` |**Property**: `enablePersistence`<br/>`<ejs-dropdownlist id="state" [enablePersistence]="enablePersistence"></ejs-dropdownlist>` |
| **Disable** | **Method**: `disable`<br/>`$('#dropdown1').ejDropDownList('disable')`| Set the `enabled` property to `false`.<br/>`<ejs-dropdownlist id="state" [enabled]="false"></ejs-dropdownlist>`|
| **Enable** | **Method**: `enable`<br/>`$('#dropdown').ejDropDownList('enable')`| Set the `enabled` property to `true`.<br/>`<ejs-dropdownlist id="state" [enabled]="true"></ejs-dropdownlist>`|
| **Height** | **Property**: `height` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [height]="height">`| **Not Applicable**. Set the height via CSS. |
| **Width** | **Property**: `width` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [width]="width">` | **Property**: `width` <br/>`<ejs-dropdownlist id="state" [width]="width"></ejs-dropdownlist>`|

## Selection

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
|--- | --- | --- |
| **Selecting particular index**| **Property**: `selectedIndex`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [selectedIndex]="selectedIndex">` | **Property**: `index`<br/>`<ejs-dropdownlist id="state" [index]="index"></ejs-dropdownlist>` |
| **Selecting particular value**| **Property**: `value`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [value]="value">` | **Property**: `value`<br/>`<ejs-dropdownlist id="state" [value]="value"></ejs-dropdownlist>`|
| **Selecting particular text**| **Property**: `text` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [text]="text">`|**Property**: `text`<br/>`<ejs-dropdownlist id="state" [text]="text"></ejs-dropdownlist>` |
| **Target id** | **Property**: `targetId` <br/>`<input type="text" id="dropdown1" ej-dropdownlist [targetId]="targetid">` | **Not applicable** |
| **Selecting item using text**| **Method**: `selectItemByText` <br/>`$('#dropdown1').ejDropDownList('selectItemByText','car')` | **Not applicable**. Set the `text` property directly. |
| **Unselect item using text**| **Method**: `unselectItemByText`<br/>`$('#dropdown1').ejDropDownList('unselectItemByText','car')`| **Not applicable**. Set the `value` or `index` to `null`. |
| **Selecting item using value**| **Method**: `selectItemByValue`<br/>`$('#dropdown').ejDropDownList('selectItemByValue','car')` | **Not applicable**. Set the `value` property directly. |
| **Getting data by using value** | **Method**: `getItemDataByValue`<br/>`$('#dropdown').ejDropDownList('getItemDataByValue','car')` | **Method**: `getDataByValue`<br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`this.ddlObj.getDataByValue("val");`|
| **Get selected value** | **Method**: `getSelectedItem`<br/>`$('#dropdown').ejDropDownList('getSelectedItem')` |**Not applicable**. Use the `value` property directly. |
| **Get selected text** | **Method**: `getSelectedText`<br/>`$('#dropdown').ejDropDownList('getSelectedText')`| **Property**: `text`<br/>`<ejs-dropdownlist id="state" [text]="text"></ejs-dropdownlist>` |
| **Select event** | **Event**: `select`<br/>`<input type="text" id="dropdown1" ej-dropdownlist select="onSelect">`| **Event**: `select`<br/>`<ejs-dropdownlist id="state" (select)="select($event)"></ejs-dropdownlist>`|
| **Addition of HTML attributes**| **Property**: `htmlAttributes`<br/>`<input type="text" id="dropdown1" ej-dropdownlist [htmlAttribute]="attribute">`| **Property**: `htmlAttributes`<br/>`<ejs-dropdownlist id="state" [htmlAttributes]="htmlAttributes"></ejs-dropdownlist>` |

## Common

<!-- markdownlint-disable MD010 -->

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Adding new item** | **Method**: `addItem`<br/>`$('#dropdown1').ejDropDownList("addItem", {text:"India"});` | **Method**: `addItem`<br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`this.ddlObj.addItem({Id: 'game4', Game: 'Golf'}, 2);` |
| **Clearing the text**| **Method**: `clearText`<br/>`$('#dropdown').ejDropDownList('clearText')` | **Method**: `clear`<br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`this.ddlObj.clear();`|
| **Destroy the component** | **Method**: `destroy`<br/>`$('#dropdown1').ejDropDownList('destroy')`| **Method**: `destroy`<br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`this.ddlObj.destroy();` |
| **Getting the data**| **Method**: `getListData`<br/>`$('#dropdown1').ejDropDownList('getListData')` |**Method** : `getItems`<br/>`@ViewChild('sample') public ddlObj: DropDownListComponent;`<br/><br/>`let items = this.ddlObj.getItems();` |
| **Create event**| **Event**: `create`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (create)="created($event)">` | **Event**: `created`<br/>`<ejs-dropdownlist (created)="created($event)"></ejs-dropdownlist>` |
| **Destroy event**| **Event**: `destroy`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (destroy)="destroy($event)">`|**Event**: `destroyed`<br/>`<ejs-dropdownlist (destroyed)="destroy($event)"></ejs-dropdownlist>` |
| **Cascade event** | **Event**: `cascade`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (cascade)="cascade($event)">`| Use the `change` event of the parent DropDownList to update the child DropDownList's data source. |
| **Change event**| **Event**: `change`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (change)="change($event)">`| **Event**: `change`<br/>`<ejs-dropdownlist (change)="change($event)"></ejs-dropdownlist>` |
| **Focus out event**| **Event**: `focusOut`<br/>`<input type="text" id="dropdown1" ej-dropdownlist (focusOut)="focusOut($event)">`| **Event**: `blur`<br/>`<ejs-dropdownlist (blur)="blur($event)"></ejs-dropdownlist>`|
| **Focus in event**| **Event**: `focusIn`<br/><br/>`<input type="text" id="dropdown1" ej-dropdownlist (focusIn)="focusIn($event)">` | **Event**: `focus`<br/>`<ejs-dropdownlist (focus)="onfocus($event)"></ejs-dropdownlist>` |