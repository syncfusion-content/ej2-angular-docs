---
layout: post
title: Api tooltipComponent in Angular Tooltip component | Syncfusion
description: Learn here all about Api tooltipComponent in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Api tooltipComponent 
documentation: ug
domainurl: ##DomainURL##
---

# Api tooltipComponent in Angular Tooltip component

Represents the Angular Tooltip component that displays a piece of information about the target element on mouse hover.
```
<ej-tooltip content='Tooltip content'>Show Tooltip</ej-tooltip>
```

## Properties

### animation [`AnimationModel`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipModel/)

We can set the same or different animation option to Tooltip while it is in open or close state.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/animation?lang=typescript here} to know more about this property with demo.

Defaults to *{ open: { effect: 'FadeIn', duration: 150, delay: 0 }, close: { effect: 'FadeOut', duration: 150, delay: 0 } }*

### closeDelay `number`

It is used to close the Tooltip after a specified delay in milliseconds.

Defaults to *0*

### content `string` &#124;  `HTMLElement`

It is used to display the content of Tooltip which can be both string and HTML Elements.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/content?lang=typescript here} to know more about this property with demo.

### cssClass `string`

It is used to customize the Tooltip which accepts custom CSS class names that defines specific user-defined styles and themes to be applied on the Tooltip element.

Defaults to *null*

### enablePersistence `boolean`

Enable or disable persisting component's state between page reloads.

Defaults to *false*

### enableRtl `boolean`

It is used to display the Tooltip and content of Tooltip from right to left direction.

Defaults to *false*

### height `string` &#124;  `number`

It is used to set the height of Tooltip component which accepts both string and number values.
When Tooltip content gets overflow due to height value then the scroll mode will be enabled.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/setting-dimension?lang=typescript here} to know more about this property with demo.

Defaults to *'auto'*

### isSticky `Boolean`

It is used to display the Tooltip in an open state until closed by manually.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/open-mode?lang=typescript#sticky-mode here} to know more about this property with demo.

Defaults to *false*

### locale `string`

Overrides the global culture and localization value for this component. Default global culture is 'en-US'.

Defaults to *undefined*

### mouseTrail `boolean`

It allows the Tooltip to follow the mouse pointer movement over the specified target element.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/position?lang=typescript#mouse-trailing here} to know more about this property with demo.

Defaults to *false*

### offsetX `number`

It sets the space between the target and Tooltip element in X axis.

Defaults to *0*

### offsetY `number`

It sets the space between the target and Tooltip element in Y axis.

Defaults to *0*

### openDelay `number`

It is used to open the Tooltip after the specified delay in milliseconds.

Defaults to *0*

### opensOn `string`

It is used to determine the device mode to display the Tooltip content.
If it is in desktop, it will show the Tooltip content when hovering on the target element.
If it is in touch device, it will show the Tooltip content when tap and holding on the target element.

Defaults to *'Auto'*

### position [`Position`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#position)

It is used to set the position of Tooltip element, with respect to Target element.

Defaults to *'TopCenter'*

### showTipPointer `boolean`

It is used to show or hide the tip pointer of Tooltip.

Defaults to *true*

### target `string`

It is used to denote the target selector where the Tooltip need to be displayed.
The target element is considered as parent container.

### tipPointerPosition [`TipPointerPosition`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tipPointerPosition/)

It is used to set the position of tip pointer on tooltip.
When it sets to auto, the tip pointer auto adjusts within the space of target's length and does not point outside.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/position?lang=typescript#tip-pointer-positioning here} to know more about this property with demo.

Defaults to *'Auto'*

### width `string` &#124;  `number`

It is used to set the width of Tooltip component which accepts both string and number values.
When set to auto, the Tooltip width gets auto adjusted to display its content within the viewable screen.

Defaults to *'auto'*

## Methods

### close

It is used to hide the Tooltip with specific animation effect.

| Parameter | Type | Description |
|------|------|-------------|
| animation (*optional*) |  [`TooltipAnimationSettings`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipAnimationSettings/) | Sets the specific animation when hiding Tooltip from the screen. |

Returns *void*

### destroy

It is used to destroy the Tooltip component.

Returns *void*

### open

It is used to show the Tooltip on the specified target with specific animation settings.

| Parameter | Type | Description |
|------|------|-------------|
| element |  `HTMLElement` | Target element where the Tooltip is to be displayed. |
| animation (*optional*) |  [`TooltipAnimationSettings`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipAnimationSettings/) | Sets the specific animation, while showing the Tooltip on the screen. |

Returns *void*

### refresh

It is used to refresh the Tooltip content and its position.

| Parameter | Type | Description |
|------|------|-------------|
| target (*optional*) |  `HTMLElement` | Target element where the Tooltip content or position needs to be refreshed. |

Returns *void*

## Events

### afterClose [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipEventArgs/)

We can trigger `afterClose` event when the Tooltip Component gets closed.

### afterOpen [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipEventArgs/)

We can trigger `afterOpen` event after the Tooltip Component gets opened.

### beforeClose [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipEventArgs/)

We can trigger `beforeClose` event before the Tooltip hides from the screen. If returned false, then the Tooltip is no more hidden.

### beforeCollision [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipEventArgs/)

We can trigger `beforeCollision` event for every collision fit calculation.

### beforeOpen [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipEventArgs/)

We can trigger `beforeOpen` event before the Tooltip is displayed over the target element.
When one of its arguments `cancel` is set to true, the Tooltip display can be prevented.
This event is mainly used for the purpose of refreshing the Tooltip positions dynamically or to set customized styles in it and so on.

### beforeRender [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipEventArgs/)

We can trigger `beforeRender` event before the Tooltip and its contents are added to the DOM.
When one of its arguments `cancel` is set to true, the Tooltip can be prevented from rendering on the page.
This event is mainly used for the purpose of customizing the Tooltip before it shows up on the screen.
For example, to load the AJAX content or to set new animation effects on the Tooltip, this event can be opted.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/content?lang=typescript#dynamic-content-via-ajax here} to know more about this property with demo.

### created  `EmitType<Object>`

We can trigger `created` event after the Tooltip component is created.

### destroyed  `EmitType<Object>`

We can trigger `destroyed` event when the Tooltip component is destroyed.
