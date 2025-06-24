---
layout: post
title: Ej1 api migration in Angular Treemap component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Treemap component

This article describes the API migration process of Accordion component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Data Binding

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Datasource| **Property:** *dataSource*<br/><br/> Ts: `@Component({templateUrl: <ej-treemap id="treemap" [dataSource]="datasource"></ej-treemap>})`<br><br/>`export class DefaultComponent {constructor(public treemapDataService: TreeMapDataService) {`<br><br/>`datasource:any= treemapDataService.getTreemapData();}`<br><br/>`}`|**Property:** *dataSource*<br/><br/>Ts: `@Component({templateUrl: <ejs-treemap id="treemap" [weightValuePath]='weightValuePath' [dataSource]="datasource"></ejs-treemap>})`<br><br/>`export class DefaultComponent {`<br><br/>`weightValuePath: string = 'Population';dataSource: object[] = [{ Continent: "Asia", population: 1749046000}];`<br><br/>`}`|

## Appearance

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Layout| **Property:** *itemsLayoutMode*<br/><br/> `<ej-treemap id="treemap" itemsLayoutMode= "sliceanddiceauto" ></ej-treemap>`|**Property:** *layoutType*<br/><br/> `<ejs-treemap id="treemap"  layoutType='SliceAndDiceAuto'></ejs-treemap>`|
|Weight Value Path| **Property:** *weightValuePath*<br/><br/> `<ej-treemap id="treemap" weightValuePath= "Population" ></ej-treemap>`|**Property:** *weightValuePath*<br/><br/>`<ejs-treemap id="treemap"  weightValuePath= 'Population' ></ejs-treemap>`|
|Range Color Value Path| **Property:** *colorValuePath*<br/><br/> `<ej-treemap id="treemap" colorValuePath= "Continent"></ej-treemap>`|**Property:** *rangeColorValuePath*<br/><br/> `<ejs-treemap id="treemap"  rangeColorValuePath= 'Continent'  ></ejs-treemap>`|
|Equal Color Value Path| Not Applicable|**Property:** *equalColorValuePath*<br/><br/> `<ejs-treemap id="treemap"  equalColorValuePath= 'Asia'   ></ejs-treemap>`|
|Height| **Property:** *height*<br/><br/> `<ej-treemap id="treemap" height= 50 ></ej-treemap>`|**Property:** *height*<br/><br/> `<ejs-treemap id="treemap"  height='50px'  ></ejs-treemap>`|
|Width| **Property:** *width*<br/><br/> `<ej-treemap id="treemap" width= 400  ></ej-treemap>`|**Property:** *width*<br/><br/>`<ejs-treemap id="treemap"  width= '400px' ></ejs-treemap>`|
|Theme| Not Applicable|**Property:** *theme*<br/><br/> `<ejs-treemap id="treemap"   theme= 'Highcontrast' ></ejs-treemap>`|
|Localization| **Property:** *locale*<br/><br/> `<ej-treemap id="treemap" locale= "en-US"></ej-treemap>`|**Property:** *locale*<br/><br/> `<ejs-treemap id="treemap"   locale= 'en-US' ></ejs-treemap>`|
|Palette Colors| **Property:** *paletteColorMapping.colors*<br/><br/> `<ej-treemap id="treemap" [paletteColorMapping]= "paletteColorMapping"></ej-treemap>`<br><br/>`paletteColorMapping:any={ colors: ['red','green'] }`|**Property:** *palette*<br/><br/> `<ejs-treemap id="treemap" [palette]="palette"></ejs-treemap>`<br><br/>`palette: string[] =['red','green']`|
|Margin| Not Applicable|**Property:** *margin*<br/><br/> `<ejs-treemap id="treemap"  [margin]="margin"></ejs-treemap>`<br><br/>`margin:object={ left: 5, top: 8 }`|
|Resize| **Property:** *enableResize*<br/><br/> `<ej-treemap id="treemap" enableResize=" true" ></ej-treemap>`|Not Applicable|
|Responsive| **Property:** *isResponsive*<br/><br/>`<ej-treemap id="treemap"  isResponsive= "true"></ej-treemap>`|Not Applicable|

