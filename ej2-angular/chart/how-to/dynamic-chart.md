---
layout: post
title: Dynamic chart in Angular Chart component | Syncfusion
description: Learn here all about Dynamic chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dynamic chart 
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic chart in Angular Chart component

By using an HTML button, you can add the chart dynamically when the button is clicked.

To add the chart dynamically through a button click, follow the given steps:

**Step 1**:

Initially, create an HTML button.

**Step 2**:

Create a chart inside the button's `onClick` function. Now, clicking the button will render charts based on the click count.

The following code sample demonstrates the output.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs7" %}