---
layout: post
title: Ej1 api migration in Angular Range navigator component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Range navigator component

This article describes the API migration process of Chart component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## RangeNavigator

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD038 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Allow snapping| **Property:** *allowSnapping* <br/><br/>`<ej:RangeNavigator`<br/>`[allowSnapping]="true">` <br/>`</ej:RangeNavigator>`|**Property:** *allowSnapping* <br/><br/>`<ejs-rangenavigator  [allowSnapping]='allowSnapping'>`<br/>`</ejs-rangenavigator>`<br/>this.allowSnapping= true; |
|Animation duration| Not Applicable|**Property:** *animationDuration* <br/><br/>`<ejs-rangenavigator  [animationDuration]='animationDuration''>`<br/>`</ejs-rangenavigator>`<br/>this.animationDuration= 2000;|
|Border for range navigator| **Property:** *border* <br/><br/>`<ej:RangeNavigator`<br/>`border.color="green" [border.opacity]="0.5" [border.width]="2">` <br/>`</ej:RangeNavigator>`|**Property:** *navigatorBorder* <br/><br/>`<ejs-rangenavigator  [navigatorBorder]='navigatorBorder'>`<br/>`</ejs-rangenavigator>`<br/>this.navigatorBorder = {  width: 4, color: 'green'}|
|dataSource for range navigator| **Property:** *dataSource* <br/><br/>this.rangeData = function GetData(){};<br/>`<ej:RangeNavigator`<br/>`[dataSource]="rangeData">` <br/>`</ej:RangeNavigator>`|**Property:** *dataSource* <br/><br/>`<e-rangenavigator-series dataSource={data}>`<br/>`</e-rangenavigator-series>`|
|enabling deffered update for range navigator| **Property:** *enableDeferedUpdate* <br/><br/>`<ej:RangeNavigator`<br/>`[enableDeferredUpdate]="true">` <br/>`</ej:RangeNavigator>`|**Property:** *enableDeferredUpdate* <br/><br/>`<ejs-rangenavigator  [enableDeferredUpdate]='enableDeferredUpdate'>`<br/>`</ejs-rangenavigator>`<br/>this.enableDeferredUpdate = true|
|multilevel level labels| **Property:** *labelSettings.higherLevelLabels* <br/><br/>this.labelSettings= { higherLevel: { } };<br/>`<ej:RangeNavigator`<br/>`[labelSettings]="labelSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *enableGrouping* <br/><br/>`<ejs-rangenavigator  [enableGrouping]='grouping'>`<br/>`</ejs-rangenavigator>`<br/>this.grouping = true;|
|enabling scroll bar| **Property:** *enableScrollBar* <br/><br/>`<ej:RangeNavigator`<br/>`[enableScrollbar]= "true">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|enabling auto resizing| **Property:** *enableAutoResizing* <br/><br/>`<ej:RangeNavigator`<br/>`enableAutoResizing="true"}>` <br/>`</ej:RangeNavigator>`|Not Applicable|
|enabling isResponsive| **Property:** *isResponsive* <br/><br/>`<ej:RangeNavigator`<br/>`isResponsive="true">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|enabling RTL for range navigator| **Property:** *enableRtl* <br/><br/>`<ej:RangeNavigator`<br/>`enableRtl="true">` <br/>`</ej:RangeNavigator>`|**Property:** *enableRtl* <br/><br/>`<ejs-rangenavigator  [enableRtl]='enableRtl'>`<br/>`</ejs-rangenavigator>`<br/>this.enableRtl = true;|
|interval for range navigator| **Property:** *valueAxisSettings.interval* <br/><br/>this.valueAxisSettings= {Interval: 5 };<br/>`<ej:RangeNavigator`<br/>`[valueAxisSettings]="this.valueAxisSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *interval* <br/><br/>`<ejs-rangenavigator  Interval=5 }'>`<br/>`</ejs-rangenavigator>`|
|intervaltype for range navigator| **Property:** *valueAxisSettings.intervalType* <br/><br/>this.valueAxisSettings= {intervalType: 'Years'};<br/>`<ej:RangeNavigator`<br/>`[valueAxisSettings]="this.valueAxisSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *intervalType* <br/><br/>`<ejs-rangenavigator  intervalType='Years'>`<br/>`</ejs-rangenavigator>`|
|labelformat for range navigator| Not applicable|**Property:** *labelFormat* <br/><br/>`<ejs-rangenavigator  [labelFormat]='labelFormat'>`<br/>`</ejs-rangenavigator>`<br/>this.labelFormat = 'MMM';|
|label intersect action for range navigator| Not applicable|**Property:** *labelIntersectAction* <br/><br/>`<ejs-rangenavigator  labelIntersectAction='Hide'>`<br/>`</ejs-rangenavigator>`|
|labelStyle range navigator| **Property:** *valueAxisSettings.font* <br/><br/>this.valueAxisSettings= {font: { } };<br/>`<ej:RangeNavigator`<br/>`[valueAxisSettings]="this.valueAxisSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *labelStyle* <br/><br/>`<ejs-rangenavigator  [labelStyle]='labelStyle'>`<br/>`</ejs-rangenavigator>`<br/>this.labelStyle= { color: 'red', size:'10px'};|
|locale of range navigator| **Property:** *locale* <br/><br/>`<ej:RangeNavigator`<br/>`locale="fr-FR">` <br/>`</ej:RangeNavigator>`|**Property:** *locale* <br/><br/>`<ejs-rangenavigator  locale='en-US'>`<br/>`</ejs-rangenavigator>`|
|major grid lines of range navigator| **Property:** *valueAxisSettings.majorGridLines* <br/><br/>this.valueAxisSettings= { majorGridLines: { width: 2, color: 'red' } };<br/>`<ej:RangeNavigator`<br/>`[valueAxisSettings]="this.valueAxisSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *majorGridLines* <br/><br/>`<ejs-rangenavigator [majorGridLines]='majorGridLines'>`<br/>`</ejs-rangenavigator>`<br/>this.majorGridLines={ width: 4, color: 'blue', dashArray: '5,5' };|
|margin of range navigator|Not Applicable|**Property:** *margin* <br/><br/>`<ejs-rangenavigator  [margin]='margin'>`<br/>`</ejs-rangenavigator>`<br/>this.margin={ };|
|maximum value of range navigator| **Property:** *valueAxisSettings.range.max* <br/><br/>this.valueAxisSettings= { range: { max: 2 } };<br/>`<ej:RangeNavigator`<br/>`[valueAxisSettings]="this.valueAxisSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *maximum* <br/><br/>`<ejs-rangenavigator  maximum={34}>`<br/>`</ejs-rangenavigator>`|
|minimum value of range navigator| **Property:** *valueAxisSettings.range.min* <br/><br/>this.valueAxisSettings= { range: { min: 2 } };<br/>`<ej:RangeNavigator`<br/>`[valueAxisSettings]="this.valueAxisSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *minimum* <br/><br/>`<ejs-rangenavigator  minimum={4}>`<br/>`</ejs-rangenavigator>`|
|query for data source of range navigator| Not Applicable|**Property:** *query* <br/><br/>`<ejs-rangenavigator  query=''>`<br/>`</ejs-rangenavigator>`|
|Secondary label alignment of range navigator| Not Applicable|**Property:** *secondaryLabelAlignment* <br/><br/>`<ejs-rangenavigator  secondaryLabelAlignment='Far'>`<br/>`</ejs-rangenavigator>`|
|Skeleton of range navigator axis| Not Applicable|**Property:** *skeleton* <br/><br/>`<ejs-rangenavigator  skeleton=''>`<br/>`</ejs-rangenavigator>`|
|skeletontype of range navigator axis| Not Applicable|**Property:** *skeletonType* <br/><br/>`<ejs-rangenavigator  skeletonType=''>`<br/>`</ejs-rangenavigator>`|
|Theme of range navigator| **Property:** *theme* <br/><br/>`<ej:RangeNavigator`<br/>`theme=''>` <br/>`</ej:RangeNavigator>`|**Property:** *theme* <br/><br/>`<ejs-rangenavigator  theme=''>`<br/>`</ejs-rangenavigator>`|
|Default selector value range navigator| **Property:** *selectedRangeSettings* <br/><br/>this.selectedRangeSettings= {start:'', end:''};<br>`<ej:RangeNavigator`<br/>`[selectedRangeSettings]="selectedRangeSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *value* <br/><br/>`<ejs-rangenavigator  value=[ 2, 10]>`<br/>`</ejs-rangenavigator>`|
|Value type of range navigator| **Property:** *valueType* <br/><br>`<ej:RangeNavigator`<br/>`valueType='DateTime'>` <br/>`</ej:RangeNavigator>`|**Property:** *valueType* <br/><br/>`<ejs-rangenavigator  valueType='Logarithmic'>`<br/>`</ejs-rangenavigator>`|
|Width of range navigator| **Property:** *size.width* <br/><br>`<ej:RangeNavigator`<br/>`size={ width: '200'}>` <br/>`</ej:RangeNavigator>`|**Property:** *width* <br/><br/>`<ejs-rangenavigator  width='400'>`<br/>`</ejs-rangenavigator>`|
|Height of range navigator| **Property:** *size.height* <br/><br>`<ej:RangeNavigator`<br/>`size={ height: '200'}>` <br/>`</ej:RangeNavigator>`|**Property:** *height* <br/><br/>`<ejs-rangenavigator  height='400'>`<br/>`</ejs-rangenavigator>`|
|Series settings for range navigator| **Property:** *seriesSettings* <br/><br>this.seriesSettings= { };<br/>`<ej:RangeNavigator`<br/>`seriesSettings={seriesSettings}>` <br/>`</ej:RangeNavigator>`|Not Applicable|
|Range settings for range navigator| **Property:** *rangeSettings* <br/><br>this.rangeSettings= { start: 3, end: 6 };<br/>`<ej:RangeNavigator`<br/>`rangeSettings={rangeSettings}>` <br/>`</ej:RangeNavigator>`|Not Applicable|
|Scroll range settings for range navigator| **Property:** *scrollRangeSettings* <br/><br>this.scrollRangeSettings= { start: 3, end: 6 };<br/>`<ej:RangeNavigator`<br/>`scrollRangeSettings={scrollRangeSettings}>` <br/>`</ej:RangeNavigator>`|Not Applicable|

