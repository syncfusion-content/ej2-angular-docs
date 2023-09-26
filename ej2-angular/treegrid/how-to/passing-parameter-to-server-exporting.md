---
layout: post
title: Passing parameter to server exporting in Angular Treegrid component | Syncfusion
description: Learn here all about Passing parameter to server exporting in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Passing parameter to server exporting 
documentation: ug
domainurl: ##DomainURL##
---

# Passing parameter to server exporting in Angular Treegrid component

You can pass the additional parameter in the [`query`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#query) property by invoking [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method. In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed *recordcount* as *12* using [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/refresh-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs11" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.