---
layout: post
title: Apply conditional formatting for specific row or column in Angular Pivotview component | Syncfusion
description: Learn here all about Apply conditional formatting for specific row or column in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Apply conditional formatting for specific row or column 
documentation: ug
domainurl: ##DomainURL##
---

# Apply conditional formatting for specific row or column in Angular Pivotview component

You can apply conditional formatting for specific row or column using `label` option in the pivot table. It can be configured using the `conditionalFormatSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to apply conditions for row or column.
* `condition`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.
* `style`: Specifies the style for the cell.

To use the conditional formatting feature, You need to inject the `ConditionalFormatting` module in pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs156/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs156/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs156" %}
