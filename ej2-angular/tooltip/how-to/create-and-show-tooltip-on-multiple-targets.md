---
layout: post
title:  Implementing multiple target in Angular Tooltip component | Syncfusion
description: Learn here all about Create and show Tooltip on multiple targets in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Implementing multiple target Tooltips in Angular

Tooltip can be created and shown on multiple targets within a container by defining the specific target elements to the the [`target`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#target) property. This way, the Tooltip is initialized only on the matched targets within the container.

In this case, the Tooltip content is assigned from the title attribute of the target element.

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
