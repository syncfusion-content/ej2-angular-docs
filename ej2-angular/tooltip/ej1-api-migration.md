---
layout: post
title: Ej1 api migration in Angular Tooltip component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Tooltip component

This article describes the API migration process of Tooltip component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Position | **Property:**  *position*  <br  /> `<ej-tooltip content='Tooltip' [position]='target'>Tooltip</ej-tooltip>`<br/><br/>`public  target  = {` <br/> `target: {` <br/> `horizontal:  'center',`<br/> `vertical:  'top'`<br/> `},`<br/> `stem: {`<br/> `horizontal:  'center',`<br/> `vertical:  'bottom'`<br/> `}`| **Property:**  *position*  <br  />`<ejs-tooltip position="TopCenter" content='Tooltip'>Tooltip</ejs-tooltip>`|
| Animation | **Property:**  *animation*  <br/> `<ej-tooltip content='Tooltip' [animation ]='animation '>Tooltip</ej-tooltip>`<br/><br/>`public  animation  = { effect :  "slide", speed :  1000};` | **Property:**  *animation*  <br  />`<ejs-tooltip [animation]="animation" content='Tooltip'>Tooltip</ejs-tooltip>`<br  /><br  />`public animation = { open: { effect: 'FadeIn', duration: 150, delay: 0 }, close: { effect: 'FadeOut', duration: 150, delay: 0 } }`|
| Close Time Out | **Property:**  *autoCloseTimeout*  <br  />`<ej-tooltip content='Tooltip' autoCloseTimeout=5000>Tooltip</ej-tooltip>`| **Property:**  *closeDelay, openDelay*  <br  />  `<ejs-tooltip [openDelay]="500" [closeDelay]="500" content='Tooltip'>Tooltip</ejs-tooltip>` |
| Sticky Mode |**Property :**  *closeMode*  <br  />`<ej-tooltip content='Tooltip' closeMode ='sticky'>Tooltip</ej-tooltip>` |**Property:**  *isSticky*  <br  />`<ejs-tooltip [isSticky]="true" content='Tooltip'>Tooltip</ejs-tooltip>` |
| Offset from target |**Property :**  *tip.adjust.xValue/ tip.adjust.yValue*  <br  />`<ej-tooltip content='Tooltip' [tip ]='tip '>Tooltip</ej-tooltip>`<br/><br/>`public  tip  = { size : { width :  25, height :  12}, adjust : {xValue :  5, yValue:  6}};`| **Property:**  *offsetX/ offsetY*  <br  />  `<ejs-tooltip [offsetX]="10" [offsetY]="10" content='Tooltip'>Tooltip</ejs-tooltip>`|
| Mouse trail on target | **Property :**  *associate*  <br  />`<ej-tooltip content='Tooltip' associate='mouse'>Tooltip</ej-tooltip>`| **Property:**  *mouseTrail*  <br  />`<ejs-tooltip [mouseTrail]="true" content='Tooltip'>Tooltip</ejs-tooltip>` |
| Open mode of tooltip | **Not Applicable** | **Property:**  *opensOn*  <br  />`<ejs-tooltip [opensOn]="Click" content='Tooltip'>Tooltip</ejs-tooltip>`|
| Enable disable the tip of tooltip |  **Property :**  *isBalloon*  <br  />`<ej-tooltip content='Tooltip' [isBalloon]='false'>Tooltip</ej-tooltip>` | **Property:**  *showTipPointer*  <br  />`<ejs-tooltip [showTipPointer]="false" content='Tooltip'>Tooltip</ejs-tooltip>` |
| Hide | **Method:**  *hide()*  <br  /> `<ej-tooltip #tooltipInstance content='Tooltip'>Tooltip</ej-tooltip>`<br  /><br  />`this.tooltipInstance.widget.hide();`| **Method:**  *close()*  <br  />`<ejs-tooltip #tooltipInstance content='Tooltip'>Tooltip</ejs-tooltip>`<br  /><br  />`this.tooltipInstance.close();`|
| Show | **Method:**  *show()*  <br  /> `<ej-tooltip #tooltipInstance content='Tooltip'>Tooltip</ej-tooltip>`<br  /><br  />`this.tooltipInstance.widget.show();`| **Method:**  *open()*  <br  />`<ejs-tooltip #tooltipInstance content='Tooltip'>Tooltip</ejs-tooltip>`<br  /><br  />`this.tooltipInstance.open();`|
| Close | **Event:**  *close*  <br  />`<ej-tooltip content='Tooltip' (close)="close">Tooltip</e-tooltip>`<br  /><br  />`public close() { };` | **Event:**  *afterClose*  <br  />`<ejs-tooltip content='Tooltip' (afterClose)="onAfterClose">Tooltip</ejs-tooltip>`<br  /><br  />`public onAfterClose() { };`|
| Open | **Event:**  *open*  <br  /> `<ej-tooltip content='Tooltip' (open )="open ">Tooltip</e-tooltip>`<br  /><br  />`public open () { };`  | **Event:**  *afterOpen*  <br  />  `<ejs-tooltip content='Tooltip' (onAfterOpen)="afterOpen">Tooltip</ejs-tooltip>`<br  /><br  />`public onAfterOpen() { };`
| Before Collision | **Not Applicable** | **Event:**  *beforeCollision*  <br  />`<ejs-tooltip content='Tooltip' (onBeforeCollision)="beforeCollision">Tooltip</ejs-tooltip>`<br  /><br  />`public onBeforeCollision() { };`|
| Tracking| **Event:**  *tracking*  <br  />`<ej-tooltip content='Tooltip' (tracking )="tracking ">Tooltip</e-tooltip>`<br  /><br  />`public tracking () { };` | **Method:**  *open(),close(),refresh()*  <br  />`<ejs-tooltip #tooltip id="targetContainer" #tooltip content="Drag me anywhere, to start walking with me !!!" [offsetX]="-15" target="#demoSmart" [animation]="tooltipAnimation">`<br  />`<div id="demoSmart"> </div>`<br  />`</ejs-tooltip>`<br  /><br  />`let ele: HTMLElement = document.getElementById('demoSmart');`<br  />`let`  <br  />`drag: Draggable = new Draggable(ele, {`<br  />`clone: false,`<br  />`dragArea: '#targetContainer',`<br  />`drag: (args: any) => {`<br  />`if (args.element.getAttribute('data-tooltip-id') === null) {`<br  />`tooltip.open(args.element);`<br  />`} else {`<br  />`tooltip.refresh(args.element);`<br  />`}`<br  />`},`<br  />`dragStart: (args: any) => {`<br  />`if (args.element.getAttribute('data-tooltip-id') !== null) { return; }`<br  />`tooltip.open(args.element);`<br  />`},`<br  />`dragStop: (args: any) => {`<br  />`tooltip.close();`<br  />`}`<br  />`});` |