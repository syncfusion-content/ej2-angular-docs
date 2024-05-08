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

Tooltip can be created and shown on multiple targets within a container by defining the specific target elements to the target property. So, the tooltip is initialized only on matched targets within a container.

In this case, the tooltip content is assigned from the title attribute of the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/form-valid-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/form-valid-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/form-valid-cs2" %}
