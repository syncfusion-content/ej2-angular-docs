---
layout: post
title: Clone Group/Rule in Angular Query Builder UI | Syncfusion
description: Clone rules and groups in the Syncfusion Angular Query Builder UI to duplicate complex query structures using cloneGroup and cloneRule.
platform: ej2-angular
control: Clone Group/Rule 
documentation: ug
domainurl: ##DomainURL##
---

# Clone Group/Rule in Angular Query Builder UI

Create exact duplicates of rules or entire groups with the cloning feature. When cloning is enabled, a new rule or group is created adjacent to the original, allowing users to reuse complex query structures. The [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#showbuttons) method controls the visibility of clone buttons, giving users convenient access to this functionality.

You can clone groups and rules by interacting through the user interface and methods.

* Use the [`cloneGroup`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#clonegroup) method to clone group.
* Use [`cloneRule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#clonerule) method to clone rule.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/clone-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/clone-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/clone-cs1" %}