## Series

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|animation| **Property:** *enableAnimation* <br/><br>`<ej:RangeNavigator`<br/>`enableAnimation="true">` <br/>`</ej:RangeNavigator>`|**Property:** *animation.enable* <br/><br/>`<ejs-rangenavigator  [animation]='animation'>`<br/>`</ejs-rangenavigator>`<br/>this.animation={ enable: true}|
|Border for range navigator series| **Property:** *border* <br/><br>this.series = [{ border: { color: 'transparent', width: 2 } }];<br/>`<ej:RangeNavigator`<br/>`series={series}>` <br/>`</ej:RangeNavigator>`|**Property:** *border* <br/><br/>`<e-rangenavigator-series`<br/>`border={ color: 'pink', width: 2}>`<br/>`</e-rangenavigator-series>`|
|dataSource for range navigator| **Property:** *series.dataSource* <br/><br>this.series = [{ dataSource: [{}] }];<br/>`<ej:RangeNavigator`<br/>`series={series}>` <br/>`</ej:RangeNavigator>`|**Property:** *series.dataSource* <br/><br/>`<e-rangenavigator-series`<br/>`dataSource={data}>`<br/>`</e-rangenavigator-series>`|
|query for data source of range navigator| Not Applicable|**Property:** *query* <br/><br/>`<e-rangenavigator-series`<br/>`dataSource={data} query=''>`<br/>`</e-rangenavigator-series>`|
|series type for range navigator| **Property:** *series.type* <br/><br>this.series = [{ type: '' }];<br/>`<ej:RangeNavigator`<br/>`series={series}>` <br/>`</ej:RangeNavigator>`|**Property:** *series.type* <br/><br/>`<e-rangenavigator-series`<br/>`type=''>`<br/>`</e-rangenavigator-series>`|
|series xName for range navigator| **Property:** *series.xName* <br/><br>this.series = [{ xName: '' }];<br/>`<ej:RangeNavigator`<br/>`series={series}>` <br/>`</ej:RangeNavigator>`|**Property:** *series.xName* <br/><br/>`<e-rangenavigator-series`<br/>`xName=''>`<br/>`</e-rangenavigator-series>`|
|series yName for range navigator| **Property:** *series.yName* <br/><br>this.series = [{ yName: '' }];<br/>`<ej:RangeNavigator`<br/>`series={series}>` <br/>`</ej:RangeNavigator>`|**Property:** *series.yName* <br/><br/>`<e-rangenavigator-series`<br/>`yName=''>`<br/>`</e-rangenavigator-series>`|
|series fill color for range navigator| **Property:** *series.fill* <br/><br>this.series = [{ fill: '' }];<br/>`<ej:RangeNavigator`<br/>`series={series}>` <br/>`</ej:RangeNavigator>`|**Property:** *series.fill* <br/><br/>`<e-rangenavigator-series`<br/>`fill=''>`<br/>`</e-rangenavigator-series>`|
|series width for range navigator| **Property:** *series.width* <br/><br>this.series = [{ width: '2' }];<br/>`<ej:RangeNavigator`<br/>`series={series}>` <br/>`</ej:RangeNavigator>`|**Property:** *series.width* <br/><br/>`<e-rangenavigator-series`<br/>`width=''>`<br/>`</e-rangenavigator-series>`|
|series dashArray for range navigator|Not Applicable|**Property:** *series.dashArray* <br/><br/>`<e-rangenavigator-series`<br/>`dashArray='10,5'>`<br/>`</e-rangenavigator-series>`|

