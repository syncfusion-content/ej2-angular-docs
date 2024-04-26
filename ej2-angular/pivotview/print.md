---
layout: post
title: Print in Angular Pivotview component | Syncfusion
description: Learn here all about Print in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular Pivotview component

The rendered pivot table can be printed directly from the browser by invoking the [print](https://ej2.syncfusion.com/angular/documentation/api/grid/#print) method from the grid's instance. The below sample code illustrates the print option being invoked by an external button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs318/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs318/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs318" %}

Similarly, to print the pivot chart, use the [print](https://ej2.syncfusion.com/angular/documentation/api/chart/#print) method from the chart's instance. The below sample code illustrates the print option being invoked by an external button click.

> To use pivot chart, you need to inject the `PivotChart` module in the pivot table.

> To display the pivot chart, set the [displayOption](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayOptionModel/) property to either **Chart** or **Both**. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs319/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs319/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs319" %}