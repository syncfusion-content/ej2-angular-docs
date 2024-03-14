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

Query Builder allows you to lock rules as well as groups. When a rule is locked, the field, operator, and value will be disabled. When a group is locked, all the elements within the group will be disabled. You can use [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#showbuttons) to enable/disable these buttons.

You can lock groups and rules by interacting through the user interface and methods.

* Use the [`lockGroup`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#lockGroup) method to lock group.
* Use [`lockRule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#lockRule) method to lock rule.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/lock-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/lock-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/lock-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/lock-cs1" %}
