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

Query Builder allows you to clone rules as well as groups. The Clone options will create an exact replica of a rule or group next to the original. You can use [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#showbuttons) to enable/disable these buttons.

You can clone groups and rules by interacting through the user interface and methods.

* Use the [`cloneGroup`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#cloneGroup) method to clone group.
* Use [`cloneRule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#cloneRule) method to clone rule.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/clone-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/clone-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/clone-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/clone-cs1" %}