## StyleSettings

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Style settings of range navigator| **Property:** *navigatorStyleSettings* <br/><br>this.navigatorStyleSettings = { leftThumbTemplate: 'left' };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *navigatorStyleSettings* <br/><br/>`<ejs-rangenavigator `<br/>`[navigatorStyleSettings]='navigatorStyleSettings'`<br/>`</ejs-rangenavigator>`<br/>this.navigatorStyleSettings = { leftThumbTemplate: 'left' };|
|Selected region color of range navigator| **Property:** *selectedRegionColor* <br/><br/>this.navigatorStyleSettings = { selectedRegionColor: 'red' };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *selectedRegionColor* <br/><br/>`<ejs-rangenavigator `<br/>`[navigatorStyleSettings]='navigatorStyleSettings'`<br/>`</ejs-rangenavigator>`<br/>this.navigatorStyleSettings = { selectedRegionColor: 'red' };|
|UnSelected region color of range navigator| **Property:** *unselectedRegionColor* <br/><br>this.navigatorStyleSettings = { unselectedRegionColor: 'red' };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *unselectedRegionColor* <br/><br/>`<ejs-rangenavigator `<br/>`[navigatorStyleSettings]='navigatorStyleSettings'`<br/>`</ejs-rangenavigator>`<br/>this.navigatorStyleSettings = { unselectedRegionColor: 'red' };|
|Thumb color of range navigator| **Property:** *thumbColor* <br/><br>this.navigatorStyleSettings = { thumbColor: 'red' };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|**Property:** *thumbSettings* <br/><br/>`<ejs-rangenavigator `<br/>`[navigatorStyleSettings]='navigatorStyleSettings' }`<br/>`</ejs-rangenavigator>`<br/>this.navigatorStyleSettings = {thumbSettings: 'red'};|
|Selected region opacity of range navigator| **Property:** *selectedRegionOpacity* <br/><br>this.navigatorStyleSettings = { selectedRegionOpacity: 0.4 };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|Unselected region opacity of range navigator| **Property:** *UnselectedRegionOpacity* <br/><br>this.navigatorStyleSettings = { UnselectedRegionOpacity: 0.4 };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|Background for thumb| **Property:** *background* <br/><br>this.navigatorStyleSettings = { background: 'red' };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|border for thumb| **Property:** *border* <br/><br>this.navigatorStyleSettings = { border: { color: 'red', width: 2} };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|Highlightsettings for range navigator| **Property:** *highlightSettings* <br/><br>this.navigatorStyleSettings = { highlightSettings: { } };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|Selected style settings for range navigator| **Property:** *selectionSettings* <br/><br>this.navigatorStyleSettings = { selectionSettings: { } };<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|Left thumb template for range navigator| **Property:** *leftThumbTemplate* <br/><br>this.navigatorStyleSettings = { leftThumbTemplate: ''};<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|Not Applicable|
|Right thumb template for range navigator| **Property:** *rightThumbTemplate* <br/><br>this.navigatorStyleSettings = { rightThumbTemplate: ''};<br/>`<ej:RangeNavigator`<br/>`[navigatorStyleSettings]="navigatorStyleSettings">` <br/>`</ej:RangeNavigator>`|Not Applicable|

