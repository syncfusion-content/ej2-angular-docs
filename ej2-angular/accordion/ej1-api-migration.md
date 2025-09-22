---
layout: post
title: EJ1 to EJ2 API Migration for Accordion | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# EJ1 to EJ2 API migration in Angular Accordion component

This guide assists developers in migrating the Accordion component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 EJ1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2 EJ2, mapping deprecated or changed APIs to their EJ2 equivalents. EJ2 offers improved Angular integration, modernized APIs, enhanced performance, and built-in accessibility features compared to EJ1. Key differences include EJ2’s use of `ng-template` for content rendering, `dataSource` for data binding, and native ARIA support.

## Accessibility and Localization

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Keyboard Navigation | **Property** : allowKeyboardNavigation<br/> `<ej-accordion id="Accordion" [allowKeyboardNavigation]="false" ></ej-accordion>`  | <b>Not Applicable</b> |
| Localization | <b>Not Applicable</b>  | **Property** : locale<br/> `<ejs-accordion id="Accordion" locale="fr-BE" ></ejs-accordion>`  |
| Right to left | **Property:** enableRTL<br/> `<ej-accordion id="Accordion" [enableRTL]="true"></ej-accordion>` | **Property:** enableRTL<br/> `<ejs-accordion id="Accordion" [enableRTL]="true"> </ejs-accordion>`  |

## AjaxSettings

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Default | **Property** : ajaxSettings<br/> `<ej-accordion id="accordion" [ajaxSettings.type]="GET"></ej-accordion>` | <b>Not Applicable</b>  |
| Asynchronous | **Property** : ajaxSettings.async <br/> `<ej-accordion id="accordion" [ajaxSettings.async]="true "></ej-accordion>`| <b>Not Applicable</b>  |
| Browser Cache | **Property**: ajaxSettings.cache<br/> `<ej-accordion id="accordion" [ajaxSettings.cache]="false "></ej-accordion>` | <b>Not Applicable</b> |
| Request type | **Property** : ajaxSettings.contentType<br/> `<ej-accordion id="accordion" [ajaxSettings.contentType]="html "></ej-accordion>` | <b>Not Applicable</b> |
| Data | **Property** : ajaxSettings.data<br/> `<ej-accordion id="accordion" [ajaxSettings.data]={}></ej-accordion>` | <b>Not Applicable</b> |
| Response type | **Property** : ajaxSettings.dataType <br/> `<ej-accordion id="accordion" [ajaxSettings.dataType]="html"></ej-accordion>` | <b>Not Applicable</b> |
| HTTP request type | **Property:** ajaxSettings.type<br/> `<ej-accordion id="accordion" [ajaxSettings.type]="GET"></ej-accordion>` | <b>Not Applicable</b> |
| AjaxBeforeLoad | **Event:** ajaxBeforeLoad<br/> `<ej-accordion id='accordion' (ajaxBeforeLoad)='onajaxBeforeLoad($event)'></ej-accordion>`<br/> **TS:**<br/> onajaxBeforeLoad (event){} | <b>Not Applicable</b> |
| AjaxError | **Event:** ajaxError<br/> `<ej-accordion id='accordion' (ajaxError)='onajaxError($event)'></ej-accordion>`<br/> **TS:**<br/> onajaxError (event){} | <b>Not Applicable</b> |
| AjaxLoad | **Event:** ajaxLoad<br/> `<ej-accordion id='accordion' (ajaxLoad)='onajaxLoad($event)'></ej-accordion>`<br/> **TS:**<br/> onajaxLoad (event){} | <b>Not Applicable</b> |
| AjaxSuccess | **Event:** ajaxSuccess<br/> `<ej-accordion id='accordion' (ajaxSuccess)='onajaxSuccess ($event)'></ej-accordion>`<br/> **TS:**<br/> onajaxSuccess (event){} | <b>Not Applicable</b> |

