---
layout: post
title: Validation in Angular Kanban component | Syncfusion
description: Learn here all about Validation in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Validation 
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Angular Kanban component

Validate particular column using the `minCount` or `maxCount` properties. The corresponding columns gets different appearance when validation fails. In default layout, `constraintType` property accept only `Column` type. In swimlane layout, accept both `Column` and `Swimlane` constraint type.

There are two types of constraints:
1. Column
2. Swimlane

> By default, the column count validation is performed based on Kanban **columns**.

## Minimum card limit

The `minCount` property is used to specify the minimum cards hold on particular column or swimlane cell. If the column or swimlane total card count falls short of the minimum count value, it shows the column or cell background colour with validation fails.

## Maximum card limit

The `maxCount` property is used to specify the maximum cards hold on particular column or swimlane cell. If the column or swimlane cell total card count exceeds the maximum count value, it shows the column or cell background colour with validation fails.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/column-validation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/kanban/column-validation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/column-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/column-validation-cs1" %}
