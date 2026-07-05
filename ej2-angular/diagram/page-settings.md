---
layout: post
title: Page settings in Angular Diagram component | Syncfusion®
description: Learn here all about Page settings in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Page settings 
documentation: ug
domainurl: ##DomainURL##
---

# Page settings in Angular Diagram Component

Page settings enable comprehensive customization of the diagram's canvas, including dimensions, appearance, orientation, and interactive boundaries. These settings provide control over how the diagram content is displayed and how users can interact with the drawing surface.

## Page size and appearance

The diagram page dimensions are controlled through the [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pageSettings#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pageSettings#height) properties in page settings. The page appearance can be customized using the [`background`](https://ej2.syncfusion.com/angular/documentation/api/diagram/backgroundModel) property, which includes options for setting the background [`color`](https://ej2.syncfusion.com/angular/documentation/api/diagram/backgroundModel#color) and other visual properties. The [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel) property defines spacing around the page content.

For comprehensive details on all available properties, refer to the [`Page Settings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pageSettingsModel) API reference.

The following example demonstrates how to customize basic page settings including dimensions, background color, and margins.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/pagesettings/pagesettings-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/pagesettings/pagesettings-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/pagesettings/pagesettings-cs1" %}

## Set background image

Background images can be applied to the diagram page using the [`source`](https://ej2.syncfusion.com/angular/documentation/api/diagram/backgroundModel#source) property of the [`background`](https://ej2.syncfusion.com/angular/documentation/api/diagram/backgroundModel) configuration. The [`scale`](https://ej2.syncfusion.com/angular/documentation/api/diagram/backgroundModel#scale) property controls how the background image is sized and stretched, while the [`align`](https://ej2.syncfusion.com/angular/documentation/api/diagram/backgroundModel#align) property determines the image positioning within the diagram page boundaries.

The following code example shows how to configure a background image for the diagram page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/pagesettings/background-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/pagesettings/background-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/pagesettings/background-cs1" %}

## Page orientation

The diagram supports two page orientations:

- **Landscape**: Wider than tall (default orientation)
- **Portrait**: Taller than wide

When the orientation changes, the diagram automatically swaps the width and height values to maintain the specified page dimensions. For example, if a page is configured with width: 800 and height: 600 in landscape mode, switching to portrait orientation will result in width: 600 and height: 800.

The following example demonstrates how orientation affects page dimensions by switching from the default landscape to portrait mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/pagesettings/orientation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/pagesettings/orientation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/pagesettings/orientation-cs1" %}

## Multiple pages and page breaks

The diagram can extend across multiple pages when the content exceeds the defined page boundaries. When multiple pages are enabled, the total canvas size automatically expands in increments of the specified page width and height to accommodate all diagram elements. Page breaks provide visual indicators showing where one page ends and another begins, which is particularly useful for print layout planning.

The [`multiplePage`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pageSettingsModel#multiplepage) property enables the multi-page functionality, while the [`showPageBreak`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pageSettingsModel#showpagebreaks) property controls the visibility of page break lines.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/pagesettings/pagebreak-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/pagesettings/pagebreak-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/pagesettings/pagebreak-cs1" %}

The appearance of page break lines can be customized by overriding the styles of the .e-diagram-page-break CSS class. For detailed styling options, refer to the [`CSS customization`](https://ej2.syncfusion.com/angular/documentation/diagram/style#customizing-the-page-breaks) documentation.

## Boundary constraints

Boundary constraints define the interactive region within which diagram elements can be manipulated. These constraints control where users can drag, resize, or rotate elements, providing control over the usable area of the diagram canvas. The [`boundaryConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/boundaryConstraints) property in page settings manages these restrictions.

The three types of boundary constraints are:

- **Infinity**: Elements can be moved without any boundary restrictions
- **Diagram**: Elements are constrained within the overall diagram area  
- **Page**: Elements are restricted to the defined page boundaries

For detailed information about each constraint type and their behavior, refer to the [`Boundary Constraints`](https://ej2.syncfusion.com/angular/documentation/diagram/constraints#boundary-constraints) documentation.

The following example shows how to configure boundary constraints to restrict element movement within specific boundaries.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/pagesettings/boundary-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/pagesettings/boundary-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/pagesettings/boundary-cs1" %}

## Fit options

The [`fitOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/fitOptionsModel) configuration controls how diagram content is positioned and scaled within the viewport. These options are particularly useful for automatically centering content and ensuring optimal visibility when the diagram loads.

### Key fit option properties:

- **canFit**: Centers the diagram content within the viewport during initial rendering
- **region**: Specifies whether to fit the page content or custom bounds to the viewport center
- **customBounds**: Defines specific rectangular bounds when using CustomBounds for the region property  
- **canZoomIn**: Enables automatic zoom adjustments to fit smaller content within the available viewport space
- **margin**: Sets spacing around the fitted content within the viewport boundaries
- **mode**: Determines the fitting approach - 'Page' (default), 'Width', or 'Height' for dimension-specific constraints

The [`region`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramRegions) property offers different fitting strategies, and when set to CustomBounds, the [`customBounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/fitOptionsModel#custombounds) property allows precise control over which area should be fitted within the viewport.

The following example demonstrates the configuration and usage of fit options for automatic content positioning.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/pagesettings/fitoption-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/pagesettings/fitoption-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/pagesettings/fitoption-cs1" %}