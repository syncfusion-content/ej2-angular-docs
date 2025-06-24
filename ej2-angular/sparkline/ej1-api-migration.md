---
layout: post
title: Ej1 api migration in Angular Sparkline component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Sparkline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD033 -->

<!-- markdownlint-disable MD038 -->

# Ej1 api migration in Angular Sparkline component

This article describes the API migration process of Accordion component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Sparkline Types

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Type| **Property:** *type*<br/><br/> `<ej-sparkline id="container" type='line'></ej-sparkline>`| **Property:** *type*<br/><br/> `<ejs-sparkline id='container' type="Column"></ejs-sparkline>` |

## Databinding

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Datasource| **Property:** *dataSource*<br/><br/> `<ej-sparkline id="sparkline" [dataSource]="dataSource"></ej-sparkline>` |**Property:** *dataSource*<br/><br/> `<ejs-sparkline id="sparkline" [dataSource]="dataSource"></ejs-sparkline>`|
|Binding X values with datasource| **Property:** *xName*<br/><br/> `<ej-sparkline id="sparkline" xName="xValue"></ej-sparkline>` |**Property:** *xName*<br/><br/> `<ejs-sparkline id="sparkline" xName="xValue"></ejs-sparkline>`|
|Binding Y values with datasource| **Property:** *yName*<br/><br/> `<ej-sparkline id="sparkline" yName="yValue"></ej-sparkline>` |**Property:** *yName*<br/><br/> `<ejs-sparkline id="sparkline" yName="yValue"></ejs-sparkline>`|

## Markers

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable markers| **Property:** *markerSettings.visible*<br/><br/> `<ej-sparkline id="sparkline" [markerSettings.visible]="true"></ej-sparkline>`| **Property:** *markerSettings.visible*<br/><br/> `<ejs-sparkline id="sparkline" [markerSettings] ='markerSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public markerSettings: Object = { visible: ["All"] } |
|Color| **Property:** *markerSettings.fill*<br/><br/> `<ej-sparkline id="sparkline" markerSettings.fill="red"></ej-sparkline>` |**Property:** *markerSettings.fill*<br/><br/> `<ejs-sparkline id="sparkline" [markerSettings] ='markerSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public markerSettings: Object = { fill: "green" } |
|Size| **Property:** *markerSettings.width*<br/><br/> `<ej-sparkline id="sparkline" [markerSettings.width]=10></ej-sparkline>`  |**Property:** *markerSettings.size*<br/><br/> `<ejs-sparkline id="sparkline" [markerSettings] ='markerSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public markerSettings: Object = { size: 5 } |
|Opacity| **Property:** *markerSettings.opacity*<br/><br/> `<ej-sparkline id="sparkline" [markerSettings.width]=0.5></ej-sparkline>` |**Property:** *markerSettings.opacity*<br/><br/> `<ejs-sparkline id="sparkline" [markerSettings] ='markerSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public markerSettings: Object = { opacity: 0.5} |
|Border color| **Property:** *markerSettings.border.color*<br/><br/> `<ej-sparkline id="sparkline" markerSettings.border.color="green"></ej-sparkline>`| **Property:** *markerSettings.border.color*<br/><br/> `<ejs-sparkline id="sparkline" [markerSettings] ='markerSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public markerSettings: Object = { border: { color: "red" } } |
|Border width| **Property:** *markerSettings.border.width*<br/><br/> `<ej-sparkline id="sparkline" [markerSettings.border.width]=1></ej-sparkline>` |**Property:** *markerSettings.border.width*<br/><br/> `<ejs-sparkline id="sparkline" [markerSettings] ='markerSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public markerSettings: Object = { border: { width: 2 } }|
|Border opacity| **Property:** *markerSettings.border.opacity*<br/><br/>  `<ej-sparkline id="sparkline" [markerSettings.border.opacity]=0.5></ej-sparkline>` |Not applicable|

