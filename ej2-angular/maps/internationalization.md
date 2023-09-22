---
layout: post
title: Internationalization in Angular Maps component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Internationalization 
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Angular Maps component

Maps provide support for internationalization for the below elements.

* Data label
* Tooltip

For more information about number and date formatter, refer to the [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html) section.

<!-- markdownlint-disable MD036 -->

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales. Internationalization library is used to globalize number, date, time values in Maps component using [`format`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#format) property in the [`Maps`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel).

## Numeric Format

The numeric formats such as currency, percentage and so on can be displayed in the tooltip and data labels of the Maps using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#format) property in the [`Maps`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel). In the below example, the tooltip is globalized to **German** culture. When setting the [`useGroupingSeparator`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#usegroupingseparator) property as **true**, the numeric text in the Maps separates with the comma separator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs46/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs46/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs46/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs46" %}