## Leaf Items

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Border Color| **Property:** *leafItemSettings.borderBrush*<br/><br/> `<ej-treemap id="treemap" [leafItemSettings]="leaf"></ej-treemap>`<br><br/>`leaf: any={ showLabels: true, borderBrush: "blue" }`|**Property:** *leafItemSettings.border*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={border: { color: 'white' }}`|
|Border Width| **Property:** *leafItemSettings.borderThickness*<br/><br/> `<ej-treemap id="treemap" [leafItemSettings]="leaf"></ej-treemap>`<br><br/>`leaf: any={showLabels: true,borderThickness: 5}`|**Property:** *leafItemSettings.border*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={border: { width: 5 } }`|
|Gap Value| **Property:** *leafItemSettings.gap*<br/><br/>`<ej-treemap id="treemap" [leafItemSettings]="leaf"></ej-treemap>`<br><br/>`leaf: any={showLabels: true,gap: 5 }`|**Property:** *leafItemSettings.gap*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={gap: 5}`|
|Leaf Item Label| **Property:** *leafItemSettings.itemTemplate*<br/><br/> `<ej-treemap id="treemap" [leafItemSettings]="leaf"></ej-treemap>`<br><br/>`leaf: any={showLabels: true,  itemTemplate: "template"}`|**Property:** *leafItemSettings.labelTemplate*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={labelTemplate: 'template'}`|
|Leaf Label Path| **Property:** *leafItemSettings.labelPath*<br/><br/> `<ej-treemap id="treemap" [leafItemSettings]="leaf"></ej-treemap>`<br><br/>`leaf: any={showLabels: true, labelPath: "GameName"}`|**Property:** *leafItemSettings.labelPath*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={labelPath: 'GameName'}`|
|Leaf Label Position| **Property:** *leafItemSettings.labelPosition*<br/><br/>`<ej-treemap id="treemap" [leafItemSettings]="leaf"></ej-treemap>`<br><br/>`leaf: any={ showLabels: true, labelPosition: "topcenter"}`|**Property:** *leafItemSettings.labelPosition*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={labelPosition: 'Center'}`|
|Leaf Label Color| Not Applicable|**Property:** *leafItemSettings.fill*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={fill: 'red'}`|
|Random Colors| Not Applicable|**Property:** *leafItemSettings.autoFill*<br/><br/>`<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={autoFill: true }`|
|Format| Not Applicable|**Property:** *leafItemSettings.labelFormat*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={ labelFormat: '${Continent}-${Population}'}`|
|Labels Visibility| **Property:** *leafItemSettings.showLabels*<br/><br/> `<ej-treemap id="treemap" [leafItemSettings]="leaf"></ej-treemap>`<br><br/>`leaf: any={showLabels: true }`|**Property:** *leafItemSettings.showLabels*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={ showLabels: false}`|
|Opacity| Not Applicable|**Property:** *leafItemSettings.opacity *<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={opacity: 0.7}`|
|Padding| Not Applicable|**Property:** *leafItemSettings.padding *<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={padding: 5}`|
|Font Customization| Not Applicable|**Property:** *leafItemSettings.labelStyle*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={labelStyle: { size: '12px', color: 'red', opacity: 0.5 }}`|
|Position of Template| Not Applicable|**Property:** *leafItemSettings.templatePosition*<br/><br/> `<ejs-treemap id="treemap" [leafItemSettings]="leafItem" ></ejs-treemap>`<br><br/>`leafItem: object={templatePosition: 'Center'}`|

