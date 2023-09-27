---
layout: post
title: Smith chart marker in Angular Smithchart component | Syncfusion
description: Learn here all about Smith chart marker in Syncfusion Angular Smithchart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Smith chart marker 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Smith chart marker in Angular Smithchart component

Markers and Datalabels are used to provide information about the data points in the series. You can add a shape to adorn each data point. By default marker and datalabel both are disabled in smithchart. You can enable both of them by setting visible property as true in marker and datalabel settings

## Marker

Default visibility of marker is false. You can enable the marker by setting property visible as true in marker settings. This will add marker for each point in the series. Using marker setting, you can customize marker differently for each series in smithchart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs21/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs21/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs21" %}

**Marker Customization**

Using marker settings in series, you can customize the marker for each series differently. Using marker settings, you can customize following properties differently for each series in the smithchart.

* [`width`] - To control the width of the marker.
* [`height`] - To control the height of the marker.
* [`fill`] - Used to customize the fill color of the marker.
* [`opacity`] - Used to customize the opacity of the marker.
* [`border`] - Used to control the width and color of the marker's border.
* [`shape`] - Used to change the shape of the marker.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs22/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs22/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs22" %}

## Datalabels

By default, datalabel is disabled. You can enable the datalabel by setting property visible as true in datalabel settings. For each point in series, data label is created. Datalabel for each series can be customized differently using datalabel settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs23/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs23/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs23" %}

**Datalabel customization**

Using datalabel settings in marker, you can customize the datalabel for each series differently. In datalabel, you can customize the following properties differently for each series.

* [`fill`] - Used to changes the fill color of the data label's shape.
* [`opacity`] - Used to control the opacity of the data label's shape.
* [`border`] - Used to customize the width and color of the border.
* [`textStyle`] - Used to customize the font color, width and size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs24/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs24/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs24" %}