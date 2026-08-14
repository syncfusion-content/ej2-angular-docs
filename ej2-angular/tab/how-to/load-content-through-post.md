---
layout: post
title: How to load content through Ajax in Angular Tab | Syncfusion
description: Load Angular Tab content through HTTP POST requests using Syncfusion's Ajax utility from ej2-base for external data.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to load content through Ajax in Angular Tab

The Tab component supports loading external content through Syncfusion's `Ajax` utility using HTTP POST requests. This approach is useful when you need to send data to the server or when the content requires authentication parameters. Refer to the following steps.

* Import the `Ajax` module from `ej2-base` and initialize with the target URL.

* Get the data from Ajax `Success` event, then initialize the Tab with retrieved external path data.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/ajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/ajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/ajax-cs1" %}