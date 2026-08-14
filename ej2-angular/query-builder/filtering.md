---
layout: post
title: Filtering in Angular Query Builder UI | Syncfusion
description: Create and delete rules and groups in the Syncfusion Angular Query Builder UI using addRules, addGroups, deleteRules, and deleteGroups.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Query Builder UI

Create dynamic filtering conditions and groups in the Query Builder through the UI or programmatically. Use the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#showbuttons) property to control button visibility.

## Creating and Deleting Conditions and Groups

Add or remove conditions and groups using the following methods:

* [`addRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#addrules) and [`deleteRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#deleterules): Add or remove individual conditions.
* [`addGroups`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#addgroups) and [`deleteGroups`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#deletegroups): Add or remove groups.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs6" %}
