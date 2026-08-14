---
layout: post
title: Lock Group/Rule in Angular Query Builder UI | Syncfusion
description: Lock rules and groups in the Syncfusion Angular Query Builder UI to make their field, operator, and value read-only via lockGroup and lockRule.
platform: ej2-angular
control: Lock Group/Rule 
documentation: ug
domainurl: ##DomainURL##
---

# Lock Group/Rule in Angular Query Builder UI

Prevent modifications to specific rules or entire groups by locking them. When a rule is locked, its field, operator, and value become read-only. Locking a group prevents all modifications to rules and nested groups within it. Control the visibility of lock buttons using the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#showbuttons) method.

You can lock groups and rules by interacting through the user interface and methods.

* Use the [`lockGroup`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#lockgroup) method to lock group.
* Use [`lockRule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#lockrule) method to lock rule.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/lock-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/lock-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/lock-cs1" %}