## Animation

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Default |<b>Not Applicable</b> | **Property** :animation<br/> `<ejs-accordion id='accordion' [animation]="animation"></ejs-accordion>`<br/> **TS:**<br/>  public animation: Object[] = [{collapse: { effect: 'FlipXDownIn', duration: 600, easing: 'ease' }, expand: { effect: 'FlipXUpIn', duration: 600, easing: 'ease' }}] |
| EnableAnimation | **Property** :animation<br/> `<ej-accordion id="Accordion" [enableAnimation]="false"></ej-accordion>`<br/> | <b>Not Applicable</b>|
| Expand animation |<b>Not Applicable</b> | **Property** :animation.expand<br/> `<ejs-accordion id='accordion' [animation]="animation"></ejs-accordion>`<br/>**TS:**<br/>public animation: Object[] = [{expand: { effect: 'SlideLeft', duration: 600, easing: 'ease-in' }}] |
| Collapse animation |<b>Not Applicable</b> | **Property** :animation.collapse<br/> `<ejs-accordion id='accordion' [animation]="animation"></ejs-accordion>`<br/>**TS:**<br/>public animation: Object[] = [{collapse: { effect: 'SlideLeft', duration: 600, easing: 'ease-in' }}] |
| Duration  [expand / collapse]|<b>Not Applicable</b> | **Property** :animation.collapse.duration<br/> `<ejs-accordion id='accordion' [animation]="animation"></ejs-accordion>`<br/>**TS:**<br/>public animation: Object[] = [{expand: { duration: 600 }}] |
| Easing  [expand / collapse] |<b>Not Applicable</b> | **Property** :animation.collapse.easing<br/> `<ejs-accordion id='accordion' [animation]="animation"></ejs-accordion>`<br/>**TS:**<br/>public animation: Object[] = [{expand: {  easing: 'ease-in' }}] |
| Effect  [expand / collapse] |<b>Not Applicable</b> | **Property** :animation.collapse.effect<br/> `<ejs-accordion id='accordion' [animation]="animation"></ejs-accordion>`<br/>**TS:**<br/>public animation: Object[] = [{expand: { effect: 'SlideLeft' }}] |

