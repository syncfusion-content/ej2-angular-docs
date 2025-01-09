---
layout: post
title: Ej1 api migration in Angular Range Slider component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Range Slider component

This article describes the API migration process of Slider component from Essential JS 1 to Essential JS 2

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Max value | **Property:**  *maxValue*  <br/> <br/> `<ej-slider id='slider' maxValue="100"></ej-slider>` | **Property:**  *max*  <br/> <br/> `<ejs-slider id='slider' max='100'></ejs-slider>` |
| Min value | **Property:**  *minValue*  <br/> <br/> `<ej-slider id='slider' minValue="100"></ej-slider>` | **Property:**  *min*  <br/> <br/> `<ejs-slider id='slider' min='20'></ejs-slider>` |
| Step | **Property:**  *incrementStep, largeStep, smallStep, showSmallTicks*  <br/> <br/> `<ej-slider id='slider' incrementStep="20" smallStep="5" largeStep="40" showSmallTicks="true"></ej-slider>`| **Property:**  *ticks*  <br/> <br/> `public ticks = { placement: ‘After’, largeStep: 20, smallStep: 10, showSmallTicks: true };` <br/> <br/> `<ejs-slider id='slider' [ticks]='ticks'></ejs-slider>` |
| Type | **Property:**  *sliderType*  <br/> <br/> `<ej-slider id='slider' sliderType='range'></ej-slider>` | **Property:**  *type*  <br/> <br/> `<ejs-slider id='slider' type='Range'></ejs-slider>` |
| Tooltip | **Property:**  *showTooltip*  <br/> <br/> `<ej-slider id='slider' showTooltip="true"></ej-slider>` | **Property:**  *tooltip*  <br/> <br/> `public tooltip = { placement: ‘Before’, isVisible: true, showOn: ‘Always’ };` <br/> <br/> `<ejs-slider id='slider' [tooltip]='tooltip'></ejs-slider>` |
| RTL | **Property:**  *enableRTL*  <br/> <br/> `<ej-slider id='slider' enableRTL="true"></ej-slider>` | **Property:**  *enableRtl*  <br/> <br/> `<ejs-slider id='slider' enableRtl='false'></ejs-slider>` |
| Custom values | **Not Applicable** | **Property:**  *customValues*  <br/> <br/> `public customValues = [‘Mon’, ‘Tue’, ‘Wed’];` <br/> <br/> `<ejs-slider id='slider' customValues='customValues'></ejs-slider>` |
| Limit the slider movement | **Not Applicable** | **Property:**  *limits*  <br/> <br/> `public limits = { enabled: true, minStart: 10, minEnd: 40 };` <br/> <br/> `<ejs-slider id='slider' type='MinRange' limits='limits'></ejs-slider>` |
| Disable | **Method:**  *disable*  <br/> <br/> `<ej-slider #slider id='slider'></ej-slider>` <br/> <br/> `this.sliderObj.disable();` | **Property:**  *enabled*  <br/> <br/> `<ejs-slider id='slider' enable='false'></ejs-slider>` <br/> |
| Enable | **Method:**  *enable*  <br/> <br/> `<ej-slider #slider id='slider'></ej-slider>` <br/> <br/> `this.sliderObj.enable();` | **Property:**  *enabled*  <br/> <br/> `<ejs-slider #slider id='slider'></ejs-slider>` <br/> <br/> `this.sliderObj.enable = true;` |
| Set Value | **Method:**  *setValue(value ,[enableAnimation])*  <br/> <br/> `<ej-slider #slider id='slider'></ej-slider>` <br/> <br/> `this.sliderObj.setValue(10);` | **Property:**  *value*  <br/> <br/> `<ejs-slider #slider id='slider'></ejs-slider>` <br/> <br/> `this.sliderObj.value = 50;` |
| Get Value | **Method:**  *getValue()*  <br/> <br/> `<ej-slider #slider id='slider'></ej-slider>` <br/> <br/> `this.sliderObj.getValue();` | **Property:**  *value*  <br/> <br/> `<ejs-slider #slider id='slider'></ejs-slider>` <br/> <br/> `let sliderValue = this.sliderObj.value;` |
| Destroy | **Not Applicable** | **Method:**  *destroy()*  <br/> <br/> `<ejs-slider #slider id='slider' enable='false'></ejs-slider>` <br/> <br/> `this.sliderObj.destroy();` |
| Change | **Event:**  *change*  <br/> <br/> `public change(args: Event): void { }` <br/> <br/> `<ej-slider #slider id='slider' (change)='change($event)'></ej-slider>` | **Event:**  *change*  <br/> <br/> `public change(args: Event): void { }` <br/> <br/> `<ejs-slider #slider id='slider' (change)='change($event)'></ejs-slider>` |
| Create | **Event:**  *create*  <br/> <br/> `public create(args: Event): void { }` <br/> <br/> `<ej-slider #slider id='slider' (create)='create($event)'></ej-slider>`| **Event:**  *created*  <br/> <br/> `public created(args: Event): void { }` <br/> <br/> `<ejs-slider #slider id='slider' (created)='created($event)'></ejs-slider>` |
| Slide | **Event:**  *slide*  <br/> <br/> `public slide(args: Event): void { }` <br/> <br/> `<ej-slider #slider id='slider' (slide)='slide($event)'></ej-slider>` | **Event:**  *change*  <br/> <br/> `public change(args: Event): void { }` <br/> <br/> `<ejs-slider #slider id='slider' (change)='change($event)'></ejs-slider>` |
| Start | **Event:**  *start*  <br/> <br/> `public start(args: Event): void { }` <br/> <br/> `<ej-slider #slider id='slider' (start)='start($event)'></ej-slider>` | **Event:**  *created*  <br/> <br/> `public created(args: Event): void { }` <br/> <br/> `<ejs-slider #slider id='slider' (created)='created($event)'></ejs-slider>` |
| Stop | **Event:**  *stop*  <br/> <br/> `public stop(args: Event): void { }` <br/> <br/> `<ej-slider #slider id='slider' (stop)='stop($event)'></ej-slider>`  | **Event:**  *changed*  <br/> <br/> `public changed(args: Event): void { }` <br/> <br/> `<ejs-slider #slider id='slider' (changed)='changed($event)'></ejs-slider>` |
| Rendered Ticks | **Not Applicable** | **Event:**  *renderedTicks*  <br/> <br/> `public renderedTicks(args: Event): void { }` <br/> <br/> `<ejs-slider #slider id='slider' (renderedTicks)='renderedTicks($event)'></ejs-slider>` |