## Tooltip

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|tooltip| **Property:** *visible* <br/><br>this.tooltipSettings = { visible: true};<br/>`<ej:RangeNavigator`<br/>`[tooltipSettings]= "Tooltip">` <br/>`</ej:RangeNavigator>`|**Property:** *enable* <br/><br/>`<ejs-rangenavigator `<br/>`[tooltip]='tooltip'`<br/>`</ejs-rangenavigator>`<br/>this.tooltip= { enable: true }|
|background color of tooltip| **Property:** *backgroundColor* <br/><br>this.tooltipSettings = { backgroundColor: 'red'};<br/>`<ej:RangeNavigator`<br/>`[tooltipSettings]= "Tooltip">` <br/>`</ej:RangeNavigator>`|**Property:** *fill* <br/><br/>`<ejs-rangenavigator `<br/>`[tooltip]='tooltip'`<br/>`</ejs-rangenavigator>`<br/>this.tooltip= { fill: 'pink' }|
|Font style of tooltip| **Property:** *font* <br/><br>this.tooltipSettings = { font: 'red'};<br/>`<ej:RangeNavigator`<br/>`[tooltipSettings]= "Tooltip">` <br/>`</ej:RangeNavigator>`|**Property:** *textStyle* <br/><br/>`<ejs-rangenavigator `<br/>`[tooltip]='tooltip'`<br/>`</ejs-rangenavigator>`<br/>this.tooltip= { textStyle: 'pink' }|
|Label format of tooltip| **Property:** *labelFormat* <br/><br>this.tooltipSettings = {labelFormat: 'yMd'};<br/>`<ej:RangeNavigator`<br/>`[tooltipSettings]= "Tooltip">` <br/>`</ej:RangeNavigator>`|**Property:** *format* <br/><br/>`<ejs-rangenavigator `<br/>`[tooltip]='tooltip'`<br/>`</ejs-rangenavigator>`<br/>this.tooltip= { format: 'yMd'}|
|Display mode of tooltip| **Property:** *tooltipDisplayMode* <br/><br>this.tooltipSettings = { tooltipDisplayMode: 'always'};<br/>`<ej:RangeNavigator`<br/>`[tooltipSettings]= "Tooltip">` <br/>`</ej:RangeNavigator>`|**Property:** *displayMode* <br/><br/>`<ejs-rangenavigator `<br/>`[tooltip]='tooltip'`<br/>`</ejs-rangenavigator>`<br/>this.tooltip= { displayMode: 'Always' }|
|Template of tooltip| Not Applicable|**Property:** *template* <br/><br/>`<ejs-rangenavigator `<br/>`[tooltip]='tooltip'`<br/>`</ejs-rangenavigator>`<br/>this.tooltip= { template: '<div>Chart</div>' }|
|Border of tooltip|Not Applicable|**Property:** *border* <br/><br/>`<ejs-rangenavigator `<br/>`[tooltip]='tooltip'`<br/>`</ejs-rangenavigator>`<br/>this.tooltip= { border:  { color: 'red', width: 2} }|
|Border of tooltip|Not Applicable|**Property:** *opacity* <br/><br/>`<ejs-rangenavigator `<br/>`[tooltip]='tooltip'`<br/>`</ejs-rangenavigator>`<br/>this.tooltip= { opacity: 0.5 }|

