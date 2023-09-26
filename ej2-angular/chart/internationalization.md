---
layout: post
title: Internationalization in Angular Chart component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Internationalization 
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Angular Chart component

Chart provide supports for internationalization for below chart elements.

* Datalabel.
* Axis label.
* Tooltip.

For more information about number and date formatter you can refer [`internationalization`](https://ej2.syncfusion.com/angular/documentation/chart/internationalization/?no-cache=1).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing an component that works in different cultures/locales. Internationalization  library is used to globalize number, date, time values in Chart component using  `labelFormat` property in axis.

**Numeric Format**

In the below example axis, point  and tooltip labels are globalized to EUR.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/number-format-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/number-format-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/number-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/number-format-cs1" %}