---
layout: post
title: Data labels in Angular Maps component | Syncfusion
description: Learn here all about Data labels in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data labels 
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in Angular Maps component

Data labels display information about Maps shapes. Enable data labels by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#visible) property of the [dataLabelSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel) to **true**.

## Adding data labels

To display data labels, specify the field name containing the label text in the [labelPath](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#labelpath) property of [dataLabelSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel). The field can come from either the shape data or the layer data source.

The following example sets [labelPath](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#labelpath) from a field in the shape data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs28" %}

The following example sets [labelPath](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#labelpath) from a field in the layer data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs29" %}

## Customization

Customize data label appearance using the following properties in  [dataLabelSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel).

* [border](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [fill](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#fill) - To apply the color of the data labels in Maps.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#opacity) - To customize the transparency of the data labels in Maps.
* [textStyle](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#textstyle) - To customize the text style of the data labels in Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs30" %}

## Label animation

Animate data labels during initial rendering by setting the [animationDuration](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#animationduration) property in the [dataLabelSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel). Specify the duration in milliseconds.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs108/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs108/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs108" %}

## Smart labels

Control label behavior when labels exceed shape boundaries using the [smartLabelMode](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#smartlabelmode) property. The following modes are available:

* **None** -  It specifies that no action is taken, when a label exceeds the shape's region.
* **Hide** -  It specifies to hide the labels, when it exceeds the shape's region.
* **Trim** -  It specifies to trim the labels, when it exceeds the shape's region.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs31/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs31/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs31" %}

## Intersect action

Control label behavior when labels overlap with other labels using the [intersectionAction](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#intersectionaction) property. The following options are available:

* **None** -  It specifies that no action is taken, when the labels intersect.
* **Hide** -  It specifies to hide the labels when they intersect.
* **Trim** -  It specifies to trim the labels when they intersect.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs32/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs32/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs32" %}

## Adding data label as a template

Add custom HTML elements as data label templates using the [template](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#template) property of [dataLabelSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel).

>The `smartLabelMode`, `intersectionAction`, `animationDuration`, `border`, `fill`, `opacity`, and `textStyle` properties do not apply to [template](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel#template). Apply styles to label templates using standard CSS for HTML elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs33/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs33" %}
