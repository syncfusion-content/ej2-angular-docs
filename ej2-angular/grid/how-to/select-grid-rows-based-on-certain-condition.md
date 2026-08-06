---
layout: post
title: Angular Grid Conditional Row Selection | Syncfusion
description: Learn how to programmatically select Angular Data Grid rows based on conditions using the event and selectRows method.
platform: ej2-angular
control: Select grid rows based on condition
documentation: ug
domainurl: ##DomainURL##
---

# Conditional Row Selection in Angular Data Grid
Rows can be programmatically selected in the Syncfusion Angular Grid component using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) method within the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event. This approach allows selection logic to execute after the grid has fully rendered its data.
In the example below, all grid rows are selected where the value of the **EmployeeID** column is greater than **3**. The selection logic is placed inside the `dataBound` event handler to ensure the Grid is ready for programmatic selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/grid/custom-column-cs5" %}