## Legend

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Legend Alignment| **Property:** *legendSettings.alignment*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={ alignment: "far"}`|**Property:** *legendSettings.alignment*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={ legendSettings: { alignment: 'Near'}`|
|Legend Visibility| **Property:** *showLegend*<br/><br/>`<ej-treemap id="treemap"  [showLegend]="false"></ej-treemap>`|**Property:** *legendSettings.visible*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={visible: true}`|
|Legend Position| **Property:** *legendSettings.dockPosition*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={dockPosition: "bottom"}`|**Property:** *legendSettings.position*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={position: 'Top' }`|
|Legend Height| **Property:** *legendSettings.height*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={height: 40}`|**Property:** *legendSettings.height*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={ height: '40px' }`|
|Legend Width| **Property:** *legendSettings.width*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={width: 100 }`|**Property:** *legendSettings.width*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={ width: '100px' }`|
|Shape Height| **Property:** *legendSettings.iconHeight*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={iconHeight: 15 }`|**Property:** *legendSettings.shapeHeight*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={ shapeHeight: '40px' }`|
|Shape Width| **Property:** *legendSettings.iconWidth*<br/><br/>`<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={iconWidth: 8 }`|**Property:** *legendSettings.shapeWidth*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={shapeWidth: '40px'}`|
|Padding| Not Applicable|**Property:** *legendSettings.shapePadding*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={shapePadding: 10}`|
|Legend Title| **Property:** *legendSettings.title*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={title: "Population" }`|**Property:** *legendSettings.title*<br/><br/>`<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={title: 'Legend' }`|
|Legend Shape| Not Applicable|**Property:** *legendSettings.shape*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={ shape: 'Rectangle' }`|
|Legend Mode| **Property:** *legendSettings.mode*<br/><br/>`<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={mode: "interactive" }`|**Property:** *legendSettings.mode*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={mode: 'Interactive'}`|
|Legend Text Customization| Not Applicable|**Property:** *legendSettings.textStyle*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={textStyle: { size: '10px', opacity: 0.5, color: 'red' }}`|
|Legend Title Customization| Not Applicable|**Property:** *legendSettings.titleStyle*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={titleStyle: { size: '10px', opacity: 0.5, color: 'red' }}`|
|Legend Shape Border| Not Applicable|**Property:** *legendSettings.shapeBorder*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={shapeBorder: { width: 2, color: 'red' }}`|
|Legend Template| **Property:** *legendSettings.template*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={ template: "template"}`| Not Applicable|
|Left Label| **Property:** *legendSettings.leftLabel*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={}`| Not Applicable|
|Right Label| **Property:** *legendSettings.rightLabel*<br/><br/> `<ej-treemap id="treemap" [legendSettings]="legend" [showLegend]="true"></ej-treemap>`<br><br/>`legend: any={}`| Not Applicable|
|Legend Shape Image| Not Applicable|**Property:** *legendSettings.imageUrl*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={imageUrl: "image.png"}`|
|Position in Intractive Legend| Not Applicable|**Property:** *legendSettings.labelPosition*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={labelPosition: "Center" }`|
|Legend Location| Not Applicable|**Property:** *legendSettings.location*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={location: { x: 10, y: 20 }}`|
|Legend Orientation| Not Applicable|**Property:** *legendSettings.orientation*<br/><br/> `<ejs-treemap id="treemap" [legendSettings]="legend" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapLegend);`<br><br/>`legend: object={orientation: "Horizontal" }`|

## Levels

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Random Colors| Not Applicable|**Property:** *levels.autoFill*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level autoFill="true"></e-level></e-levels></ejs-treemap>`|
|Level Background Color| **Property:** *levels.groupBackground*<br/><br/> `<ej-treemap id="treemap"> <e-levels><e-level groupBackground= "white" ></e-level></e-levels></ej-treemap>`| **Property:** *levels.fill*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level fill= 'white'></e-level> </e-levels></ejs-treemap>`|
|Level Border Color| **Property:** *levels.groupBorderColor*<br/><br/>`<ej-treemap id="treemap"> <e-levels><e-level groupBorderColor="#58585B"></e-level></e-levels></ej-treemap>`| **Property:** *levels.border.color*<br/><br/> `<ejs-treemap id="treemap"><e-levels><e-level [border]="border"></e-level></e-levels></ejs-treemap>`<br><br/>`border:object={color: "#58585B"}`|
|Level Border Width| **Property:** *levels.groupBorderThickness*<br/><br/> `<ej-treemap id="treemap"><e-levels><e-level groupBorderThickness= 2></e-level></e-levels></ej-treemap>`| **Property:** *levels.border.width*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level [border]="border"> </e-level> </e-levels></ejs-treemap>`<br><br/>`border:object={width: 2}`|
|Group Gap| **Property:** *levels.groupGap*<br/><br/> `<ej-treemap id="treemap"><e-levels><e-level groupGap= 2 ></e-level></e-levels></ej-treemap>`| **Property:** *levels.groupGap*<br/><br/> `<ejs-treemap id="treemap"><e-levels><e-level groupGap= 2 ></e-level></e-levels></ejs-treemap>`|
|Group Padding| **Property:** *levels.groupPadding*<br/><br/> `<ej-treemap id="treemap"><e-levels><e-level groupPadding= 1 ></e-level></e-levels></ej-treemap>`| **Property:** *levels.groupPadding*<br/><br/> `<ejs-treemap id="treemap"><e-levels><e-level groupPadding= 1></e-level> </e-levels></ejs-treemap>`|
|Group Path| **Property:** *levels.groupPath*<br/><br/> $`<ej-treemap id="treemap"><e-levels><e-level groupPath="pathname"></e-level></e-levels></ej-treemap>`| **Property:** *levels.groupPath*<br/><br/> `<ejs-treemap id="treemap"><e-levels><e-level groupPath='pathname'> </e-level></e-levels></ejs-treemap>`|
|Height of Header Level| **Property:** *levels.headerHeight*<br/><br/>`<ej-treemap id="treemap"><e-levels><e-level headerHeight= 20 ></e-level> </e-levels></ej-treemap>`| **Property:** *levels.headerHeight*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level  headerHeight= 20></e-level></e-levels></ejs-treemap>`|
|Header Template| **Property:** *levels.headerTemplate*<br/><br/> `<ej-treemap id="treemap"> <e-levels><e-level  headerTemplate= "template"></e-level></e-levels></ej-treemap>`| **Property:** *levels.headerTemplate*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level headerTemplate= 'template' ></e-level></e-levels></ejs-treemap>`|
|Opacity of Color| Not Applicable| **Property:** *levels.opacity*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level opacity=0.5></e-level></e-levels></ejs-treemap>`|
|Header Visibility| **Property:** *levels.showHeader*<br/><br/> `<ej-treemap id="treemap"> <e-levels><e-level showHeader="false"></e-level> </e-levels></ej-treemap>`| **Property:** *levels.showHeader*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level showHeader= "false"></e-level></e-levels></ejs-treemap>`|
|Template Position| **Property:** *levels.labelPosition*<br/><br/> `<ej-treemap id="treemap"><e-levels><e-level labelPosition= "topleft" ></e-level></e-levels></ej-treemap>`| **Property:** *levels.templatePosition*<br/><br/> `<ejs-treemap id="treemap"><e-levels><e-level templatePosition='Center'> </e-level></e-levels></ejs-treemap>`|
|Header Style| Not Applicable| **Property:** *levels.headerStyle*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level [headerStyle]="headerStyle" ></e-level></e-levels></ejs-treemap>`<br><br/>`headstyle: object={ color: 'red', size: '16px', opacity: 0.7}`|
|Header Format| Not Applicable| **Property:** *levels.headerFormat*<br/><br/> `<ejs-treemap id="treemap"> <e-levels><e-level headerFormat= '${Continent}' </e-level></e-levels></ejs-treemap>`|
|Header Alignment| Not Applicable| **Property:** *levels.headerAlignment*<br/><br/> `<ejs-treemap id="treemap"><e-levels><e-level headerAlignment= 'Center' ></e-level></e-levels></ejs-treemap>`|

