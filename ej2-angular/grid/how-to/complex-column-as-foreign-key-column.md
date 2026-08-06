---
layout: post
title: Angular Grid Complex Column as Foreign Key Column | Syncfusion
description: Learn how to use a complex column as a foreign key column in Angular Data Grid to display related data from external data sources and nested object fields.
platform: ej2-angular
control: Complex column as foreign key column 
documentation: ug
domainurl: ##DomainURL##
---

# Complex column as foreign key column in Angular Data Grid

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
