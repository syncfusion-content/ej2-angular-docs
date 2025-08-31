---
layout: post
title: Changing minimum height in Angular Pivotview component | Syncfusion
description: Learn how to set minimum height for the Angular Pivotview component using the minHeight property in Syncfusion Essential JS 2.
platform: ej2-angular
control: Pivotview minimum height 
documentation: ug
domainurl: ##DomainURL##
---

# Setting minimum height in Angular PivotView component

The `minHeight` property allows you to set the minimum height for the Angular Pivotview component. By default, the component maintains a minimum height of **300px**. This property ensures the component remains visible and functional even when the container height is smaller than the specified minimum value.

When the content exceeds the minimum height, the component automatically adjusts to accommodate the data. This property is particularly useful for responsive layouts where the component needs to maintain usability across different screen sizes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs158/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs158/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs158" %}