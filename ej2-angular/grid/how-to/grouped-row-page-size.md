---
layout: post
title: Grouped row page size in Angular Grid component | Syncfusion
description: Learn here all about Grouped row page size in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouped row page size 
documentation: ug
domainurl: ##DomainURL##
---

# Grouped row page size in Angular Grid component

By default, we have displayed the no of records based on the [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize). If you want to show grouped column rows based on the [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize) then we suggest you to use the below way.

In the below sample, we have overridden the default **generateQuery** to display the grouped rows instead of grid rows based on the [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering1-cs13" %}