## Data labels

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable data labels| Not applicable |**Property:** *dataLabelSettings.visible*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { visible: ["All"] }|
|Color| Not applicable |**Property:** *dataLabelSettings.fill*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { fill: "red" }|
|Opacity| Not applicable |**Property:** *dataLabelSettings.opacity*<br/><br/>`<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { opacity: 0.5 } |
|Border color| Not applicable |**Property:** *dataLabelSettings.border.color*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { border: { color: "green" } }|
|Border width| Not applicable |**Property:** *dataLabelSettings.border.width*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { border: {width: 1 } } |
|Format| Not applicable |**Property:** *dataLabelSettings.format*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { format: "${xval}: ${yval}"} |
|Horizontal Offset| Not applicable |**Property:** *dataLabelSettings.offset.x*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { offset: {x: 100 } }|
|Vertical Offset| Not applicable |**Property:** *dataLabelSettings.offset.y*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { offset: {y: 100 } } |
|Font color| Not applicable |**Property:** *dataLabelSettings.textStyle.color*<br/><br/>
`<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { textStyle: { color: "green" } } |
|Font family| Not applicable |**Property:** *dataLabelSettings.textStyle.fontFamily*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { textStyle: { fontFamily: "Arial" } }|
|Font style| Not applicable |**Property:** *dataLabelSettings.textStyle.fontStyle*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { textStyle: { fontStyle: "normal" } }|
|Font weight| Not applicable |**Property:** *dataLabelSettings.textStyle.fontWeight*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { textStyle: { fontWeight: "Bold" } }|
|Font opacity| Not applicable |**Property:** *dataLabelSettings.textStyle.opacity*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { textStyle: { opacity: 0.5 } }|
|Font size| Not applicable |**Property:** *dataLabelSettings.textStyle.fontSize*<br/><br/> `<ejs-sparkline id="sparkline" [dataLabelSettings] ='dataLabelSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public dataLabelSettings: Object = { textStyle: { fontSize: "12px" } }|

## Range band

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Color| **Property:** *rangeBandSettings.color*<br/><br/>`<ej-sparkline id="sparkline" [rangeBandSettings]="rangeBandSettings"></ej-sparkline>`<br/>  **TS:** <br/> this.rangeBandSettings = { color: "#ff14ae" } |**Property:** *rangeBandSettings.color*<br/><br/> `<ejs-sparkline id="sparkline" [rangeBandSettings] ='rangeBandSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public rangeBandSettings: Object = { color: "red" } |
|Opacity| **Property:** *rangeBandSettings.opacity*<br/><br/> `<ej-sparkline id="sparkline" [rangeBandSettings]="rangeBandSettings"></ej-sparkline>`<br/>  **TS:** <br/> this.rangeBandSettings = { opacity: 0.5 } |**Property:** *rangeBandSettings.opacity*<br/><br/> `<ejs-sparkline id="sparkline" [rangeBandSettings] ='rangeBandSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public rangeBandSettings: Object = { opacity: 0.5 }|
|Start range| **Property:** *rangeBandSettings.startRange*<br/><br/>`<ej-sparkline id="sparkline" [rangeBandSettings]="rangeBandSettings"></ej-sparkline>`<br/>  **TS:** <br/> this.rangeBandSettings = { startRange: 0 } |**Property:** *rangeBandSettings.startRange*<br/><br/> `<ejs-sparkline id="sparkline" [rangeBandSettings] ='rangeBandSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public rangeBandSettings: Object = { startRange: 0 }|
|End range| **Property:** *rangeBandSettings.endRange*<br/><br/> `<ej-sparkline id="sparkline" [rangeBandSettings]="rangeBandSettings"></ej-sparkline>`<br/>  **TS:** <br/> this.rangeBandSettings = { endRange: 50 } |**Property:** *rangeBandSettings.endRange*<br/><br/> `<ejs-sparkline id="sparkline" [rangeBandSettings] ='rangeBandSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public rangeBandSettings: Object = { endRange: 30 }|

## Special points customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|High point color| **Property:** *highPointColor*<br/><br/> `<ej-sparkline id="sparkline" highPointColor="blue"></ej-sparkline>` |**Property:** *highPointColor*<br/><br/> `<ejs-sparkline id="sparkline" highPointColor="red"></ejs-sparkline>`|
|Low point color| **Property:** *lowPointColor*<br/><br/> `<ej-sparkline id="sparkline" lowPointColor="orange"></ej-sparkline>` |**Property:** *lowPointColor*<br/><br/> `<ejs-sparkline id="sparkline" lowPointColor="red"></ejs-sparkline>`|
|Negative point color| **Property:** *negativePointColor*<br/><br/> `<ej-sparkline id="sparkline" negativePointColor="red"></ej-sparkline>` |**Property:** *negativePointColor*<br/><br/> `<ejs-sparkline id="sparkline" negativePointColor="red"></ejs-`<ej-sparkline id="sparkline" negativePointColor="red" highPointColor="blue" lowPointColor="orange" startPointColor="green" endPointColor="green"></ej-sparkline>` |**Property:** *startPointColor*<br/><br/> `<ejs-sparkline id="sparkline" startPointColor="red"></ejs-sparkline>`|
|End point color| **Property:** *endPointColor*<br/><br/> `<ej-sparkline id="sparkline" endPointColor="green"></ej-sparkline>` |**Property:** *endPointColor*<br/><br/> `<ejs-sparkline id="sparkline" endPointColor="red"></ejs-sparkline>`|
|Tie point color| **Property:** *tiePointColor*<br/><br/>Not Applicable |**Property:** *tiePointColor*<br/><br/> `<ejs-sparkline id="sparkline" tiePointColor="red"></ejs-sparkline>`|

