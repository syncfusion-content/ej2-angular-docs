---
layout: post
title: Angular TreeGrid Filtering Parameters | Syncfusion
description: Learn how to add filtering parameters in Angular TreeGrid, including menu filter customization, parameter handling, and advanced filtering options.
platform: ej2-angular
control: Add parameter for filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Add Parameters for Filtering in Angular TreeGrid

You can customize the default settings of components used in the Menu filter by configuring the `params` property within the column definition's filter settings. 

In the following example, the `TaskID` and `Duration` columns are numeric columns. When opening the filter dialog, a NumericTextBox with spin buttons is displayed to adjust the filter value. By utilizing the `params` option, the spin button in the NumericTextBox for the `TaskID` column is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs1" %}

> Refer to the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for more information about available features. You can also view the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.
