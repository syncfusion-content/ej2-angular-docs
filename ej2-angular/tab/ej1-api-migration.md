---
layout: post
title: Ej1 api migration in Angular Tab component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Tab component

This article describes the API migration process of Tab component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Accessibility and Localization

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Keyboard Navigation | **Property** : allowKeyboardNavigation<br/> `<ej-tab id="Tab" [allowKeyboardNavigation]="false" ></ej-tab>`  | <b>Not Applicable</b> |
| Localization | <b>Not Applicable</b>  | **Property** : locale<br/> `<ejs-tab id="Tab" locale="fr-BE"></ejs-tab>`  |
| Right to left | **Property:** enableRTL<br/> `<ej-tab id="tab" [enableRTL]="true></ej-tab>` | **Property:** enableRTL<br/> `<ejs-tab id='tab' [enableRTL]='true'> </ejs-tab>`  |

## AjaxSettings

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Default | **Property** : ajaxSettings<br/> `<ej-tab id="tab" [ajaxSettings.type]="GET"></ej-tab>` | <b>Not Applicable</b>  |
| Asynchronous | **Property** : ajaxSettings.async <br/> `<ej-tab id="tab" [ajaxSettings.async]="true "></ej-tab>`| <b>Not Applicable</b>  |
| Browser Cache | **Property**: ajaxSettings.cache<br/> `<ej-tab id="tab" [ajaxSettings.cache]="false "></ej-tab>` | <b>Not Applicable</b> |
| Request type | **Property** : ajaxSettings.contentType<br/> `<ej-tab id="tab" [ajaxSettings.contentType]="html "></ej-tab>` | <b>Not Applicable</b> |
| Data | **Property** : ajaxSettings.data<br/> `<ej-tab id="tab" [ajaxSettings.data]={  }></ej-tab>` | <b>Not Applicable</b> |
| Response type | **Property** : ajaxSettings.dataType <br/> `<ej-tab id="tab" [ajaxSettings.dataType]="html"></ej-tab>` | <b>Not Applicable</b> |
| HTTP request type | **Property:** ajaxSettings.type<br/> `<ej-tab id="tab" [ajaxSettings.type]="GET"></ej-tab>` | <b>Not Applicable</b> |
| AjaxBeforeLoad | **Event:** ajaxBeforeLoad<br/> `<ej-tab id='tab' (ajaxBeforeLoad)='onajaxBeforeLoad($event)'></ej-tab>`<br/> **TS:**<br/> onajaxBeforeLoad (event){  } | <b>Not Applicable</b> |
| AjaxError | **Event:** AjaxError<br/> `<ej-tab id='tab' (ajaxError)='onajaxError($event)'></ej-tab>`<br/> **TS:**<br/> onajaxError (event){  } | <b>Not Applicable</b> |
| AjaxLoad | **Event:** ajaxLoad<br/> `<ej-tab id='tab' (ajaxLoad)='onajaxLoad($event)'></ej-tab>`<br/> **TS:**<br/> onajaxLoad (event){  } | <b>Not Applicable</b> |
| AjaxSuccess | **Event:** ajaxSuccess<br/> `<ej-tab id='tab' (ajaxSuccess)='onajaxSuccess ($event)'></ej-tab>`<br/> **TS:**<br/> onajaxSuccess (event){  } | <b>Not Applicable</b> |

