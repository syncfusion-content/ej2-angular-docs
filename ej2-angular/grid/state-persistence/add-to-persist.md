---
layout: post
title: Add to persist in Angular Grid component | Syncfusion
description: Learn here all about Add to persist in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add to persist 
documentation: ug
domainurl: ##DomainURL##
---

# Add to persist in Angular Grid component

## Persist the column template, header template and header Text

By default, the Grid properties such as column template, header text, header template, column formatter, and value accessor will not persist when [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) is set to true. Because the column template and header text can be customized at the application level.

If you wish to restore all these column properties, then you can achieve it by cloning the grid’s columns property using JavaScript Object’s assign method and storing this along with the persist data manually. While restoring the settings, this column object must be assigned to the grid’s columns property to restore the column settings as demonstrated in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs8" %}