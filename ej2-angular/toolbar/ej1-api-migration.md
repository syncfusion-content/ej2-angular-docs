---
layout: post
title: EJ1 API migration in Angular Toolbar component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# EJ1 API migration in Angular Toolbar component

This article describes the API migration process of Toolbar component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Accessibility and Localization

<!-- markdownlint-disable MD033 -->

|   **Behavior**  | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
|-----------------|--------------------------------|--------------------------------|
|   Localization   | <b>Not Applicable</b>  | **Property** : locale<br/> `<ejs-toolbar id="toolbar" locale="fr-BE"></ejs-toolbar>`  |
|   Right to left  | **Property:** enableRTL<br/> `<ej-toolbar id="toolbar" [enableRTL]="true"></ej-toolbar>` | **Property:** enableRTL<br/> `<ejs-toolbar id="toolbar" [enableRTL]="true"> </ejs-toolbar>`  |

## DataSource

<!-- markdownlint-disable MD033 -->

|   **Behavior**   | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
|------------------|--------------------------------|--------------------------------|
| DataSource | **Property** : dataSource<br/> `<ej-toolbar id="toolbar" [dataSource]="items" ></ej-toolbar>` | <b>Not Applicable</b>  |
| Query | **Property** : query <br/> `<ej-toolbar id="toolbar" [query]="query"></ej-toolbar>`| <b>Not Applicable</b>  |
| Fields | **Property**: fields<br/> `<ej-toolbar id="toolbar" [fields]="fields"></ej-toolbar>` | <b>Not Applicable</b> |
| Group | **Property** : group<br/> `<ej-toolbar id="toolbar" [fields]="fields"></ej-toolbar>`<br/> **TS:**<br/> public fields: Object =  { group: '' } | <b>Not Applicable</b> |
| HtmlAttributes   | **Property** : htmlAttributes<br/> `<ej-toolbar id="toolbar" [fields]="fields"></ej-toolbar>`<br/> **TS:**<br/>public fields: Object =  {  htmlAttributes: {  }  } | <b>Not Applicable</b> |
| Id | **Property** : id <br/> `<ej-toolbar id="toolbar" [fields]="fields"></ej-toolbar>`<br/> **TS:**<br/>public fields: Object =  {  id: '' } | <b>Not Applicable</b> |
|   ImageAttributes   | **Property:** imageAttributes<br/> `<ej-toolbar id="toolbar" [fields]="fields" ></ej-toolbar>`<br/> **TS:**<br/>public fields: Object =  { imageAttributes: {  } } | <b>Not Applicable</b> |
| ImageUrl | **Property:** imageUrl<br/> `<ej-toolbar id="toolbar" [fields]="fields" ></ej-toolbar>`<br/> **TS:**<br/>public fields: Object =  { imageUrl: ''} | <b>Not Applicable</b> |
| SpriteCssClass | **Property:** spriteCssClass<br/> `<ej-toolbar id="toolbar" [fields]="fields" ></ej-toolbar>`<br/> **TS:**<br/> public fields: Object =  { spriteCssClass: ''} | <b>Not Applicable</b> |
| Text | **Property:** text<br/> `<ej-toolbar id="toolbar" [fields]="fields" ></ej-toolbar>`<br/> **TS:**<br/> public fields: Object =  { text: ''} | <b>Not Applicable</b> |
| TooltipText | **Property:** tooltipText<br/> `<ej-toolbar id="toolbar" [fields]="fields" ></ej-toolbar>`<br/> **TS:**<br/> public fields: Object =  { tooltipText: ''} | <b>Not Applicable</b> |
| Template | **Property:** template<br/> `<ej-toolbar id="toolbar" [fields]="fields" ></ej-toolbar>`<br/> **TS:**<br/> public fields: Object =  { template: ''} | <b>Not Applicable</b> |

## Items

<!-- markdownlint-disable MD033 -->

