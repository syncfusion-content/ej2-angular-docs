---
layout: post
title: Complex column as foreign key column in Angular Grid component | Syncfusion
description: Learn here all about Complex column as foreign key column in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Complex column as foreign key column 
documentation: ug
domainurl: ##DomainURL##
---

# Complex column as foreign key column in Angular Grid component

The following example shows how to set the complex column as foreign key column.

In the following example, **Employee.EmployeeID** is a complex column and also declared as a foreign column which shows **FirstName** column from foreign data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs11" %}