## Axis customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Show axis line| **Property:** *axisSettings.visible*<br/><br/> `<ej-sparkline id="sparkline" [axisLineSettings.visible]="true"></ej-sparkline>` |**Property:** *axisSettings.lineSettings.visible*<br/><br/> `<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { visible: true }|
|Line color| **Property:** *axisSettings.color*<br/><br/>`<ej-sparkline id="sparkline" axisLineSettings.color="#ff14ae"></ej-sparkline>` |**Property:** *axisSettings.lineSettings.color*<br/><br/> `<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { color: "red" }|
|Line width| **Property:** *axisSettings.width*<br/><br/> `<ej-sparkline id="sparkline" [axisLineSettings.width]=2></ej-sparkline>` |**Property:** *axisSettings.lineSettings.width*<br/><br/> `<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { width: 2 }|
|Dash array| **Property:** *axisSettings.dashArray*<br/><br/> `<ej-sparkline id="sparkline" axisLineSettings.dashArray="5,3"></ej-sparkline>` |**Property:** *axisSettings.lineSettings.dashArray*<br/><br/> `<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { dashArray: "5,3" } |
|X axis minimum value| Not applicable |**Property:** *axisSettings.minX*<br/><br/> `<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { minX: 0 } |
|X axis maximum value| Not applicable |**Property:** *axisSettings.maxX*<br/><br/>`<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { maxX: 100 }|
|Y axis minimum value| Not applicable |**Property:** *axisSettings.minY*<br/><br/> `<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { minY: 0 }|
|Y axis maximum value| Not applicable |**Property:** *axisSettings.maxY*<br/><br/> `<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { maxY: 100 }|
|Horizontal axis line position| Not applicable |**Property:** *axisSettings.value*<br/><br/> `<ejs-sparkline id="sparkline" [axisSettings] ='axisSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public axisSettings: Object = { value: 10 }|

