---
layout: post
title: Conditional Hyperlink in Angular Pivot Table | Syncfusion
description: Apply conditional hyperlinks to rows or columns in the Syncfusion EJ2 Angular Pivot Table. Dynamically create unique cell links based on values.
platform: ej2-angular
control: Apply condition based hyper link for specific row or column 
documentation: ug
domainurl: ##DomainURL##
---

# Conditional Hyperlinks for Specific Rows or Columns

You can apply conditions for specific row or column using `label` option to show hyperlink option in the pivot table. It can be configured using the `conditionalSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to get visibility of hyperlink option for row or column.
* `condition`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs155/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs155/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs155" %}
