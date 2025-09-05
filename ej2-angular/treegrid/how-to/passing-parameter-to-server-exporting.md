---
layout: post
title: Passing parameter to server exporting in Angular TreeGrid component | Syncfusion
description: Learn how to pass additional parameters to server exporting in the Syncfusion Angular TreeGrid component using query and addParams methods.
platform: ej2-angular
control: Passing parameter to server exporting 
documentation: ug
domainurl: ##DomainURL##
---

# Passing parameter to server exporting in Angular TreeGrid component

Additional parameters can be passed to the server during exporting by using the [`query`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#query) property and invoking the [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method. In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event, define parameters as key-value pairs so they will be received at the server during export.

In the example below, *recordcount* is passed as *12* using the [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs11" %}

> For more information on advanced features, refer to the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Additional examples of data presentation and manipulation can be found in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).