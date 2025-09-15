---
layout: post
title: Complex column as foreign key column in Angular Grid component | Syncfusion
description: Learn how to configure complex columns as foreign key columns in the Syncfusion Angular Grid component, including displaying nested data relationships with foreign data sources.
platform: ej2-angular
control: Complex column as foreign key column 
documentation: ug
domainurl: ##DomainURL##
---

# Complex column as foreign key column in Angular Grid component

You can configure a complex column, such as a nested property, to act as a foreign key column in the Syncfusion Angular Grid. This allows displaying and binding data from a related foreign data source, using complex field paths for scenarios involving nested data.

The following example demonstrates setting **Employee.EmployeeID** as a complex column and declaring it as a foreign key column. In this setup, the grid displays the **FirstName** field from the associated foreign data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs11" %}
