---
layout: post
title: Ej1 api migration in Angular Splitter component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Splitter component

This article describes the API migration process of Splitter component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Common

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Adding custom class | **Property:** *cssClass* <br /><br /> `<ej-splitter id="splitter" cssClass="customClass"></ej-splitter>` | **Property:** *cssClass* <br />`<ejs-splitter id=”splitter” cssClass=”customClass”></ejs-splitter>` <br /> |
| Adjusting Height | **Property:** *height* <br /><br /> `<ej-splitter id="splitter" height="100%"></ej-splitter>` | **Property:** *height* <br /> `<ejs-splitter id=”splitter” height=”100%”></ejs-splitter>` |
| Adjusting Width | **Property:** *width* <br /><br /> `<ej-splitter id=”splitter” width=”600”></ej-splitter>` | **Property:** *width* <br /><br /> `<ejs-splitter id=”splitter” width=”100%”></ejs-splitter>` |
| Orientation | **Property:** *orientation* <br /><br /> `<ej-splitter id=”splitter”  [orientation]=”orientation”></ej-splitter>`<br/> **TS:**<br/> export class AppComponent {<br/> orientation: any; <br/> constructor() {<br/> this.orientation =<br/>ej.Orientation.Horizontal;<br/>} }<br/> | **Property:** *orientation* <br /> <br /> `<ejs-splitter id=”splitter” orientation=”Horizontal”></ejs-splitter>` |
| Separator Size | Not Available | **Property:** *separatorSize* <br /> <br /> `<ejs-splitter id=”splitter” separatorSize=4></ejs-splitter>` |
| Adding HTML attributes | **Property:** *htmlAttributes* <br /><br /> `<ej-splitter id=”splitter”  [htmlAttributes]=”htmlAttributes”></ej-splitter>`<br/> **TS:**<br/> export class AppComponent {<br/> htmlAttributes: any; <br/> constructor() { <br/>this.htmlAttributes = {<br/> class: “my-class”, <br/>style: “border: 1px solid red”}<br/> }} | Not Available |
| Customize expand/collapse icons | **Property:** <br /> *expanderTemplate* <br /><br /> `<ej-splitter id=”splitter”  expanderTemplate=‘<img class=”eimg” src=”expander.png” alt=”employee”/>’></ej-splitter>` | Not Available |
| Make control flexible for mobile view | **Property:** *isResponsive* <br /><br /> `<ej-splitter id=”splitter”  isResponsive=”true”></ej-splitter>` | By default, Splitter works with mobile mode.|
| Refresh the Splitter | **Method:** *refresh()* <br /><br /> `<ej-splitter id=”splitter” #splitter></ej-splitter>`<br/>**TS:**<br/> @ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>SplitterObj.refresh();<br/> | **Method:** *refresh()* <br /><br /> `<ejs-splitter id=”splitter” #splitter></ejs-splitter>`<br/>**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>SplitterObj.refresh();<br/> |
| Destroy the Control | **Method:** *destroy()* <br /><br /> `<ej-splitter id=”splitter” #splitter></ej-splitter>` <br/>**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>SplitterObj.destroy();<br/> | **Method:** *destroy()* <br /> `<ejs-splitter id=”splitter” #splitter></ejs-splitter>`<br/>**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>SplitterObj.destroy();<br/> | **Method:** *destroy()* <br /> |
| Event triggers after the Splitter created successfully | **Event:** *create* <br /><br /> `<ej-splitter id=”splitter” #splitter  (create)=’onCreate($event)’></ej-splitter>`<br/>**TS**<br/>onCreate(event){ }<br/> | **Event:** *created* <br /><br />`<ejs-splitter id=”splitter” #splitter (create)=’onCreate($event)’></ejs-splitter>`<br/>**TS**<br/>onCreate(event){ }<br/> |
| Event triggers when Splitter has been destroyed | **Event:**  *destroy* <br /><br /> `<ej-splitter id=”splitter” #splitter  (destroy)=’onDestroy($event)’></ej-splitter>` <br/>**TS**<br/>onDestroy(event){ }<br/> | Not Available |

## Accessibility and Localization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Keyboard Navigation | **Property:** *allowKeyboardNavigation* <br /><br /> `<ej-splitter id=”splitter” #splitter  allowKeyboardNavigation =’true’></ej-splitter>` | No separate property for enable/disable keyboard navigation.  Its enabled by default. |
| Right to Left | **Property:** *enableRTL* <br /><br /> `<ej-splitter id=”splitter” #splitter enableRTL =’false’></ej-splitter>` | **Property:** *enableRtl*<br /><br /> `<ejs-splitter id=”splitter” #splitter [enableRtl]=’false’></ejs-splitter>` |

## Control State

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Enable/Disable the control | Not Available | **Property:** *enabled* <br /><br /> `<ejs-splitter id=”splitter” #splitter [enabled]=’true’></ejs-splitter>` |

