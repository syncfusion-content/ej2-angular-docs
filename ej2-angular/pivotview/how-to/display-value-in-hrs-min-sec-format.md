---
layout: post
title: Display string value to pivot table values in Angular Pivotview component | Syncfusion
description: Learn here all about Display string value to pivot table values in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Display string value to pivot table values
documentation: ug
domainurl: ##DomainURL##
---
# Display string value to pivot table values

End user can display string value to the pivot table's value cell by using the [aggregateCellInfo](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#aggregatecellinfo) event.

In the following example, each cell value of the **Sold** field's actual value has been assigned from its combination data sets obtained from the [args.cellSets](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/aggregateEventArgs/#cellsets) in the [aggregateCellInfo](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#aggregatecellinfo) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs314/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs314/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs314/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs314" %}
