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

Create dynamic filtering conditions and groups in the Query Builder through the UI or programmatically. Use the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#showbuttons) property to control button visibility.

## Creating and Deleting Conditions and Groups

Add or remove conditions and groups using the following methods:

* [`addRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#addrules) and [`deleteRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#deleterules): Add or remove individual conditions.
* [`addGroups`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#addgroups) and [`deleteGroups`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#deletegroups): Add or remove groups.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs6" %}
