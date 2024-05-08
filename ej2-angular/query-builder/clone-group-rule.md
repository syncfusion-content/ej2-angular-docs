---
layout: post
title: Clone Group/Rule in Angular Query builder component | Syncfusion
description: Learn here all about Clone Group/Rule in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Clone Group/Rule 
documentation: ug
domainurl: ##DomainURL##
---

# Clone Group/Rule in Angular Query builder component

The Query Builder functionality extends to cloning both individual rules and entire groups. Utilizing the Clone options will generate an exact duplicate of a rule or group adjacent to the original one. This feature enables users to replicate complex query structures effortlessly. The [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#showbuttons) function offers users the ability to toggle the visibility of these cloning buttons, providing convenient control over the cloning process within the Query Builder interface.

You can clone groups and rules by interacting through the user interface and methods.

* Use the [`cloneGroup`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#clonegroup) method to clone group.
* Use [`cloneRule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#clonerule) method to clone rule.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/clone-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/clone-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/clone-cs1" %}