## Selection

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Selection| **Property:** *selectionMode*<br/><br/>`<ej-treemap id="treemap"  selectionMode= "default"></ej-treemap>`| **Property:** *selectionSettings.mode*<br/><br/> `<ejs-treemap id="treemap" [selectionSettings]="selection" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapSelection);`<br><br/>`selection: object={enable: true, mode: 'Item'}`|
|Selection Color| Not Applicable| **Property:** *selectionSettings.fill*<br/><br/> `<ejs-treemap id="treemap" [selectionSettings]="selection" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapSelection);`<br><br/>`selection: object={enable: true, fill: 'blue'}`|
|Selection Color Opacity| Not Applicable| **Property:** *selectionSettings.opacity*<br/><br/> `<ejs-treemap id="treemap" [selectionSettings]="selection" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapSelection);`<br><br/>`selection: object={enable: true, fill: 'blue', opacity: 0.6 }`|
|Border for selection| Not Applicable| **Property:** *selectionSettings.border*<br/><br/> `<ejs-treemap id="treemap" [selectionSettings]="selection" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapSelection);`<br><br/>`selection: object={border: { color: 'red', width: 2 }}`|

## Hightlight

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Highlight Group Selection Mode| **Property:** *highlightGroupOnSelection*<br/><br/> `<ej-treemap id="treemap"   highlightGroupOnSelection= "true" ></ej-treemap>`| **Property:** *highlightSettings.mode*<br/><br/> `<ejs-treemap id="treemap" [highlightSettings]="highlight" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapHighlight);`<br><br/>`highlight: object={enable: true, mode: 'All' }`|
|Highlight Selection Mode| **Property:** *highlightOnSelection*<br/><br/> `<ej-treemap id="treemap"   highlightGroupOnSelection= "true" ></ej-treemap>`| **Property:** *highlightSettings.mode*<br/><br/> `<ejs-treemap id="treemap" [highlightSettings]="highlight" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapHighlight);`<br><br/>`highlight: object={ enable: true, mode: 'Item'}`|
|Highlight Group Border Color| **Property:** *highlightGroupBorderBrush*<br/><br/> `<ej-treemap id="treemap"   highlightGroupOnSelection= "true"  highlightGroupBorderBrush= 'gray' ></ej-treemap>`| **Property:** *highlightSettings.border.color*<br/><br/>`<ejs-treemap id="treemap" [highlightSettings]="highlight" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapHighlight);`<br><br/>`highlight: object={ enable: true, mode: 'All',border: { color: 'gray' }}`|
|Highlight Group Border Width| **Property:** *highlightGroupBorderThickness*<br/><br/> `<ej-treemap id="treemap"   highlightGroupOnSelection= "true" highlightGroupBorderThickness= 3 ></ej-treemap>`| **Property:** *highlightSettings.border.width*<br/><br/> `<ejs-treemap id="treemap" [highlightSettings]="highlight" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapHighlight);`<br><br/>`highlight: object={ enable: true, mode: 'All',   border: { width: 3 }}`|
|Highlight Selection Border Color| **Property:** *highlightBorderBrush*<br/><br/> `<ej-treemap id="treemap"   highlightGroupOnSelection= "true" highlightBorderBrush= 'gray ></ej-treemap>`| **Property:** *highlightSettings.border.color*<br/><br/> `<ejs-treemap id="treemap" [highlightSettings]="highlight" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapHighlight);`<br><br/>`highlight: object={enable: true, mode: 'Item',    border: { color: 'gray' }}`|
|Highlight Selection Border Width| **Property:** *highlightBorderThickness*<br/><br/> `<ej-treemap id="treemap"   highlightGroupOnSelection= "true" highlightBorderThickness=3></ej-treemap>`| **Property:** *highlightSettings.border.width*<br/><br/> `<ejs-treemap id="treemap" [highlightSettings]="highlight" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapHighlight);`<br><br/>`highlight: object={enable: true, mode: 'Item',    border: { width: 3 }}`|
|Highlight Color| Not Applicable| **Property:** *highlightSettings.fill*<br/><br/> `<ejs-treemap id="treemap" [highlightSettings]="highlight" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapHighlight);`<br><br/>`highlight: object={enable: true, fill: 'red' }`|
|Highlight Color Opacity| Not Applicable| **Property:** *highlightSettings.opacity*<br/><br/> `<ejs-treemap id="treemap" [highlightSettings]="highlight" ></ejs-treemap>`<br><br/>`TreeMap.Inject(TreeMapHighlight);`<br><br/>`highlight: object={enable: true, fill: 'red', opacity: 0.5}`|

