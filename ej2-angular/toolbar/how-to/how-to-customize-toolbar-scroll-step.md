---
layout: post
title: How to customize Toolbar scroll step in Angular Toolbar | Syncfusion
description: Customize the Angular Toolbar scrollStep property to control how far items scroll when clicking the left or right navigation icon.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# How to customize Toolbar scroll step in Angular Toolbar

The Toolbar component supports customizing the scrolling distance when you click the left and right side navigation icons. You can customize the [`scrollStep`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#scrollstep) property for scrolling distance. Refer to the following code example.

By using the Toolbar scrollStep property, pass a required value to customize toolbar scrollStep.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/toolbar/scrollstep-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/scrollstep-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/scrollstep-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/scrollstep-cs1" %}