## Items

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Default | <b>Not Applicable</b> | **Property** : items<br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>` |
| Content | <b>Not Applicable</b> | **Property** : items[0].content <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/> public items: Object[] = [{ content: 'Contents'}];|
| Custom class | <b>Not Applicable</b>  | **Property** : items[0].cssClass <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/>  public items: Object[] = [{ cssClass: 'customClass'}];|
| Header| <b>Not Applicable</b> | **Property** : items[0].Header <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/>   public items: Object[] = [{ header: 'Header1'}];|
| HeaderSize| **Property** : items[0].headerSize <br/> `<ej-accordion id="Accordion" headerSize="50px" ></ej-accordion>`  | <b>Not Applicable</b> |
| Icon class |<b>Not Applicable</b> | **Property** : items[0].iconCss <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/> public items: Object[] = [{ iconCss: 'e-icons' }];|
| IsExpand | <b>Not Applicable</b> | **Property** : items[0].expanded <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/> public items: Object[] = [{ expanded: true }];|
| Collapse Item |**Method** : collapsePanel(index) <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.collapsePanel(0);| **Method** : expandItem(index, false) <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/>  @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.expandItem(0, false);|
| Expand Item |**Method** : expandPanel(index) <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.expandPanel(0);| **Method** :expandItem(index, true) <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/>  @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.expandItem(0, true);|
| CollapseAll |**Method** : collapseAll() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.collapseAll();| <b>Not Applicable</b> |
| ExpandAll |**Method** : expandAll() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.expandAll();| <b>Not Applicable</b> |
| Get ItemsCount |**Method** : getItemsCount() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.getItemsCount();| <b>Not Applicable</b> |
| AddItem |**Method** : addItem(text, content, index) <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.addItem("New item", "The accordion content", 2);| **Method** : addItem(items, index) <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/>  @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.addItem([{ header: 'App', content: 'text' }], 0);|
| Remove Item |**Method** : removeItem(index) <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.removeItem(0);| **Method** : removeItem(index)  <br/> `<ejs-accordion id="Accordion" [items]="items"> </ejs-accordion>`<br/> **TS:**<br/>  @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.removeItem(index);|
| Disable Items |**Property** : disabledItems <br/> `<ej-accordion id="Accordion" disabledItems="[0, 1]"></ej-accordion>`| <b>Not Applicable</b> |
| Enable Items |**Property** : enabledItems <br/> `<ej-accordion id="Accordion" enabledItems="[0, 1]"></ej-accordion>`| <b>Not Applicable</b> |
| Disable Item |**Method** : disableItems([index]) <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.disableItems([1]);| **Method** : enableItem(index, false) <br/> `<ejs-accordion id="Accordion" #Accordion></ejs-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.enableItem(0, false); |
| Enable Item |**Method** : enableItems([index]) <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/>AccordionObj.enableItems([1]);| **Method** :  enableItem(index, true)  <br/> `<ejs-accordion id="Accordion" #Accordion></ejs-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.enableItem(0, true); |
| Hide Item | <b>Not Applicable</b> | **Method** :  hideItem(index, true)  <br/> `<ejs-accordion id="Accordion" #Accordion></ejs-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.hideItem(0, true) |
| SelectedItemIndex | **Property** : selectedItemIndex  <br/> `<ej-accordion id="Accordion" #Accordion [selectedItemIndex]="false"></ej-accordion>`<br/>  | <b>Not Applicable</b> |
| Select | <b>Not Applicable</b> | **Method** : select(index) <br/> `<ejs-accordion id="Accordion" #Accordion></ejs-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.select(0); |
| BeforeActivate | **Event:** beforeActivate<br/> `<ej-accordion id='accordion' (beforeActivate)='onbeforeActivate($event)'></ej-accordion>`<br/> **TS:**<br/> onbeforeActivate(event){}  | **Event:** expanding<br/> `<ejs-accordion id="Accordion" #Accordion (expanding)='onexpanding($event)'></ejs-accordion>`<br/> **TS:**<br/> onexpanding(event){}  |
| Activate | **Event:** activate<br/> `<ej-accordion id='accordion' (activate)='onActivate($event)'></ej-accordion>`<br/> **TS:**<br/> onActivate(event){}  | **Event:** expanded <br/> `<ejs-accordion id="Accordion" #Accordion (expanded )='onexpanded($event)'></ejs-accordion>`<br/> **TS:**<br/> onexpanded(event){} |
| beforeInActivate | **Event:** beforeInactivate <br/> `<ej-accordion id='accordion' (beforeInactivate)='onbeforeInactivate($event)'></ej-accordion>`<br/> **TS:**<br/> onbeforeInactivate(event){}  | <b>Not Applicable</b> |
| InActive | **Event:** inActivate<br/> <ej-accordion id='accordion' (inActivate)='onInActivate($event)'></ej-accordion>`<br/> **TS:**<br/> onInActivate(event){} | <b>Not Applicable</b> |
| Clicked | **Event:** clicked<br/> `<ejs-accordion id="Accordion" #Accordion (clicked)='onclicked($event)'></ejs-accordion>`<br/> **TS:**<br/> onclicked (event){} | <b>Not Applicable</b> |