## Range ColorMapping

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|From value| **Property:** *rangeColorMapping.from*<br/><br/> `<ej-treemap id="treemap" colorValuePath= "Growth"><e-rangecolormapping><e-rangecolor from: 1000></e-rangecolor></e-rangecolormapping></ej-treemap>`| **Property:** *leafItemSettings.colorMapping.from*<br/><br/> `<ejs-treemap id="treemap" rangeColorValuePath = 'Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ from: 1000 }}`|
|To value| **Property:** *rangeColorMapping.to*<br/><br/>`<ej-treemap id="treemap" colorValuePath= "Growth"><e-rangecolormapping><e-rangecolor to= 100000 ></e-rangecolor></e-rangecolormapping> </ej-treemap>`| **Property:** *leafItemSettings.colorMapping.to*<br/><br/>`<ejs-treemap id="treemap" rangeColorValuePath = 'Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ to: 100000 }}`|
|Color| **Property:** *rangeColorMapping.color*<br/><br/>`<ej-treemap id="treemap" colorValuePath= "Growth"><e-rangecolormapping><e-rangecolor  color= "#77D8D8" ></e-rangecolor></e-rangecolormapping> </ej-treemap>`| **Property:** *leafItemSettings.colorMapping.color*<br/><br/> `<ejs-treemap id="treemap" rangeColorValuePath = 'Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ color: "#77D8D8" }}`|
|Legend Label| **Property:** *rangeColorMapping.legendLabel*<br/><br/>`<ej-treemap id="treemap" colorValuePath= "Growth"><e-rangecolormapping><e-rangecolor legendLabel= "Growth"></e-rangecolor></e-rangecolormapping></ej-treemap>`| **Property:** *leafItemSettings.colorMapping.label*<br/><br/> `<ejs-treemap id="treemap" rangeColorValuePath = 'Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ label: "Growth" }}`|

