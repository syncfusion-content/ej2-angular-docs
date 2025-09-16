---
layout: post
title: Get row cell index in Angular Grid component | Syncfusion
description: Learn how to identify the row and cell index in the Syncfusion Angular Grid component using event handlers and DOM attributes.
platform: ej2-angular
control: Get row cell index 
documentation: ug
domainurl: ##DomainURL##
---

# Get row cell index in Angular Grid component

The Syncfusion Angular Grid enables you to determine the specific row and cell indices when a user interacts with the grid. This can be accomplished by utilizing the [`rowSelected`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowselected) event. In this context, the row and cell indices are obtained through the **aria-rowindex** attribute on the `<tr>` element (for the row) and the **aria-colindex** attribute on the `<td>` element (for the cell).

Below is an example demonstrating how to retrieve the row and cell index using the available events and DOM attributes. When a row is selected, the relevant indices are extracted and made accessible within the event handler logic.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/collapse-all-initial-cs2" %}