---
layout: post
title: How to add custom animation to Sidebar in Angular Sidebar | Syncfusion
description: Apply custom animation effects to the Angular Sidebar by overriding CSS styles to match any custom expand size.
platform: ej2-angular
control: Sidebar 
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom animation to Sidebar in Angular Sidebar

The following example demonstrates the Sidebar rendered with custom animation effects. Click the buttons available in the main content area to check how the custom animations work with the Sidebar.

The Sidebar will automatically adjust its expanding animation to match any custom size specified in `CSS` styles.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/sidebar/animation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/animation-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/animation-cs1" %}