## Animation

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Default |<b>Not Applicable</b> | **Property** :animation<br/> `<ejs-tab id="tab" [animation]="animation"></ejs-tab>`<br/> **TS:**<br/>  public animation: Object[] = [ { prev: { }, next: { } } ] |
| EnableAnimation |**Property** :animation<br/> `<ej-tab id="tab" [enableAnimation]="false"></ej-tab>`<br/> | <b>Not Applicable</b>|
| Previous animation |<b>Not Applicable</b> | **Property** :animation.prev<br/> `<ejs-tab id='tab' [animation]="animation"></ejs-tab>`<br/>**TS:**<br/>public animation: Object[] = [{prev: { duration: 400,easing: 'ease-in',  effect:  'SlideLeft'}}]|
| Next animation |<b>Not Applicable</b> | **Property** :animation.next<br/> `<ejs-tab id='tab' [animation]="animation"></ejs-tab>`<br/>**TS:**<br/>public animation: Object[] = [{next: {duration: 400, easing: 'ease-in', effect: 'SlideLeft' }}] |
| Duration  [prev / next] |<b>Not Applicable</b> | **Property** :animation.collapse.duration<br/> `<ejs-tab id='tab' [animation]="animation"></ejs-tab>`<br/>**TS:**<br/>public animation: Object[] = [{prev: { duration: 400 }}] |
| Easing  [expand / collapse] |<b>Not Applicable</b> | **Property** :animation.next.easing<br/> `<ejs-tab id='tab' [animation]="animation"></ejs-tab>`<br/>**TS:**<br/>public animation: Object[] = [{prev: { easing: 'ease-in' }}] |
| Effect  [expand / collapse] |<b>Not Applicable</b> | **Property** :animation.next.effect<br/> `<ejs-tab id='tab' [animation]="animation"></ejs-tab>`<br/>**TS:**<br/>public animation: Object[] = [{prev: { effect: 'SlideLeft' }}] |

## Header

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Header position | **Property** : headerPosition<br/> `<ej-tab id="Tab" [headerPosition]="Bottom" ></ej-tab>`  | **Property** : headerPlacement<br/> `<ejs-tab id="Tab" [headerPlacement]="Bottom" ></ejs-tab>`  |
| Header size | **Property** : headerSize<br/> `<ej-tab id="Tab" [headerSize]="100px" ></ej-tab>`  | <b>Not Applicable</b> |
| OverflowModes | <b>Not Applicable</b>| **Property:** overflowMode<br/> `<ejs-tab id='tab' [overflowMode]='Popup'> </ejs-tab>`  |
| TabScroll | **Property:** enableTabScroll<br/> `<ej-tab id="Tab" [enableTabScroll]="false" ></ej-tab>` | <b>Not Applicable</b> |

