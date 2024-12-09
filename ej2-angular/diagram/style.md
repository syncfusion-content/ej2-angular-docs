---
layout: post
title: Style in Angular Diagram component | Syncfusion®
description: Learn here all about Style in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Style 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Diagram component

## Customizing the connector end point handle

Use the following CSS to customize the connector end point handle.

```scss

.e-diagram-endpoint-handle {
    fill: red;
    stroke: green;
    stroke-width: 3px;
   }

```
![Connector End point](images/connectorEndPoint.png)

## Customizing the connector end point handle when connected

Use the following CSS to customize the connector end point handle when connected.

```scss

.e-diagram-endpoint-handle.e-connected {
    fill: red;
    stroke: green;
    stroke-width: 3px;
   }

```
![Connector End point connected](images/connectorEndPoint2.png)

## Customizing the connector end point handle when disabled

Use the following CSS to customize the connector end point handle when disabled.

```scss

 .e-diagram-endpoint-handle.e-disabled {
      fill: lightgrey;
      opacity: 1;
      stroke: black;
    }

```
![Connector End point disabled](images/connectorEndPoint3.png)

## Customizing the bezier segment thumb

Use the following CSS to customize the bezier segment thumb.

```scss

  .e-diagram-bezier-segment-handle{
      stroke:yellow;
      stroke-width:2px;
      fill:green;
  }

```
![Bezier segment thumb](images/bezier-segmentThumb.png)

## Customizing the bezier control points

Use the following CSS to customize the bezier control points.

```scss

   .e-diagram-bezier-control-handle {
      stroke:yellow;
        stroke-width:2px;
        fill:green;
    }

```
![Bezier Control points](images/bezier-control-point.png)

## Customizing the orthogonal segment thumb

Use the following CSS to customize the orthogonal segment thumb.

```scss

   .e-diagram-ortho-segment-handle {
        stroke:yellow;
          stroke-width:2px;
          fill:green;
      }

```
![Orthogonal segment thumb](images/ortho-segmentThumb.png)

## Customizing the straight segment thumb

Use the following CSS to customize the straight segment thumb.

```scss

    .e-diagram-straight-segment-handle {
      stroke:yellow;
        stroke-width:2px;
        fill:green;
    }

```
![Straight segment thumb](images/straight-segmentThumb.png)

## Customizing the resize handle

Use the following CSS to customize the resize handle.

```scss

.e-diagram-resize-handle {
    fill: yellow;
    opacity: 1;
    stroke: orange;
  }
```

![Resize handle](images/resize-handle.png)

## Customizing the selector

Use the following CSS to customize the selector.

```scss

.e-diagram-selector{
    stroke:yellow;
    stroke-width:2px;
  }
```

![Selector](images/selector.png)

## Customizing the selector pivot line

Use the following CSS to customize the line between the selector and rotate handle.

```scss

 .e-diagram-pivot-line {
    stroke: black;
    stroke-width:2px;
  }

```
![Pivot line](images/pivot-line.png)

## Customizing the selector border

Use the following CSS to customize the selector border.

```scss

.e-diagram-border {
    stroke: red;
  }

```

## Customizing the rotate handle

Use the following CSS to customize the rotate handle properties.

```scss

.e-diagram-rotate-handle {
    fill: yellow;
    stroke: orange;
  }

```
![Rotate handle](images/rotate-handle.png)

## Customizing the symbolpalette while hovering

Use the following CSS to customize the symbolpalette while hovering.

```scss

.e-symbolpalette .e-symbol-hover:hover {
    background: red;
  }

```
![Symbol palette hover](images/symbol-palette-hover.png)

## Customizing the symbolpalette when selected

Use the following CSS to customize the symbolpalette when selected.

```scss

.e-symbolpalette .e-symbol-selected {
    background: yellow;
  }

```

![Symbol palette selected](images/symbol-palette-selected.png)

## Customizing the ruler

Use the following CSS to customize the ruler properties.

```scss

.e-diagram .e-ruler {
    background-color: blue;
    font-size: 13px;
  }

```
![Ruler](images/ruler.png)

## Customizing the ruler overlap

Use the following CSS to ruler overlap properties.

```scss

.e-diagram .e-ruler-overlap {
    background-color: red;
  }

```
![Ruler overlap](images/ruler2.png)

## Customizing the ruler marker color

Use the following CSS to customize the marker color

```scss

.e-diagram .e-d-ruler-marker {
        stroke: yellow;
        stroke-width:3px;
      }

```
![Ruler Marker](images/ruler3.png)

## Customizing the text edit

Use the following CSS to customize the text edit properties.

```scss

 .e-diagram .e-diagram-text-edit {
     background: white;
      border-color: blue;
      border-style: dashed;
      border-width: 3px;
      box-sizing: content-box;
      color: black;
      min-width: 50px;
  }

```
![Text edit box](images/text-edit-box.png) ![Text edit box clicked](images/text-edit-box2.png) 

## Customizing the text edit on selection

Use the following CSS to customize the text edit on selection properties.

```scss

 .e-diagram-text-edit::selection {
    background: yellow;
    color: green;
  }

```
![Text edit box selected](images/text-edit-box3.png) 

## Customizing the page breaks

Use the following CSS to customize the page breaks line color

```scss
.e-diagram-page-break {
      stroke: red;
      stroke-width: 2px;
    }
```

![Text edit box selected](images/page-break.png)
