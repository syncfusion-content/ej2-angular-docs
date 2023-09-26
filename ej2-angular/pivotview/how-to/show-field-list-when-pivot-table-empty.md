---
layout: post
title: Show field list when pivot table empty in Angular Pivotview component | Syncfusion
description: Learn here all about Show field list when pivot table empty in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show field list when pivot table empty 
documentation: ug
domainurl: ##DomainURL##
---

# Show field list when pivot table empty in Angular Pivotview component

When there are no fields in a pivot table's row, column, value, and filter axes, a field list can still be displayed. To do so, use the [`dataBound`](https://ej2.syncfusion.com/documentation/api/pivotview/#databound) event and call the `onShowFieldList` method as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs170/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs170/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs170/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs170" %}