## Desaturation ColorMapping

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|From value| **Property:** *desaturationColorMapping.from*<br/><br/> `<ej-treemap id="treemap" colorValuePath= "Growth" [desaturationColorMapping]="desaturation"></ej-treemap>`<br><br/>`leaf: any={ from:1000}`| **Property:** *leafItemSettings.colorMapping.from*<br/><br/> `<ejs-treemap id="treemap" rangeColorValuePath ='Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ from: 1000 }]}`|
|To value| **Property:** *desaturationColorMapping.to*<br/><br/>`<ej-treemap id="treemap" colorValuePath= "Growth" [desaturationColorMapping]="desaturation"></ej-treemap>`<br><br/>`leaf: any={to:10000}`| **Property:** *leafItemSettings.colorMapping.to*<br/><br/> `<ejs-treemap id="treemap" rangeColorValuePath ='Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ to: 10000 }]}`|
|Color| **Property:** *desaturationColorMapping.color*<br/><br/> `<ej-treemap id="treemap" colorValuePath= "Growth" [desaturationColorMapping]="desaturation"></ej-treemap>`<br><br/>`leaf: any={color:"blue"}`| **Property:** *leafItemSettings.colorMapping.color*<br/><br/> `<ejs-treemap id="treemap" rangeColorValuePath ='Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ color:"blue" }]}`|
|Value| Not Applicable| **Property:** *leafItemSettings.colorMapping.value*<br/><br/> `<ejs-treemap id="treemap" rangeColorValuePath ='Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ value="India" }]}`|
|Minimum Opacity|**Property:** *desaturationColorMapping.rangeMinimum*<br/><br/> `<ej-treemap id="treemap" colorValuePath= "Growth" [desaturationColorMapping]="desaturation"></ej-treemap>`<br><br/>`leaf: any={rangeMinimum: 1}`| **Property:** *leafItemSettings.colorMapping.minOpacity*<br/><br/> `<ejs-treemap id="treemap" rangeColorValuePath ='Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ minOpacity: 0.1 }]}`|
|Maximum Opacity|*desaturationColorMapping.rangeMaximum*<br/><br/> `<ej-treemap id="treemap" colorValuePath= "Growth" [desaturationColorMapping]="desaturation"></ej-treemap>`<br><br/>`leaf: any={rangeMaximum:10}`| **Property:** *leafItemSettings.colorMapping.maxOpacity*<br/><br/>`<ejs-treemap id="treemap" rangeColorValuePath ='Growth' [leafItemSettings]="leaf" ></ejs-treemap>`<br><br/>`leaf: object={colorMapping: [{ maxOpacity: 0.6 }]}`|

## Tooltip

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Tooltip| **Property:** *showTooltip*<br/><br/> `<ej-treemap id="treemap" showTooltip= "true" ></ej-treemap>`| **Property:** *tooltipSettings.visible*<br/><br/> `<ejs-treemap id="treemap" [tooltipSettings] = 'tooltip'  ></ejs-treemap>`<br><br/>`tooltip: object={ visible: true}`|
|Tooltip Template| **Property:** *tooltipTemplate*<br/><br/>`<ej-treemap id="treemap" showTooltip= "true" tooltipTemplate= 'template' ></ej-treemap>`| **Property:** *tooltipSettings.template*<br/><br/> `<ejs-treemap id="treemap" [tooltipSettings] = 'tooltip'  ></ejs-treemap>`<br><br/>`tooltip: object={template: 'template' }`|
|Tooltip Border| Not Applicable| **Property:** *tooltipSettings.border*<br/><br/> `<ejs-treemap id="treemap" [tooltipSettings] = 'tooltip'  ></ejs-treemap>`<br><br/>`tooltip: object={border: { color: 'red', width: 2 }}`|
|Tooltip Color| Not Applicable| **Property:** *tooltipSettings.fill*<br/><br/> `<ejs-treemap id="treemap" [tooltipSettings] = 'tooltip'  ></ejs-treemap>`<br><br/>`tooltip: object={fill: 'gray'}`|
|Tooltip Format| Not Applicable| **Property:** *tooltipSettings.format*<br/><br/> `<ejs-treemap id="treemap" [tooltipSettings] = 'tooltip'  ></ejs-treemap>`<br><br/>`tooltip: object={format: '${Population}' }`|
|Tooltip Marker Shape| Not Applicable| **Property:** *tooltipSettings.markerShapes*<br/><br/> `<ejs-treemap id="treemap" [tooltipSettings] = 'tooltip'  ></ejs-treemap>`<br><br/>`tooltip: object={ markerShapes: 'Circle'}`|
|Tooltip Color Opacity| Not Applicable| **Property:** *tooltipSettings.opacity*<br/><br/> `<ejs-treemap id="treemap" [tooltipSettings] = 'tooltip'  ></ejs-treemap>`<br><br/>`tooltip: object={opacity: 0.5}`|
|Tooltip Text Style| Not Applicable| **Property:** *tooltipSettings.textStyle*<br/><br/> `<ejs-treemap id="treemap" [tooltipSettings] = 'tooltip'  ></ejs-treemap>`<br><br/>`tooltip: object={ textStyle: {    Color: 'red', opacity: 0.5, size: '12px' }}`|

