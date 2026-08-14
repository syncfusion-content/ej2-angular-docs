---
layout: post
title: How to create Tooltip on multiple targets in Angular Tooltip | Syncfusion
description: Show the Syncfusion Angular Tooltip on multiple elements inside a container by listing matching selectors in the tooltip target property.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# How to create Tooltip on multiple targets in Angular Tooltip

Create and display tooltips on multiple targets within a container by defining specific target elements using the [`target`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#target) property. The tooltip initializes only on matched targets within the container.

The tooltip content is sourced from the title attribute of the target element.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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
