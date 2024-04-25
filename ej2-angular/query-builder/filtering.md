---
layout: post
title: Filtering in Angular Query builder component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Query builder component

Query Builder allows you to create or delete conditions and groups. You can use [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#showbuttons) to enable/disable these buttons.

You can create or delete conditions by interacting through the user interface and methods.

* Use the [`addRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#addrules), and [`deleteRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#deleterules) methods to create/delete conditions.
* Use [`addGroups`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#addgroups), and [`deleteGroups`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#deletegroups) methods to create/delete groups.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs6" %}