## State Maintenance

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Save the model value in local storage or cookies | Not Available | **Property:** *enablePersistence* <br /><br /> `<ejs-splitter id=”splitter” #splitter [enablePersistence] =’true’></ejs-splitter>` |

## Pane Properties

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property:** *properties* <br /><br /> `<ej-splitter id=”splitter” #splitter [properties]=”proper”></ej-splitter>`<br/>**TS**<br/>export class AppComponent{<br/>proper: any;<br/>constructor() {<br/>this.proper = [];<br/> } <br/>} | **Property:** *paneSettings* <br /> `<ejs-splitter id=”splitter” #splitter [paneSettings]=”panes”></ejs-splitter>`**TS**<br/>public panes: object[] = [];<br/>  |
| Pane Content | Not Available | **Property:** *content* <br /> `<ejs-splitter id=”splitter” #splitter [paneSettings]=”panes”></ejs-splitter>`<br/>**TS**<br/>public panes: object[] = [{<br/>content: ‘First Pane Content’}];<br/> |
| Change the size of the pane | **Property:** *paneSize* <br /> `<ej-splitter id=”splitter” #splitter [properties]=”proper”></ej-splitter>` <br/>**TS**<br/>export class AppComponent{<br/>proper: any;<br/>constructor() {<br/>this.proper = [{paneSize: “30px”}];<br/>}<br/>}<br/> | **Property:** *size* <br /> `<ejs-splitter id=”splitter” #splitter [paneSettings]=”panes”></ejs-splitter>`<br/>**TS**<br/>public panes: object[] = [{ size: ‘25%’}];<br/> |
| Minimum pane size | **Property:** *minSize* <br />`<ej-splitter id=”splitter” #splitter [properties]=”proper”></ej-splitter>`<br/>**TS**<br/>export class AppComponent{<br/>proper: any;<br/>constructor() {<br/>this.proper = [{minSize: 30}];<br/>}<br/>}<br/> | **Property:** *min* <br /><br />`<ejs-splitter id=”splitter” #splitter [paneSettings]=”panes”></ejs-splitter>`<br/>**TS**<br/>public panes: object[] = [{<br/>min: ‘60px’}];<br/> |
| Maximum pane size | **Property:** *maxSize* <br /><br />`<ej-splitter id=”splitter” #splitter [properties]=”proper”></ej-splitter>`<br/>**TS**<br/>export class AppComponent{<br/>proper: any;<br/>constructor() {<br/>this.proper = [{maxSize: 30}];<br/>}<br/>}<br/>| **Property:** *max* <br /><br />`<ejs-splitter id=”splitter” #splitter [paneSettings]=”panes”></ejs-splitter>`<br/>**TS**<br/>public panes: object[] = [{<br/>max: ‘60px’}];<br/> |
| Enable/Disable the Pane Resizable behavior | **Property:** *resizable* <br /><br />`<ej-splitter id=”splitter” #splitter [properties]=”proper”></ej-splitter>`<br />**TS**<br/>export class AppComponent{<br/>proper: any;<br/>constructor() {<br/>this.proper = [{resizable: false}];<br/>}<br/>}<br/> | **Property:** *resizable* <br /><br />`<ejs-splitter id=”splitter” #splitter [paneSettings]=”panes”></ejs-splitter>`<br/>**TS**<br/>public panes: object[] = [{<br/>resizable: false}];<br/> |
| Collapsible |**Property:** *collapsible* <br /><br />`<ej-splitter id=”splitter” #splitter [properties]=”proper”></ej-splitter>`<br />**TS**<br/>export class AppComponent{<br/>proper: any;<br/>constructor() {<br/>this.proper = [{collapsible: true}];<br/>}<br/>}<br/> | **Property:** *collapsible* <br /><br />`<ejs-splitter id=”splitter” #splitter [paneSettings]=”panes”></ejs-splitter>`<br/>**TS**<br/>public panes: object[] = [{<br/>collapsible: true}];<br/> |
| Expandable | **Property:** *expandable* <br /><br /> `<ej-splitter id=”splitter” #splitter [properties]=”proper”></ej-splitter>` <br />**TS**<br/>export class AppComponent{<br/>proper: any;<br/>constructor() {<br/>this.proper = [{expandable: true}];<br/>}<br/>}<br/> | Not Available |
| Collapsed | Not Available | **Property:** *collapsed* <br /><br />`<ejs-splitter id=”splitter” #splitter [paneSettings]=”panes”></ejs-splitter>`<br/>**TS**<br/>public panes: object[] = [{<br/>collapsed: true}];<br/> |
| Add Pane | **Method:** *addItem()* <br /><br />`<ej-splitter id=”splitter” #splitter></ej-splitter>`<br/>**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>splitterObj.addItem(“New Pane 0”, {<br/>paneSize: 20, minSize: 20, maxSize:<br/>100}, 0);<br/> |**Method:** *addPane()* <br /> <br /> `<ejs-splitter id=”splitter” #splitter></ejs-splitter>`<br/>**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>splitterObj.addPane({size:<br/>“25%”, content: “Pane”}, 0)<br/> |
| Remove Pane | **Method:** *removeItem()* <br /><br /> `<ej-splitter id=”splitter” #splitter></ej-splitter>`<br />**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>splitterObj.removeItem(0);<br/> | **Method:** *removePane()* <br /><br />`<ejs-splitter id=”splitter” #splitter></ejs-splitter>`<br/>**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>splitterObj.removePane(0);<br/> |
| Collapse Pane | **Method:** *collapse()* <br /><br /> `<ej-splitter id=”splitter” #splitter></ej-splitter>`<br />**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>SplitterObj.collapse(0);<br/> | **Method:** *collapse()* <br /><br />`<ejs-splitter id=”splitter” #splitter></ejs-splitter>`<br/>**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>splitterObj.collapse(0);<br/> |
| Expand Pane | **Method:** *expand()* <br /><br />`<ej-splitter id=”splitter” #splitter></ej-splitter>`<br />**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>SplitterObj.expand(0);<br/> | **Method:** *expand()* <br /><br />`<ejs-splitter id=”splitter” #splitter></ejs-splitter>`<br/>**TS**<br/>@ViewChild(‘splitter’) public<br/>splitterObj: SplitterComponent;<br/>SplitterObj.expand(0);<br/> |
| Event triggers when before panes get expanded/collapsed | **Event:** *beforeExpandCollapse* <br /><br />`<ej-splitter id=”splitter” #splitter  (beforeExpandCollapse)=’ beforeExpandCollapse($event)’></ej-splitter>`<br />**TS**<br/>beforeExpandCollapse(event){ }<br/> | **Event:** *beforeExpand* <br /><br />`<ejs-splitter id=”splitter” #splitter (beforeExpand)=’ beforeExpand($event)’></ejs-splitter>`<br />**TS**<br/>beforeExpand(event){ }<br/> **Event:** beforeCollapse <br />`<ejs-splitter id=”splitter” #splitter (beforeCollapse)=’ beforeCollapse ($event)’></ejs-splitter>`<br/>**TS**<br/>beforeCollapse(event){ }<br/> |
| Event triggers when after panes get expanded/collapsed | **Event:** *expandCollapse* <br /><br />`<ej-splitter id=”splitter” #splitter  (expandCollapse)=’ expandCollapse($event)’></ej-splitter>`<br />**TS**<br/>expandCollapse (event){ }<br/> | **Event:** *expand* <br /><br />`<ejs-splitter id=”splitter” #splitter (expand)=’ expand($event)’></ejs-splitter>`<br />**TS**<br/>expand(event){ }<br/> **Event:** collapse <br />`<ejs-splitter id=”splitter” #splitter (collapse)=’ collapse ($event)’></ejs-splitter>`<br/>**TS**<br/>collapse (event){ }<br/> |
|  Event triggers when Resizing the pane | **Event:** *resize* <br /><br />`<ej-splitter id=”splitter” #splitter  (resize)=’resize($event)’></ej-splitter>`<br />**TS**<br/>resize(event){ }<br/> | **Event:** *resizing* <br /><br />`<ejs-splitter id=”splitter” #splitter (resizing)=’ resizing ($event)’></ejs-splitter>`<br/>**TS**<br/>resizing (event){ }<br/> |
| Event triggers when pane is started to resize | Not Available | **Event:** *resizeStart* <br /><br />`<ejs-splitter id=”splitter” #splitter (resizeStart)=’resizeStart ($event)’></ejs-splitter>`<br/>**TS**<br/>resizeStart (event){ }<br/> |
| Event triggers when pane is stopped to resize | Not Available | **Event:** *resizeStop* <br /><br />`<ejs-splitter id=”splitter” #splitter (resizeStop)=’resizeStop($event)’></ejs-splitter>`<br/>**TS**<br/>resizeStop (event){ }<br/> |
| Event triggers when click template icon | **Event:** *clickOnExpander* <br /><br />`<ej-splitter id=”splitter” #splitter  (clickOnExpander)=’ clickOnExpander($event)’></ej-splitter>`<br />**TS**<br/>clickOnExpander(event){ }<br/> | Not Available |

## Animation

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| EnableAnimation | **Property:** *enableAnimation* <br /><br />`<ej-splitter id=”splitter” #splitter enableAnimation=”true”></ej-splitter>`<br /> &nbsp; | Not Available |
| AnimationSpeed | **Property:** *animationSpeed* <br /><br /> `<ej-splitter id=”splitter” #splitter animationSpeed =150></ej-splitter>` <br />&nbsp; | Not Available |