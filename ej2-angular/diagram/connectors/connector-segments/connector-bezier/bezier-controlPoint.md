---
layout: post
title: Bezier Control Points in Angular Diagram component | Syncfusion®
description: Learn how to interact with bezier control points, configure smoothness settings, and control visibility in Syncfusion® Angular Diagram component.
platform: ej2-angular
control: Bezier control points interaction 
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Control Points Interaction

Bezier control points determine the curvature and shape of bezier connector segments in Angular Diagram components. These interactive handles allow users to modify connector paths dynamically while maintaining visual consistency across multiple segments.

## Configure Bezier Segment Smoothness

When working with multiple bezier segments, maintain visual consistency by configuring the smoothness behavior of control points using the [`bezierSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSettingsModel/) property of the connector. The smoothness property controls how adjacent control points respond when one is modified.

| BezierSmoothness Value | Description | Output |
|-------- | -------- | -------- |
| SymmetricDistance | Adjacent segment control points maintain equal distance when either control point is modified | ![Control points maintaining symmetric distance during interaction](../../../images/Symmetric-distance.gif) |
| SymmetricAngle | Adjacent segment control points maintain equal angles when either control point is modified | ![Control points maintaining symmetric angles during interaction](../../../images/symmetric-Angle.gif) |
| Default | Adjacent segment control points maintain both equal distance and equal angles when either control point is modified | ![Control points maintaining default symmetric behavior](../../../images/DefaultSymmetric.gif) |
| None | Control points operate independently without affecting adjacent segments | ![Independent control point interaction without symmetry](../../../images/SymmetricNoneImage.png) |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorbezeirsmoothness-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorbezeirsmoothness-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorbezeirsmoothness-cs1" %}

## Control Bezier Control Points Visibility

Configure which control points are visible during interaction using the [`controlPointsVisibility`](https://ej2.syncfusion.com/angular/documentation/api/diagram/controlPointsVisibility/) property within [`bezierSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSettingsModel/). This property provides granular control over control point display for different connector segments.

| ControlPointsVisibility Value | Description | Output |
|-------- | -------- | -------- |
| None | Hides all control points across the entire bezier connector | ![All bezier control points hidden from view](../../../images/controlPointVisibilityNone.png) |
| Source | Shows control points only for the source segment while hiding all others | ![Source segment control points visible, others hidden](../../../images/controlPointVisibilitySource.png) |
| Target | Shows control points only for the target segment while hiding all others | ![Target segment control points visible, others hidden](../../../images/controlPointVisibilityTarget.png) |
| Intermediate | Shows control points only for intermediate segments while hiding source and target control points | ![Intermediate segment control points visible, source and target hidden](../../../images/controlPointVisibilityIntermediate.png) |
| All | Shows control points for all segments including source, target, and intermediate segments | ![All bezier connector control points visible](../../../images/controlPointVisibilityAll.png) |