## Drilldown

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Drilldown| **Property:** *enableDrillDown*<br/><br/> `<ej-treemap id="treemap"  enableDrillDown= "true" ></ej-treemap>`| **Property:** *enableDrillDown*<br/><br/>`<ejs-treemap id="treemap" enableDrillDown="true"   ></ejs-treemap>`|
|Drilldown Level| **Property:** *drillDownLevel*<br/><br/>`<ej-treemap id="treemap"  drillDownLevel= 1  ></ej-treemap>`| **Property:** *InitialDrillSettings.groupIndex*<br/><br/> `<ejs-treemap id="treemap" [  InitialDrillSettings]=initialDrill  ></ejs-treemap>`<br></br>`initialDrill: object={ groupIndex: 1}`|

## Methods

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Treemap Refresh Method| **Method:** *refresh*<br/><br/> `var treemap =    $("#container").ejTreeMap("instance");  treemap.refresh();`| **Method:** *refresh*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.refresh();`|
|Method to Drilldown| **Method:** *drillDown*<br/><br/> `var treemap =    $("#container").ejTreeMap("instance");  treemap.drillDown();`|Not Applicable|
|Append to Method| Not Applicable| **Method:** *appendTo*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.appendTo();`|
|Add Event Listener Method| Not Applicable| **Method:** *addEventListener*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.addEventListener();`|
|Treemap Destroy Method| Not Applicable| **Method:** *destroy*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.destroy();`|
|Treemap Exporting Method| Not Applicable| **Method:** *export*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.export();`|
|Get the Module Name| Not Applicable| **Method:** *getModuleName*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.getModuleName();`|
|Printing the Treemap| Not Applicable| **Method:** *print*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.print();`|
|Resizing the Treemap| Not Applicable| **Method:** *resizeOnTreeMap*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.resizeOnTreeMap();`|
|Inject Method (Tooltip)| Not Applicable| **Method:** *resizeOnTreeMap*<br/><br/> TreeMap.Inject(TreeMapTooltip); <br/> `TreeMap.Inject(TreeMapTooltip);  var treemap =    document.getElementById('container').ej2_instances[0];  treemap.resizeOnTreeMap();`|
|Remove Event Listener Method| Not Applicable| **Method:** *removeEventListener*<br/><br/> `var treemap =    document.getElementById('container').ej2_instances[0];  treemap.removeEventListener();`|

