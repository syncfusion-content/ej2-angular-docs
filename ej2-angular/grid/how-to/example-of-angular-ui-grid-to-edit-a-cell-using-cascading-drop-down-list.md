---
layout: post
title: Example of angular ui grid to edit a cell using cascading drop down list in Angular Grid component | Syncfusion
description: Learn how to implement cascading DropDownList editors for cell editing in the Syncfusion Angular Grid using the Cell Edit Template feature.
platform: ej2-angular
control: Example of angular ui grid to edit a cell using cascading drop down list 
documentation: ug
domainurl: ##DomainURL##
---

# Example of angular ui grid to edit a cell using cascading drop down list in Angular Grid component

Cascading DropDownList editors can be implemented for grid cell editing using the Cell Edit Template feature in the Syncfusion Angular Grid. This approach enables you to establish a dependency between two dropdowns—for example, the selection in one dropdown (such as `ShipCountry`) dynamically determines the available options in a second dropdown (`ShipState`).

The following example demonstrates configuring cell editors for the **ShipCountry** and **ShipState** columns with cascading DropDownList interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs50/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs50" %}
