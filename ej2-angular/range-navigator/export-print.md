---
layout: post
title: Export Print in Angular Range Navigator | Syncfusion
description: Learn here all about Export print in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Export print 
documentation: ug
domainurl: ##DomainURL##
---

# Export Print in Angular Range Navigator

## Export

The rendered Range Navigator can be exported to **JPEG**, **PNG**, **SVG**, or **PDF** format by using the [`export`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator#export) method in the Range Navigator. This method contains the following parameters:

* **Type** - To specify the export type. The component can be exported to **JPEG**, **PNG**, **SVG**, or **PDF** format.
* **File name** - To specify the file name to export.
* **Orientation** - To specify the orientation type. This is applicable only for PDF export type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/export-print/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/export-print/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/export-print/default-cs1" %}

## Print

The rendered Range Navigator can be printed directly from the browser by calling the public method [`print`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator#print).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/export-print/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/export-print/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/export-print/default-cs2" %}