|  **Behavior**  | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
|----------------|--------------------------------|--------------------------------|
| Default | **Property** : items<br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>` | **Property** : items<br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>` |
| Align | <b>Not Applicable</b> | **Property** : items[0].Align <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/>  public items: Object[] = [{ align: 'center'}];|
|   Custom class   | <b>Not Applicable</b> | **Property** : items[0].cssClass <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ cssClass: 'e-class'}];|
|    Group Name   | **Property** : items[0].group <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ group: ''}]; | <b>Not Applicable</b>|
|   HtmlAttributes   | **Property** : items[0].htmlAttributes <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ htmlAttributes: {  } }];| **Property** : items[0].htmlAttributes <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ htmlAttributes: {  } }];|
| Id |**Property** : items[0].id <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{  id: ''  }]; | **Property** : items[0].id <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{  id: ''  }];|
|    ImageAttributes    | **Property** : items[0].imageAttributes <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ imageAttributes: {  } }]; | <b>Not Applicable</b>|
| ImageUrl | **Property** : items[0].imageUrl <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ imageUrl: '' }]; | <b>Not Applicable</b>|
| Overflow | <b>Not Applicable</b> | **Property** : items[0].overflow  <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ overflow: 'popup' }];|
| PrefixIcon | <b>Not Applicable</b> | **Property** : items[0].prefixIcon <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{  prefixIcon: 'e-icon' }];|
|    ShowAlwaysInPopup    | <b>Not Applicable</b> | **Property** : items[0].showAlwaysInPopup <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/>  public items: Object[] = [{ showAlwaysInPopup: true }];|
|  ShowTextOn  | <b>Not Applicable</b> | **Property** : items[0].showTextOn <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/>  public items: Object[] = [{ showTextOn: 'popup' }];|
| Sprite CssClass | **Property** : items[0].showTextOn <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/>  public items: Object[] = [{ spriteCssClass: 'e-class' }]; |<b>Not Applicable</b> |
| SuffixIcon | <b>Not Applicable</b> | **Property** : items[0].suffixIcon <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/>  public items: Object[] = [{ suffixIcon: 'e-icon' }];|
| Template | **Property** : items[0].template <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ template: '' }]; | **Property** : items[0].template <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ template: '' }]; |
| Text | **Property** : items[0].text <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ text: 'Cut' }]; | **Property** : items[0].text <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ text: 'Copy' }]; |
| TooltipText | **Property** : items[0].tooltipText <br/> `<ej-toolbar id="toolbar" [items]="items"> </ej-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ tooltipText: 'Cut' }]; | **Property** : items[0].tooltipText <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{ tooltipText: 'Copy' }]; |
| Type | <b>Not Applicable</b> | **Property** : items[0].type <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{type: 'Button'}];|
| Width | <b>Not Applicable</b> | **Property** : items[0].width <br/> `<ejs-toolbar id="toolbar" [items]="items"> </ejs-toolbar>`<br/> **TS:**<br/> public items: Object[] = [{width: '50'}];|
| Disable Items   |**Property** : disabledItemIndices  <br/> `<ej-toolbar id="toolbar" disabledItemIndices="[]" > </ej-toolbar>`| **Method** : enableItems(items, false) <br/> `<ejs-toolbar id="toolbar" #Toolbar ></ejs-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.enableItems([], false);|
| Add Items |<b>Not Applicable</b>| **Method** :addItems(items, index) <br/> `<ejs-toolbar id="toolbar" #Toolbar> </ejs-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.addItems([], 0);|
| Remove Item |**Method** : removeItem(element) <br/> `<ej-toolbar id="toolbar" #Toolbar></ej-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.removeItem(ele);| **Method** :removeItems(args) <br/> `<ejs-toolbar id="toolbar" #Toolbar> </ejs-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.removeItems(0);|
| RemoveItemById |**Method** :select(index)<br/> `<ej-toolbar id="toolbar" #Toolbar> </ej-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.select(1);|<b>Not Applicable</b>|
| Enable item | **Method** :enableItem(element)<br/> `<ej-toolbar id="toolbar" #Toolbar> </ej-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.enableItem(ele);| **Method** : enableItems(items, true)<br/> `<ejs-toolbar id="toolbar" #Toolbar> </ejs-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.enableItems(items, true); |
| EnableItemById |**Method** : enableItemById(id)<br/> `<ej-toolbar id="toolbar" #Toolbar> </ej-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.enableItemById('left');|<b>Not Applicable</b>|
| Disable Item | **Method** : disableItem(element)<br/> `<ej-toolbar id="toolbar" #Toolbar> </ej-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.disableItem(ele);| **Method** :enableItems(items, true)<br/> `<ejs-toolbar id="toolbar" #Toolbar> </ejs-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.enableItems([], false);|
| DisableItemById |**Method** : disableItemById(id)<br/> `<ej-toolbar id="toolbar" #Toolbar> </ej-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.disableItemById('left');|<b>Not Applicable</b>|
| Show item |<b>Not Applicable</b>| **Method** : hideItem(index, false)<br/> `<ejs-toolbar id="toolbar" #Toolbar> </ejs-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.hideItem(0, false);|
| Hide item |<b>Not Applicable</b>| **Method** : hideItem(index, true)<br/> `<ejs-toolbar id="toolbar" #Toolbar> </ejs-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.hideItem(0, true);|
| Select item | **Method** :selectItem(element)<br/> `<ej-toolbar id="toolbar" #Toolbar> </ej-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.selectItem(ele);|<b>Not Applicable</b>|
| SelectItemById | **Method** : selectItemById(id)<br/> `<ej-toolbar id="toolbar" #Toolbar> </ej-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.selectItemById('left');|<b>Not Applicable</b>|
| DeselectItemById | **Method** : deselectItemById(id)<br/> `<ej-toolbar id="toolbar" #Toolbar> </ej-toolbar>`<br/> **TS:**<br/>  @ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/>ToolObj.deselectItemById('left');|<b>Not Applicable</b>|
| Clicked | <b>Not Applicable</b>  | **Event:** clicked <br/> `<ejs-toolbar id="toolbar" (clicked)='onclicked($event)'></ejs-toolbar>`<br/> **TS:**<br/> onclicked(event){  }  |
| itemHover | **Event:** itemHover<br/> `<ej-toolbar id='toolbar' (itemHover)='onitemHover($event)'></ej-toolbar>`<br/> **TS:**<br/> onitemHover(event){  }  | <b>Not Applicable</b> |
| itemLeave | **Event:** itemLeave<br/> `<ej-toolbar id='toolbar' (itemLeave)='onitemLeave($event)'></ej-toolbar>`<br/> **TS:**<br/> onitemHover(event){  }  | <b>Not Applicable</b> |