## Appearance customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Background color| **Property:** *background*<br/><br/> `<ej-sparkline id="sparkline" background="grey"></ej-sparkline>` |**Property:** *containerArea.background*<br/><br/> `<ejs-sparkline id="sparkline" [containerArea]='containerArea'></ejs-sparkline>`<br/>  **TS:** <br/> public containerArea: Object = { background: '#eff1f4' }|
|Border color | Not applicable |**Property:** *containerArea.border.color*<br/><br/> `<ejs-sparkline id="sparkline" [containerArea]='containerArea'></ejs-sparkline>`<br/>  **TS:** <br/> public containerArea: Object = { border: { color: '#033e96' } }|
|Border width | Not applicable |**Property:** *containerArea.border.width*<br/><br/> <ejs-sparkline id="sparkline" [containerArea]='containerArea'></ejs-sparkline>`<br/>  **TS:** <br/> public containerArea: Object = { border: { width: 2 } }|
|Series color| **Property:** *fill*<br/><br/> `<ej-sparkline id="sparkline" fill="grey"></ej-sparkline>` |**Property:** *fill*<br/><br/> `<ejs-sparkline id="sparkline" fill="lime"></ejs-sparkline>`|
|Series opacity| **Property:** *opacity*<br/><br/> `<ej-sparkline id="sparkline" [opacity]=0.5></ej-sparkline>` |**Property:** *opacity*<br/><br/> `<ejs-sparkline id="sparkline" opacity=0.5></ejs-sparkline>`|
|Line series width| **Property:** *width*<br/><br/> `<ej-sparkline id="sparkline" [width]=3></ej-sparkline>` |**Property:** *lineWidth*<br/><br/> `<ejs-sparkline id="sparkline" lineWidth=4></ejs-sparkline>`|
|Series border color| **Property:** *border.color*<br/><br/> `<ej-sparkline id="sparkline" ><e-border color="red"></e-border></ej-sparkline>` |**Property:** *border.color*<br/><br/>`<ejs-sparkline id="sparkline" [border]="border"></ejs-sparkline>` **TS:** <br/> public: Object = [{ color: "red" }|
|Series border width| **Property:** *border.width*<br/><br/> `<ej-sparkline id="sparkline" ><e-border [width]="1"></e-border></ej-sparkline>` |**Property:** *border.width*<br/><br/> `<ejs-sparkline id="sparkline" [border]="border"></ejs-sparkline>` **TS:** <br/> public: Object = [{ width: 2 } |
|Series palette| **Property:** *palette*<br/><br/> `<ej-sparkline id="sparkline" [palette]="palettes"></ej-sparkline>`<br/>  **TS:** <br/> palettes: string[] = ["red", "green", "orange", "blue"] |**Property:** *palette*<br/><br/> `<ejs-sparkline id="sparkline" [palette]="palettes"></ejs-sparkline>`**TS:** <br/> public palettes: string[] = ["red", "green", "orange", "blue"]|
|Theme| **Property:** *theme*<br/><br/> `<ej-sparkline id="sparkline" theme="flatdark"></ej-sparkline>` |**Property:** *theme*<br/><br/> `<ejs-sparkline id="sparkline" theme="Material"></ejs-sparkline>`|
|Width| **Property:** *size.width*<br/><br/> `<ej-sparkline id="sparkline" size.width="170px"></ej-sparkline>` |**Property:** *width*<br/><br/> `<ejs-sparkline id="sparkline" width="400px"></ejs-sparkline>`|
|Height| **Property:** *size.height*<br/><br/> `<ej-sparkline id="sparkline" size.height="170px"></ej-sparkline>` |**Property:** *height*<br/><br/> `<ejs-sparkline id="sparkline" height="200px"></ejs-sparkline>`|

## Tooltip

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Show tooltip| **Property:** *tooltip.visible*<br/><br/> `<ej-sparkline id="sparkline" [tooltip.visible]="true"></ej-sparkline>` |**Property:** *tooltipSettings.visible*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { visible: true }|
|Background| **Property:** *tooltip.fill*<br/><br/> `<ej-sparkline id="sparkline" tooltip.fill="red"></ej-sparkline>` |**Property:** *tooltipSettings.fill*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { fill: "white" }|
|Format| Not applicable |**Property:** *tooltipSettings.format*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { format:"${xval}: ${yval}" }|
|Template| **Property:** *tooltip.template*<br/><br/> `<ej-sparkline id="sparkline" tooltip.template="tooltip"></ej-sparkline>`<br/><br/>`<div id="tooltip">`</br>&nbsp;        `<div>#point.x#</div>`</br>&nbsp;&nbsp;`<div>#point.y#</div>`</br>`</div>`|**Property:** *tooltipSettings.template*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/><br/>`<div id="tooltip">${x} : ${y}<div>`<br/>  **TS:** <br/> public tooltipSettings: Object = { template: "tooltip" }|
|Font color| **Property:** *tooltip.font.color*<br/><br/> `<ej-sparkline id="sparkline" tooltip.font.color="red"></ej-sparkline>` |**Property:** *tooltipSettings.textStyle.color*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { textStyle: { color: "grey" } }|
|Font opacity| **Property:** *tooltip.font.opacity*<br/><br/> `<ej-sparkline id="sparkline" [tooltip.font.opacity]=0.5></ej-sparkline>` |**Property:** *tooltipSettings.textStyle.opacity*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { textStyle: { opacity: 0.5 } }|
|Font size| **Property:** *tooltip.font.size*<br/><br/> `<ej-sparkline id="sparkline" tooltip.font.size="12px"></ej-sparkline>` |**Property:** *tooltipSettings.textStyle.size*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { textStyle: { size: "12px" } }|
|Font family| **Property:** *tooltip.font.fontFamily*<br/><br/> `<ej-sparkline id="sparkline" tooltip.font.fontFamily="Arial"></ej-sparkline>` |**Property:** *tooltipSettings.textStyle.fontFamily*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { textStyle: { fontFamily: "Arial" } }|
|Font style| **Property:** *tooltip.font.fontStyle*<br/><br/> `<ej-sparkline id="sparkline" tooltip.font.fontStyle="normal"></ej-sparkline>` |**Property:** *tooltipSettings.textStyle.fontStyle*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { textStyle: { fontStyle: "normal" } }|
|Font weight| **Property:** *tooltip.font.fontWeight*<br/><br/> `<ej-sparkline id="sparkline" tooltip.font.fontWeight="bold"></ej-sparkline>` |**Property:** *tooltipSettings.textStyle.fontWeight*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { textStyle: { fontWeight: "bold" } }|
|Enable track line| Not applicable |**Property:** *tooltipSettings.trackLineSettings.visible*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { trackLineSettings: { visible: true } }|
|Track line color| Not applicable |**Property:** *tooltipSettings.trackLineSettings.color*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { trackLineSettings: { color: "red" } }|
|Track line width| Not applicable |**Property:** *tooltipSettings.trackLineSettings.width*<br/><br/> `<ejs-sparkline id="sparkline" [tooltipSettings]='tooltipSettings'></ejs-sparkline>`<br/>  **TS:** <br/> public tooltipSettings: Object = { trackLineSettings: { width: width } }|