## Events

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Treemap Load Event| Not Applicable| **Event:** *load*<br/><br/> `<ejs-treemap id="treemap" (load)='load($event)'></ejs-treemap>`<br><br/>`public load = (args: ILoadEventArgs) => {}`|
|Treemap Loaded Event| Not Applicable| **Event:** *loaded*<br/><br/> `<ejs-treemap id="treemap" (loaded)='loaded($event)'></ejs-treemap>`<br><br/>`public loaded = (args: ILoadedEventArgs) => {}`|
|Event Before Print| Not Applicable| **Event:** *beforePrint*<br/><br/> `<ejs-treemap id="treemap" (beforePrint)='beforePrint($event)'></ejs-treemap>`<br><br/>`public beforePrint = (args: IPrintEventArgs) => {}`|
|Click Event| **Event:** *click*<br/><br/> `<ej-treemap id="treemap" (click)="Click($event)"></ej-treemap>`<br><br/>`Click(sender) {}`| **Event:** *click*<br/><br/> `<ejs-treemap id="treemap" (click)='click($event)'></ejs-treemap>`<br><br/>`public click = (args: IItemClickEventArgs) => {}`|
|Drill Start Event| **Event:** *drillStarted*<br/><br/> `<ej-treemap id="treemap" (drillStarted)="drillStarted($event)"></ej-treemap>`<br><br/>`drillStarted(sender) {}`| **Event:** *drillStart*<br/><br/> `<ejs-treemap id="treemap" (drillStart)='drillStart($event)'></ejs-treemap>`<br><br/>`public drillStart = (args: IDrillStartEventArgs) => {}`|
|Drill End Event| Not Applicable| **Event:** *drillEnd*<br/><br/> `<ejs-treemap id="treemap" (drillEnd)=' drillEnd($event)'></ejs-treemap>`<br><br/>`public  drillEnd = (args: IDrillEndEventArgs) => {}`|
|Event on Item Click| Not Applicable| **Event:** *itemClick*<br/><br/> `<ejs-treemap id="treemap" (itemClick)='itemClick($event)'></ejs-treemap>`<br><br/>`public itemClick = (args: IItemClickEventArgs) => {}`|
|Treemap Item Select Event| **Event:** *treeMapItemSelected*<br/><br/>`<ej-treemap id="treemap" (treeMapItemSelected)="treeMapitemselected($event)"></ej-treemap>`<br><br/>`treeMapItemSelected(sender) {}`| **Event:** *itemSelected*<br/><br/> `<ejs-treemap id="treemap" (itemSelected)=' itemSelected($event)'></ejs-treemap>`<br><br/>`public  itemSelected = (args: IItemSelectedEventArgs) => {}`|
|Treemap Item Rendering Event| **Event:** *itemRendering*<br/><br/> `<ej-treemap id="treemap" (itemRendering)="itemRendering($event)"></ej-treemap>`<br><br/>`itemRendering(sender) {}`| **Event:** *itemRendering*<br/><br/> `<ejs-treemap id="treemap" (itemRendering)='itemRendering($event)'></ejs-treemap>`<br><br/>`public itemRendering = (args: IItemRenderingEventArgs) => {}`|
|Treemap Item Move Event| Not Applicable| **Event:** *itemMove*<br/><br/> `<ejs-treemap id="treemap" (itemMove)='itemMove($event)'></ejs-treemap>`<br><br/>`public itemMove = (args: IItemMoveEventArgs) => {}`|
|Treemap Item Highlight Event| Not Applicable| **Event:** *itemHighlight*<br/><br/> `<ejs-treemap id="treemap" (itemHighlight)='itemHighlight($event)'></ejs-treemap>`<br><br/>`public itemHighlight = (args: IItemHighlightEventArgs) => {}`|
|Template Header Render Event| **Event:** *headerTemplateRendering*<br/><br/>`<ej-treemap id="treemap" (headerTemplateRendering)="headerTemplateRendering($event)"></ej-treemap>`<br><br/>`headerTemplateRendering(sender) {}`| Not Applicable|
|Drilldown Item Select Event| **Event:** *drillDownItemSelected*<br/><br/> `<ej-treemap id="treemap" ( drillDownItemSelected)=" drillDownItemSelected($event)"></ej-treemap>`<br><br/>`drillDownItemSelected(sender) {}`| Not Applicable|
|Refresh Event| **Event:** *refreshed*<br/><br/> `<ej-treemap id="treemap" (refreshed)="refreshed($event)"></ej-treemap>`<br><br/>`refreshed(sender) {}`| Not Applicable|
|Group Select Event| **Event:** *treeMapGroupSelected*<br/><br/> `<ej-treemap id="treemap" (treeMapGroupSelected)="treeMapGroupSelected($event)"></ej-treemap>`<br><br/>`treeMapGroupSelected(sender) {}`| Not Applicable|
|Mouse Event| Not Applicable| **Event:** *mouseMove*<br/><br/> `<ejs-treemap id="treemap" (mouseMove)='mouseMove($event)'></ejs-treemap>`<br><br/>`public mouseMove = (args: IMouseMoveEventArgs) => {}`|
|Resize Event| Not Applicable| **Event:** *resize*<br/><br/> `<ejs-treemap id="treemap" ( resize)=' resize($event)'></ejs-treemap>`<br><br/>`public  resize = (args: IResizeEventArgs) => {}`|
|Tooltip Render Event| Not Applicable| **Event:** *tooltipRendering*<br/><br/> `<ejs-treemap id="treemap" (tooltipRendering)='tooltipRendering($event)'></ejs-treemap>`<br><br/>`public tooltipRendering = (args: ITreeMapTooltipRenderEventArgs) => {}`|
|Double Click Event| **Event:** *doubleClick*<br/><br/> `<ej-treemap id="treemap" (doubleClick)="doubleClick($event)"></ej-treemap>`<br><br/>`doubleClick(sender) {}`| Not Applicable|
|Right Click Event| **Event:** *rightClick*<br/><br/> `<ej-treemap id="treemap" (rightClick)="rightClick($event)"></ej-treemap>`<br><br/>`rightClick(sender) {}`| Not Applicable|