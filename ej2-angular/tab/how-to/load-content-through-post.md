---
layout: post
title: Load content through POST in Angular Tab component | Syncfusion
description: Learn here all about Load content through POST in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Load content through POST in Angular Tab component

The Tab component supports loading external content through Syncfusion's `Ajax` utility using HTTP POST requests. This approach is useful when you need to send data to the server or when the content requires authentication parameters. Refer to the following steps.

* Import the `Ajax` module from `ej2-base` and initialize with the target URL.

* Get the data from Ajax `Success` event, then initialize the Tab with retrieved external path data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/ajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/ajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/ajax-cs1" %}