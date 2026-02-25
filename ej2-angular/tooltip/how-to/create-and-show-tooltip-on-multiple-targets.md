---
layout: post
title:  Implementing multiple target in Angular Tooltip component | Syncfusion
description: Learn here all about Create and show Tooltip on multiple targets in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Implementing multiple target tooltips in Angular

Create and display tooltips on multiple targets within a container by defining specific target elements using the [`target`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#target) property. The tooltip initializes only on matched targets within the container.

The tooltip content is sourced from the title attribute of the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/form-valid-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tooltip/form-valid-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/form-valid-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/form-valid-cs2" %}
