---
layout: post
title: Angular TreeGrid Row Cell Index | Syncfusion
description: Learn how to get the specific row and cell index in the Angular TreeGrid using the rowSelected event and element attributes.
platform: ej2-angular
control: Get row cell index 
documentation: ug
domainurl: ##DomainURL##
---

# Get Row Cell Index in Angular TreeGrid

The specific row and cell indices of the TreeGrid can be retrieved using the [`rowSelected`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowselected) event. The row index is determined by the *aria-rowindex* attribute of the *tr* element, and the cell (column) index is obtained from the *aria-colindex* attribute of the *td* element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs10" %}

> For additional information on TreeGrid features, see the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Examples of data presentation and manipulation can be found in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).