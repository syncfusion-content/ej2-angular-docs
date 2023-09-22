---
layout: post
title: Prevent to persist in Angular Grid component | Syncfusion
description: Learn here all about Prevent to persist in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent to persist 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent to persist in Angular Grid component

## Prevent columns from persisting

When the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to true, the Grid properties such as [Grouping](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettingsModel/), [Paging](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/), [Filtering](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/), [Sorting](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettingsModel/), and [Columns](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

>**Note:** When the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to true, the Grid properties such as column template, column formatter, header text, and value accessor will not persist.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs9" %}