## Items

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Default | <b>Not Applicable</b> | **Property** : items<br/> `<ejs-tab id="tab" [items]="items"> </ejs-tab>` |
| Content | <b>Not Applicable</b> | **Property** : items[0].content <br/> `<ejs-tab id="tab" [items]="items"> </ejs-tab>`<br/> **TS:**<br/> public items: Object[] = [{ content: 'Contents'}];|
| Custom class | <b>Not Applicable</b>  | **Property** : items[0].cssClass <br/> `<ejs-tab id="tab" [items]="items"> </ejs-tab>`<br/> **TS:**<br/> public items: Object[] = [{ cssClass: 'customClass'}];|
| Header| <b>Not Applicable</b> | **Property** : items[0].Header <br/> `<ejs-tab id="tab" [items]="items"> </ejs-tab>`<br/> **TS:**<br/> public items: Object[] = [{ header: '{  }];|
| Icon class |<b>Not Applicable</b> | **Property** : items[0].header.iconCss <br/> `<ejs-tab id="tab" [items]="items"> </ejs-tab>`<br/> **TS:**<br/> public items: Object[] = [{ header: { iconCss: 'e-icon' }}];|
| Icon position | <b>Not Applicable</b> | **Property** : items[0].header.iconPosition <br/> `<ejs-tab id="tab" [items]="items"> </ejs-tab>`<br/> **TS:**<br/> public items: Object[] = [{ header: { iconPosition: 'Left' }  }];|
| Header text | <b>Not Applicable</b> | **Property** : items[0].header.text <br/> `<ejs-tab id="tab" [items]="items"> </ejs-tab>`<br/> **TS:**<br/> public items: Object[] = [{header: { text: 'Tab1' }}];|
| Get items length |**Method** :  getItemsCount() <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.getItemsCount();| <b>Not Applicable</b>|
| Add Items |**Method** : addItem(url, displayLabel, index, cssClass, id) <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.addItem("#new", "New Item", 3, "myClass", "newItem");| **Method** :addTab(items, index) <br/> `<ejs-tab id="tab" #Tab> </ejs-tab>`<br/> **TS:**<br/>  @ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.addTab([{    header: { text: 'Tab1' },content: 'contents' }], 1  );|
| BeforeAdd | <b>Not Applicable</b>  | **Event:** adding<br/> `<ejs-tab id="tab" #Tab (adding)='onadding($event)'> </ejs-tab>`<br/> **TS:**<br/> onadding(event){  }  |
| AfterAdd | **Event:** itemAdd<br/> `<ej-tab id='tab' (itemAdd)='onitemAdd($event)'></ej-tab>`<br/> **TS:**<br/> onitemAdd(event){  }  | **Event:** added <br/> `<ejs-tab id="tab" (added)='onadded($event)'></ejs-tab>`<br/> **TS:**<br/> onadded(event){  } |
| Remove Item |**Method** : removeItem(index) <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.removeItem(0);| **Method** :addItem(items, index) <br/> `<ejs-tab id="tab" #Tab> </ejs-tab>`<br/> **TS:**<br/>  @ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.addItem([{ header: 'App', content: 'text' }], 0);|
| BeforeRemove | **Event:** beforeItemRemove <br/> `<ej-tab id='tab' (beforeItemRemove)='onbeforeItemRemove($event)'></ej-tab>`<br/> **TS:**<br/> onbeforeItemRemove(event){  }  | **Event:** removing <br/> `<ejs-tab id="tab" #Tab (removing)='onremoving($event)'></ejs-tab>`<br/> **TS:**<br/> onremoving(event){  } |
| AfterRemove | **Event:** afterRemove <br/> `<ej-tab id='tab' (itemRemove)='onitemRemove($event)'></ej-tab>`<br/> **TS:**<br/> onitemRemove(event){  }  | **Event:** removed <br/> `<ejs-tab id="tab" #Tab (removed)='onremoved($event)'></ejs-tab>`<br/> **TS:**<br/> onremoved(event){  } |
| Select item |<b>Not Applicable</b>| **Method** :select(index)<br/> `<ejs-tab id="tab" #Tab> </ejs-tab>`<br/> **TS:**<br/>  @ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.select(1);|
| SelectedItemIndex | **Property** : selectedItemIndex <br/> `<ej-tab id="tab" selectedItemIndex="1" > </ej-tab>`| **Property** : selectedItem <br/> `<ejs-tab id="tab" selectedItem="1" > </ejs-tab>` |
| BeforeActive | **Event:** beforeActive<br/> `<ejs-tab id="tab" #Tab (beforeActive)='onbeforeActive($event)'></ejs-tab>`<br/> **TS:**<br/> onbeforeActive(event){  } |  **Event:** selecting<br/> `<ejs-tab id="tab" #Tab (selecting)='onselecting($event)'></ejs-tab>`<br/> **TS:**<br/> onselecting(event){  } |
| AfterActive | **Event:** itemActive<br/> `<ejs-tab id="tab" #Tab (itemActive)='onitemActive($event)'></ejs-tab>`<br/> **TS:**<br/> onitemActive(event){  } |  **Event:** selected<br/> `<ejs-tab id="tab" #Tab (selected)='onselected($event)'></ejs-tab>`<br/> **TS:**<br/> onselected(event){  } |
| Disable items | **Property** : disabledItemIndex <br/> `<ej-tab id="tab" disabledItemIndex="[1,2]" > </ej-tab>`| <b>Not Applicable</b> |
| Enable items | **Property** : enabledItemIndex <br/> `<ej-tab id="tab" enabledItemIndex="[1,2]" > </ej-tab>`| <b>Not Applicable</b> |
| Enable/Disable item |<b>Not Applicable</b> | **Property** : items[0].disabled <br/> `<ejs-tab id="tab" [items]="items" > </ejs-tab>`<br/> **TS:**<br/>public items: Object[] = [{ disabled: true  }]; |
| Hide items | **Property** : hiddenItemIndex <br/> `<ej-tab id="tab" hiddenItemIndex="[1,2]" > </ej-tab>` |<b>Not Applicable</b> |
| Hide item |**Method** : hideItem(index) <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.hideItem(1);| **Method** :hideTab(index, true) <br/> `<ejs-tab id="tab" #Tab> </ejs-tab>`<br/> **TS:**<br/>  @ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.hideTab(1, true);|
| Show item |**Method** : showItem(index)<br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.showItem(1);| **Method** : hideTab(index, false) <br/> `<ejs-tab id="tab" #Tab> </ejs-tab>`<br/> **TS:**<br/>  @ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.hideTab(1, false);|

## Common

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Collapse active item | **Property** : collapsible <br/> `<ej-tab id="tab" [collapsible]="true"> </ej-tab>`| <b>Not Applicable</b> |
| Custom class | **Property** : cssClass <br/> `<ej-tab id="tab" cssClass="customClass" > </ej-tab>`| **Property** : cssClass <br/> `<ejs-tab id="tab" cssClass="customClass" > </ejs-tab>` |
| Enabled | **Property** : enabled <br/> `<ej-tab id="tab" enabled="false"> </ej-tab>`| **Method** : disable(false)<br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/>TabObj.disable(false); |
| Persistence | **Property** : enablePersistence <br/> `<ej-tab id="tab" [enablePersistence]="false" > </ej-tab>`| **Property** : enablePersistence <br/> `<ejs-tab id="tab" [enablePersistence]="false" > </ejs-tab>` |
| Events | **Property** : events <br/> `<ej-tab id="tab" events="click" > </ej-tab>`| <b>Not Applicable</b> |
| Height | **Property** : height <br/> `<ej-tab id="Tab" height="100%" > </ej-tab>`| **Property** : height <br/> `<ejs-tab id="Tab" height="100%" > </ejs-tab>` |
| HeightAdjustMode | **Property** : heightAdjustMode <br/> `<ej-tab id="Tab" heightAdjustMode="Content" > </ej-tab>`| **Property** : heightAdjustMode <br/> `<ejs-tab id="Tab" heightAdjustMode="Content" > </ejs-tab>` |
| HtmlAttributes | **Property** : htmlAttributes <br/> `<ej-tab id="Tab" [htmlAttributes]="attributes" > </ej-tab>`<br/> **TS:**<br/> public attributes: Object = {class: "my-class"};|<b>Not Applicable</b>|
| ID prefix | **Property** : idPrefix <br/> `<ej-tab id="Tab" [idPrefix]="ej-tab-" > </ej-tab>`| <b>Not Applicable</b>|
| ShowCloseButton | **Property** : showCloseButton <br/> `<ej-tab id="Tab" [showCloseButton]="true" > </ej-tab>`| **Property** : showCloseButton <br/> `<ejs-tab id="Tab" [showCloseButton]="true" > </ejs-tab>`|
| showReloadIcon | **Property** : showReloadIcon <br/> `<ej-tab id="Tab" [showReloadIcon]="true" > </ej-tab>`| <b>Not Applicable</b> |
| ShowRounderCorner | **Property** : showRoundedCorner <br/> `<ej-tab id="Tab" [showRoundedCorner]="true" > </ej-tab>`| <b>Not Applicable</b> |
| Destroy | **Method** : destroy() <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.destroy(); | **Method** : destroy() <br/> `<ejs-tab id="tab" #Tab></ejs-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.destroy(); |
| Disable Tab | **Method** : disable() <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.disable(); | **Method** :  disable(true) <br/> `<ejs-tab id="Tab" #Tab></ejs-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.disable(true); |
| Enable Tab | **Method** : enable() <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.enable(); | **Method** : disable(false) <br/> `<ejs-tab id="Tab" #Tab></ejs-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.disable(false); |
| Show Tab | **Method** : show() <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.show(); | <b>Not Applicable</b> |
| Hide Tab | **Method** : hide() <br/> `<ej-tab id="Tab" #Tab></ej-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.hide(); | <b>Not Applicable</b> |
| Refresh | <b>Not Applicable</b> | **Method** : refresh() <br/> `<ejs-tab id="tab" #Tab></ejs-tab>`<br/> **TS:**<br/>@ViewChild('Tab') public TabObj: TabComponent;<br/> TabObj.refresh(); |
| Created | **Event:** create<br/> `<ej-tab id="tab" #Tab (create)='oncreate($event)'></ej-tab>`<br/> **TS:**<br/> oncreate(event) {  } | **Event:** created<br/> `<ejs-tab id="tab" #Tab (created)='oncreated($event)'></ejs-tab>`<br/> **TS:**<br/> oncreated(event) {  } |
| Destroyed | **Event:** destroy<br/> `<ej-tab id="tab" #Tab (destroy)='ondestroy($event)'></ej-tab>`<br/> **TS:**<br/> ondestroy(event) {  } | **Event:** destroyed<br/> `<ejs-tab id="tab" #Tab (destroyed)='ondestroyed($event)'></ejs-tab>`<br/> **TS:**<br/> ondestroyed(event) {  } |