## Common

<!-- markdownlint-disable MD033 -->

|  **Behavior**  | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| -------------- | ------------------------- | ------------------------- |
| Custom class   | **Property** : cssClass <br/> `<ej-toolbar id="toolbar" cssClass="customClass" > </ej-toolbar>`| <b>Not Applicable</b> |
| Enabled | **Property** : enabled <br/> `<ej-toolbar id="toolbar" enabled="false"> </ej-toolbar>`| <b>Not Applicable</b>|
| EnableSeparator | **Property** : enableSeparator <br/> `<ej-toolbar id="Accordion" [enableSeparator]="false" > </ej-toolbar>`| <b>Not Applicable</b> |
| Height | **Property** : height <br/> `<ej-toolbar id="toolbar" height="100%" > </ej-toolbar>`| **Property** : height <br/> `<ejs-toolbar id="toolbar" height="100%" > </ejs-toolbar>` |
| HtmlAttributes | **Property** : htmlAttributes <br/> `<ej-toolbar id="Accordion" [htmlAttributes]="attributes" > </ej-toolbar>`<br/> **TS:**<br/> public attributes: Object = {class: "my-class"};| <b>Not Applicable</b> |
| Hide | **Property** : hide() <br/> `<ej-toolbar id="Accordion" [hide]="true" > </ej-toolbar>` | <b>Not Applicable</b> |
| Orientation   | **Property** : orientation <br/> `<ej-toolbar id="Accordion" [orientation]="horizontal" > </ej-toolbar>`| <b>Not Applicable</b> |
| OverflowModes | **Property** : responsiveType <br/> `<ej-toolbar id="Accordion" [responsiveType]="popup" > </ej-toolbar>`|  **Property** : overflowMode <br/> `<ejs-toolbars id="Accordion" [overflowMode]="popup" > </ejs-toolbar>` |
| Persistence   |<b>Not Applicable</b>| **Property** : enablePersistence <br/> `<ejs-toolbar id="toolbar" [enablePersistence]="false" > </ejs-toolbar>` |
| Responsive   | **Property** : isResponsive <br/> `<ej-toolbar id="Accordion" [isResponsive]="true" > </ej-toolbar>` |<b>Not Applicable</b>|
| ShowRounderCorner   | **Property** : showRoundedCorner <br/> `<ej-toolbar id="toolbar" [showRoundedCorner]="true" > </ej-toolbar>`| <b>Not Applicable</b> |
| Width | **Property** : width <br/> `<ej-toolbar id="Accordion" [width]="600" > </ej-toolbar>`|  **Property** : width <br/> `<ejs-toolbar id="Accordion" [width]="600" > </ejs-toolbar>` |
| Enable | **Method** : enable() <br/> `<ej-toolbar id="toolbar" #Toolbar></ej-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.enable(); | **Method** : disable(false) <br/> `<ejs-toolbar id="toolbar" #Toolbar></ejs-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.disable(false); |
| Disable | **Method** : disable() <br/> `<ej-toolbar id="toolbar" #Toolbar></ej-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.disable(); | **Method** :  disable(true) <br/> `<ejs-toolbar id="toolbar" #Toolbar></ejs-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.disable(true); |
| Show | **Method** : show() <br/> `<ej-toolbar id="toolbar" #Toolbar></ej-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.show(); | <b>Not Applicable</b> |
| Hide | **Method** : hide() <br/> `<ej-toolbar id="toolbar" #Toolbar></ej-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.hide(); | <b>Not Applicable</b> |
| Refresh | <b>Not Applicable</b> | **Method** : refresh() <br/> `<ejs-toolbar id="toolbar" #Toolbar></ejs-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.refresh(); |
| Destroy | **Method** : destroy() <br/> `<ej-toolbar id="toolbar" #Toolbar></ej-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.destroy(); | **Method** : destroy() <br/> `<ejs-toolbar id="toolbar" #Toolbar></ejs-toolbar>`<br/> **TS:**<br/>@ViewChild('Toolbar') public ToolObj: ToolbarComponent;<br/> ToolObj.destroy(); |
| BeforeCreate    | <b>Not Applicable</b> | **Event:** created<br/> `<ejs-toolbar id="toolbar" #Toolbar (created)='onbeforeCreate($event)'></ejs-toolbar>`<br/> **TS:**<br/> onbeforeCreate(event) {  } |
| Created | **Event:** create<br/> `<ej-toolbar id="toolbar" #Toolbar (create)='oncreate($event)'></ej-toolbar>`<br/> **TS:**<br/> oncreate(event) {  } | **Event:** created<br/> `<ejs-toolbar id="toolbar" #Toolbar (created)='oncreated($event)'></ejs-toolbar>`<br/> **TS:**<br/> oncreated(event) {  } |
| Destroyed | **Event:** destroy<br/> `<ej-toolbar id="toolbar" #Toolbar (destroy)='ondestroy($event)'></ej-toolbar>`<br/> **TS:**<br/> ondestroy(event) {  } | **Event:** destroyed<br/> `<ejs-toolbar id="toolbar" #Toolbar (destroyed)='ondestroyed($event)'></ejs-toolbar>`<br/> **TS:**<br/> ondestroyed(event) {  } |
| FocusOut |  **Event:** focusOut<br/> `<ej-toolbar id="toolbar" #Toolbar (focusOut)='onfocusOut($event)'></ej-toolbar>`<br/> **TS:**<br/> onfocusOut(event) {  } |<b>Not Applicable</b> |
|   OverflowOpen   |  **Event:** overflowOpen<br/> `<ej-toolbar id="toolbar" (overflowOpen)='onoverflowOpen($event)'></ej-toolbar>`<br/> **TS:**<br/> onoverflowOpen(event) {  } |<b>Not Applicable</b> |
|   OverflowClose   | **Event:** overflowClose<br/> `<ej-toolbar id="toolbar" (overflowClose)='onoverflowClose($event)'></ej-toolbar>`<br/> **TS:**<br/> onoverflowClose(event) {  } | <b>Not Applicable</b> |