## Common

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Collapsible | **Property** : collapsible <br/> `<ej-accordion id="Accordion" [collapsible]="false"> </ej-accordion>`| <b>Not Applicable</b> |
| Collapse speed | **Property** : collapseSpeed <br/> `<ej-accordion id="Accordion"  collapseSpeed="500"> </ej-accordion>`| <b>Not Applicable</b> |
| Custom class | **Property** : cssClass <br/> `<ej-accordion id="Accordion" cssClass="custom" > </ej-accordion>`| <b>Not Applicable</b> |
| CustomIcon class | **Property:** customIcon<br/> `<ej-accordion id="Accordion" customIcon="custom" > </ej-accordion>`<br/> **TS:**<br/> public custom: Object = {header: "header-close", selectedHeader: "header-expand"}; | <b>Not Applicable</b> |
| Enabled | **Property** : enabled <br/> `<ej-accordion id="Accordion" enabled="false" > </ej-accordion>`| <b>Not Applicable</b> |
| Events | **Property** : events <br/> `<ej-accordion id="Accordion" events="mouseover" > </ej-accordion>`| <b>Not Applicable</b> |
| Expand speed | **Property** : expandSpeed <br/> `<ej-accordion id="Accordion" expandSpeed="300" > </ej-accordion>`| <b>Not Applicable</b> |
| Height | **Property** : height <br/> `<ej-accordion id="Accordion" height="400" > </ej-accordion>`| **Property** : height <br/> `<ejs-accordion id="Accordion" height="400" > </ejs-accordion>` |
| HeightAdjustMode | **Property** : heightAdjustMode <br/> `<ej-accordion id="Accordion" heightAdjustMode="content" > </ej-accordion>`| <b>Not Applicable</b> |
| HtmlAttributes | **Property** : htmlAttributes <br/> `<ej-accordion id="Accordion" [htmlAttributes]="attributes" > </ej-accordion>`<br/> **TS:**<br/> public attributes: Object = {title: "Demo"};| <b>Not Applicable</b> |
| MultipleOpen | **Property** : enableMultipleOpen <br/> `<ej-accordion id="Accordion" [enableMultipleOpen]="true" > </ej-accordion>`| **Property** : expandMode <br/> `<ejs-accordion id="Accordion" [expandMode]="Multiple" > </ejs-accordion>` |
| Persistence | **Property** : enablePersistence <br/> `<ej-accordion id="Accordion" [enablePersistence]="false" > </ej-accordion>`| **Property** : enablePersistence <br/> `<ejs-accordion id="Accordion" [enablePersistence]="true" > </ejs-accordion>` |
| ShowRounderCorner | **Property** : showRoundedCorner <br/> `<ej-accordion id="Accordion" [showRoundedCorner]="false" > </ej-accordion>`| <b>Not Applicable</b> |
| Width | **Property** : width <br/> `<ej-accordion id="Accordion" [width]="600" > </ej-accordion>`| **Property** : width <br/> `<ejs-accordion id="Accordion" [width]="400" > </ejs-accordion>` |
| Enable | **Method** : enable() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.enable(); | <b>Not Applicable</b> |
| Disable | **Method** : disable() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.disable(); | <b>Not Applicable</b> |
| Show | **Method** : show() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.show(); | <b>Not Applicable</b> |
| Hide | **Method** : hide() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.hide(); | <b>Not Applicable</b> |
| Destroy | **Method** : destroy() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.destroy(); | **Method** : destroy() <br/> `<ejs-accordion id="Accordion" #Accordion></ejs-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.destroy(); |
| Refresh | **Method** : refresh() <br/> `<ej-accordion id="Accordion" #Accordion></ej-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.refresh(); | **Method** : refresh() <br/> `<ejs-accordion id="Accordion" #Accordion></ejs-accordion>`<br/> **TS:**<br/> @ViewChild('Accordion') public AccordionObj: AccordionComponent;<br/> AccordionObj.refresh(); |
| Created | **Event:** create<br/> `<ej-accordion id="Accordion" #Accordion (create)='oncreate($event)'></ej-accordion>`<br/> **TS:**<br/> oncreate(event) {} | **Event:** created<br/> `<ejs-accordion id="Accordion" #Accordion (created)='oncreated($event)'></ejs-accordion>`<br/> **TS:**<br/> oncreated(event) {} |
| Destroyed | **Event:** destroy<br/> `<ej-accordion id="Accordion" #Accordion (destroy)='ondestroy($event)'></ej-accordion>`<br/> **TS:**<br/> ondestroy(event) {} | **Event:** destroyed<br/> `<ejs-accordion id="Accordion" #Accordion (destroyed)='ondestroyed($event)'></ejs-accordion>`<br/> **TS:**<br/> ondestroyed(event) {} |