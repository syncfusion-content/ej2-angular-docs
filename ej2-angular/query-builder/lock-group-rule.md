---
layout: post
title: Lock Group/Rule in Angular Query builder component | Syncfusion
description: Learn here all about Lock Group/Rule in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Lock Group/Rule 
documentation: ug
domainurl: ##DomainURL##
---

# Lock Group/Rule in Angular Query builder component

Prevent modifications to specific rules or entire groups by locking them. When a rule is locked, its field, operator, and value become read-only. Locking a group prevents all modifications to rules and nested groups within it. Control the visibility of lock buttons using the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#showbuttons) method.

You can lock groups and rules by interacting through the user interface and methods.

* Use the [`lockGroup`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#lockgroup) method to lock group.
* Use [`lockRule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#lockrule) method to lock rule.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/lock-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/lock-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/lock-cs1" %}