## Rendering

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable canvas rendering| **Property:** *enableCanvasRendering*<br/><br/> Not Applicable | Not applicable |

## Localization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Localization| **Property:** *locale*<br/><br/> `<ej-sparkline id="sparkline" locale="en-US"></ej-sparkline>` | **Property:** *type*<br/><br/> `<ejs-sparkline id="sparkline" locale="en-US"></ejs-sparkline>` |

## Methods

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Dynamically updating sparkline| **Method:** *redraw*<br/><br/> **TS:** <br/> @ViewChild("sparkline) sparkline: EJComponents<any, any>; <br/> this.sparkline.widget.redraw() | **Method:** *refresh*<br/><br/> **TS:** <br/> @ViewChild("sparkline") public sparkline: SparklineComponent; <br/> this.sparkline.refresh() |

## Events

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Load| **Event:** *load*<br/><br/> `<ej-sparkline id="sparkline" (load)="load($event)">       </ej-sparkline>`<br/> **TS:** <br/> public load(args) { } | **Event:** *load*<br/><br/> `<ejs-sparkline id="sparkline" (load)="load($event)"></ejs-sparkline>`<br/> **TS:** <br/>public load(args) { } |
|Load completed| **Event:** *loaded*<br/><br/> `<ej-sparkline id="sparkline" (loaded)="loaded($event)"></ej-sparkline>`<br/> **TS:** <br/>public loaded(args) { } | **Event:** *loaded*<br/><br/> `<ejs-sparkline id="sparkline" (loaded)="loaded($event)"></ejs-sparkline>`<br/> **TS:** <br/>public loaded(args) { } |
|Initialize tooltip| **Event:** *tooltipInitialize*<br/><br/> `<ej-sparkline id="sparkline" (tooltipInitialize)="tooltipInitialize($event)"></ej-sparkline>`<br/> **TS:** <br/>public tooltipInitialize(args) { } | **Event:** *tooltipInitialize*<br/><br/> `<ejs-sparkline id="sparkline" (tooltipInitialize)="tooltipInitialize($event)"></ejs-sparkline>`<br/> **TS:** <br/>public tooltipInitialize(args) { } |
|Series rendering| **Event:** *seriesRendering*<br/><br/> `<ej-sparkline id="sparkline" (seriesRendering)="seriesRendering($event)"></ej-sparkline>`<br/> **TS:** <br/>public seriesRendering(args) { } | **Event:** *seriesRendering*<br/><br/> `<ejs-sparkline id="sparkline" (seriesRendering)="seriesRendering($event)"></ejs-sparkline>`<br/> **TS:** <br/>public seriesRendering(args) { } |
|Region mouse move| **Event:** *pointRegionMouseMove*<br/><br/> `<ej-sparkline id="sparkline" (pointRegionMouseMove)="pointRegionMove($event)"></ej-sparkline>`<br/> **TS:** <br/>public pointRegionMove(args) { } | **Event:** *pointRegionMouseMove*<br/><br/> `<ejs-sparkline id="sparkline" (pointRegionMouseMove)="pointRegionMouseMove($event)"></ejs-sparkline>`<br/> **TS:** <br/>public pointRegionMouseMove(args) { } |
|Region click| **Event:** *pointRegionMouseClick*<br/><br/> `<ej-sparkline id="sparkline" (pointRegionMouseClick)="pointRegionClick($event)"></ej-sparkline>`<br/> **TS:** <br/>public pointRegionClick(args) { } | **Event:** *pointRegionMouseClick*<br/><br/> `<ejs-sparkline id="sparkline" (pointRegionMouseClick)="pointRegionMouseClick($event)"></ejs-sparkline>`<br/> **TS:** <br/>public pointRegionMouseClick(args) { } |
|Mouse move| **Event:** *sparklineMouseMove*<br/><br/> `<ej-sparkline id="sparkline" (sparklineMouseMove)="mouseMove($event)"></ej-sparkline>`<br/> **TS:** <br/>public mouseMove(args) { } | **Event:** *sparklineMouseMove*<br/><br/> `<ejs-sparkline id="sparkline" (sparklineMouseMove)="sparklineMouseMove($event)"></ejs-sparkline>`<br/> **TS:** <br/>public sparklineMouseMove(args) { } |
|Mouse leave| **Event:** *sparklineMouseLeave*<br/><br/> `<ej-sparkline id="sparkline" (sparklineMouseLeave)="mouseLeave($event)"></ej-sparkline>`<br/> **TS:** <br/>public mouseLeave(args) { } | Not applicable |
|Click| **Event:** *click*<br/><br/> `<ej-sparkline id="sparkline" (sparklineMouseClick)="sparklineMouseClick($event)"></ej-sparkline>`<br/> **TS:** <br/>public sparklineMouseClick(args) { }| **Event:** *sparklineMouseClick*<br/><br/> `<ejs-sparkline id="sparkline" (sparklineMouseClick)="sparklineMouseClick($event)"></ejs-sparkline>`<br/> **TS:** <br/>public sparklineMouseClick(args) { } |
|doubleClick| **Event:** *doubleClick*<br/><br/>`<ej-sparkline id="sparkline" (doubleClick)="doubleClick($event)"></ej-sparkline>`<br/> **TS:** <br/>public load(args) { } | Not applicable |
|rightClick| **Event:** *rightClick*<br/><br/> `<ej-sparkline id="sparkline" (rightClick)="rightClick($event)"></ej-sparkline>`<br/> **TS:** <br/>public rightClick(args) { } | Not applicable |
|axisRendering| Not applicable | **Event:** *axisRendering*<br/><br/> `<ejs-sparkline id="sparkline" (axisRendering)="axisRendering($event)"></ejs-sparkline>`<br/> **TS:** <br/>public axisRendering(args) { } |
|dataLabelRendering| Not applicable | **Event:** *dataLabelRendering*<br/><br/> `<ejs-sparkline id="sparkline" (dataLabelRendering)="dataLabelRendering($event)"></ejs-sparkline>`<br/> **TS:** <br/>public dataLabelRendering(args) { } |
|markerRendering| Not applicable | **Event:** *markerRendering*<br/><br/> `<ejs-sparkline id="sparkline" (markerRendering)="markerRendering($event)"></ejs-sparkline>`<br/> **TS:** <br/>public markerRendering(args) { }|
|pointRendering| Not applicable | **Event:** *pointRendering*<br/><br/> `<ejs-sparkline id="sparkline" (pointRendering)="pointRendering($event)"></ejs-sparkline>`<br/> **TS:** <br/>public load(args) { } |
|resize| Not applicable | **Event:** *resize*<br/><br/> `<ejs-sparkline id="sparkline" (resize)="resize($event)"></ejs-sparkline>`<br/> **TS:** <br/>public resize(args) { } |