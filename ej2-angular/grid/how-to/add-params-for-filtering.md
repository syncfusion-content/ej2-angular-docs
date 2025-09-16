---
layout: post
title: Add params for filtering in Angular Grid component | Syncfusion
description: Learn how to customize filter parameters in the Syncfusion Angular Grid for precise control over filter UI and user experience.
platform: ej2-angular
control: Add params for filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Add params for filtering in Angular Grid component

Customize the default filter UI in the Syncfusion Angular Grid by configuring the `params` property within a column's filter settings. This allows fine control over the filtering component’s behavior and appearance, especially in Menu filter mode.

For instance, the sample below demonstrates columns **OrderID** and **Freight** as numeric types. When the filter dialog is opened for these columns, a NumericTextBox appears by default with a spin button for numeric value adjustment. By assigning options to the `params` property, such as setting `showSpinButton` to **false**, you can hide the spin button in the NumericTextBox for the **OrderID** column, customizing the user interface as required.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering1-cs12" %}
