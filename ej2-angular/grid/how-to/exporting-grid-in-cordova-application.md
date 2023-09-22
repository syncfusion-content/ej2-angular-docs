---
layout: post
title: Exporting grid in cordova application in Angular Grid component | Syncfusion
description: Learn here all about Exporting grid in cordova application in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Exporting grid in cordova application 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in cordova application in Angular Grid component

Cordova application does not support direct file download. So we have to use the Blob stream to export the Grid. You can use corresponding exporting methods and exportComplete events to get the Blob stream.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs4" %}
