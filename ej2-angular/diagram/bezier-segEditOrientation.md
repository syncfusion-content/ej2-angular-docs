---
layout: post
title: Bezier Segment edit orientation in Angular Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bezier Segment edit orientation 
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Connector Settings

## How to edit bezier segments based on bezier connector settings

The intermediate point of two adjacent bezier segments can be edited interactively based on the [`segmentEditOrientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegmentEditOrientation/) property of [`bezierSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSettingsModel/).

| SegmentEditOrientation value | Description | Output |
|-------- | -------- | -------- |
| Bidirectional |It allows the intermediate points to be dragged in either vertical or horizontal directions. | ![Bidirectional](images/bez-bidirectional.gif) |
| Freeform | It allows the intermediate points to be dragged in any direction. | ![Freeform](images/bez-freeform.gif) |

The following code illustrates how to interact with Bezier efficiently by using the [`smoothness`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSmoothness/) and `segmentEditOrientation` properties of the `bezierSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorbeziersegmentedit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorbeziersegmentedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorbeziersegmentedit-cs1" %}
