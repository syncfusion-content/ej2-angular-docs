---
layout: post
title: Restrict decimal points while editing in Angular TreeGrid component | Syncfusion
description: Learn how to restrict decimal points while editing in the Syncfusion Angular TreeGrid component using NumericTextBox configuration.
platform: ej2-angular
control: Restrict decimal points while treegrid editing 
documentation: ug
domainurl: ##DomainURL##
---

# Restrict decimal points while editing in Angular TreeGrid component

By default, the NumericTextBox restricts input to two decimal places when editing a numeric column in the TreeGrid. To control the number of decimal points allowed, use the **validateDecimalOnType** and **decimals** properties of the NumericTextBox.

In the demo below, editing a row restricts typing decimal point values in the NumericTextBox of the **Price** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs14" %}

> For more feature details, visit the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Additional practical examples are available in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/treegrid-overview).