## Period Selector

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|period Selector position|Not Applicable|**Property:** *periodSelectorSettings.position* <br/><br/>`<ejs-rangenavigator `<br/>`[periodSelectorSettings]='periodsValue'`<br/>`</ejs-rangenavigator>`<br/>this.periodsValue = { }|

## Methods

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Print|Not Applicable|**Property:** *print()* <br/><br/><br/>`<ejs-rangenavigator `<br/>`#range id="range"`<br/>`</ejs-rangenavigator>`<br/>print(){<br/>this.RangeObj.print();}|
|Export|Not Applicable|**Property:** *export()* <br/><br/><br/>`<ejs-rangenavigator `<br/>`#range id="range"`<br/>`</ejs-rangenavigator>`<br/>export(){<br/>this.RangeObj.export('PNG', 'result',  null, [this.RangeObj]);}|

## Events

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Fires before loading the RangeNavigator.| **Property:** *load* <br/><br/>`<ej:RangeNavigator`<br/>`(load)="load($event)">` <br/>`</ej:RangeNavigator>`<br/>load(sender){ };|**Property:** *load* <br/><br/>`<ejs-rangenavigator `<br/>`load={this.load.bind(this)}`<br/>`</ejs-rangenavigator>`<br/> public load(): void { };|
|Fires before loading the RangeNavigator.| **Property:** *loaded* <br/><br/>`<ej:RangeNavigator`<br/>`(loaded)="onLoaded($event)">` <br/>`</ej:RangeNavigator>`<br/>loaded(sender){ };|**Property:** *loaded* <br/><br/>`<ejs-rangenavigator `<br/>`loaded={this.loaded.bind(this)}`<br/>`</ejs-rangenavigator>`<br/> public loaded(): void { };|
|Fires when  the value changes in range navigator| **Property:** *rangeChanged* <br/><br/>`<ej:RangeNavigator`<br/>`(rangeChanged)="onRangeChanged($event)">` <br/>`</ej:RangeNavigator>`<br/>onRangeChanged(sender){ };|**Property:** *changed* <br/><br/>`<ejs-rangenavigator `<br/>`changed={this.changed.bind(this)}`<br/>`</ejs-rangenavigator>`<br/> public changed(): void { };|
|Fires after the RangeNavigator|Not Applicable|**Property:** *resized* <br/><br/>`<ejs-rangenavigator `<br/>`resized={this.resized.bind(this)}`<br/>`</ejs-rangenavigator>`<br/> public resized(): void { };|
|Fires before tooltip in RangeNavigator|Not Applicable|**Property:** *tooltipRender* <br/><br/>`<ejs-rangenavigator `<br/>`tooltipRender={this.tooltipRender.bind(this)}`<br/>`</ejs-rangenavigator>`<br/> public tooltipRender(): void { };|
|Fires before period render in the RangeNavigator|Not Applicable|**Property:** *selectorRender* <br/><br/>`<ejs-rangenavigator `<br/>`selectorRender={this.selectorRender.bind(this)}`<br/>`</ejs-rangenavigator>`<br/> public selectorRender(): void { };|
|Fires when scrollStart the RangeNavigator|**Property:** *scrollStart* <br/><br/>`<ej:RangeNavigator`<br/>`(scrollStart)="onScrollStart($event)">` <br/>`</ej:RangeNavigator>`<br/>onScrollStart(sender){ };|Not Applicable|
|Fires when scrollEnd the RangeNavigator|**Property:** *scrollEnd* <br/><br/>`<ej:RangeNavigator`<br/>`(scrollEnd)="onScrollEnd($event)">` <br/>`</ej:RangeNavigator>`<br/>onScrollEnd(sender){ };|Not Applicable|
|Fires when selected range Start the RangeNavigator|**Property:** *selectedRangeStart* <br/><br/>`<ej:RangeNavigator`<br/>`(selectedRangeStart)="onSelectedRangeStart($event)">` <br/>`</ej:RangeNavigator>`<br/>onSelectedRangeStart(sender)(){ };|Not Applicable|
|Fires when selected range ends the RangeNavigator|**Property:** *selectedRangeEnd* <br/><br/>`<ej:RangeNavigator`<br/>`(selectedRangeEnd)="onSelectedRangeEnd($event)">` <br/>`</ej:RangeNavigator>`<br/>onSelectedRangeEnd(sender)(){ };|Not Applicable|
|Fires when scroll range changed in the RangeNavigator|**Property:** *scrollChanged* <br/><br/>`<ej:RangeNavigator`<br/>`(scrollChanged)="onScrollChanged($event)">`<br/>`</ej:RangeNavigator>`<br/>onScrollChanged(){ };|Not Applicable|
|Fires when  click in the RangeNavigator|**Property:** *click* <br/><br/>`<ej:RangeNavigator`<br/>`(click)="onClick($event)">`<br/>`</ej:RangeNavigator>`<br/>onClick(){ };|Not Applicable|
|Fires when  right click in the RangeNavigator|**Property:** *rightClick* <br/><br/>`<ej:RangeNavigator`<br/>`(rightClick)="onRightClick($event)">`<br/>`</ej:RangeNavigator>`<br/>onRightClick(){ };|Not Applicable|
|Fires when double click in the RangeNavigator|**Property:** *doubleClick* <br/><br/>`<ej:RangeNavigator`<br/>`(doubleClick)="onDoubleClick($event)">`<br/>`</ej:RangeNavigator>`<br/>onDoubleClick(){ };|Not Applicable|