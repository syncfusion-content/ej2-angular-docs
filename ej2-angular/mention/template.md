---
layout: post
title: Template in Angular Mention component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Mention component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Mention component

The Mention has been provided with several options to customize each list item, display item and waiting popup. It uses the Essential JS 2 [Template engine](../../common/template-engine) to compile and render the elements properly.

## Item template

The content of each list item within the Mention can be customized with the help of [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/mention/#itemtemplate) property.

In the following sample, each list item is split into two columns to display relevant data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/item-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/item-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/item-template-cs1" %}

## Display template

The currently selected value that is to be displayed on the mention element can be customized using the [displayTemplate](https://ej2.syncfusion.com/angular/documentation/api/mention/#displaytemplate) property.

In the following sample, the selected value is displayed as a combined text of both `FirstName` and `City` in the mention element, which is separated by a hyphen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/item-template-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/item-template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/item-template-cs2" %}

## No records template

The Mention is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/mention/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/item-template-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/item-template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/item-template-cs3" %}

## Spinner template

The Mention provides support to customize the waiting spinner when data fetching takes time to load respective data in the popup using the [spinnerTemplate](https://ej2.syncfusion.com/angular/documentation/api/mention/#spinnertemplate) property.

In the following sample, customized spinner is shown while fetching the data from the service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/item-template-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/item-template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/item-template-cs4" %}
