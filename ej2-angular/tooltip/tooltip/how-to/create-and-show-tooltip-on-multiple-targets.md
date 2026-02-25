---
layout: post
title: Create and show tooltip on multiple targets in Angular Tooltip component | Syncfusion
description: Learn here all about Create and show tooltip on multiple targets in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Create and show tooltip on multiple targets 
documentation: ug
domainurl: ##DomainURL##
---

# Create and show tooltip on multiple targets in Angular Tooltip component

Create and display tooltips on multiple targets within a container by assigning specific target elements to the `target` property. The tooltip initializes only on matched targets within the container.

The tooltip content is derived from the `title` attribute of the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/form-valid-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/form-valid-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/form-valid-cs3" %}
