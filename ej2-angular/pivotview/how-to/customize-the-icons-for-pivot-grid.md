---
layout: post
title: Customize the icons for pivot grid in Angular Pivotview component | Syncfusion
description: Learn here all about Customize the icons for pivot grid in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize the icons for pivot grid 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icons for pivot grid in Angular Pivotview component

You can customize the pivot button icons in the pivot table by overriding the class **.pivot-button** with a custom property content as mentioned below.

```typescript

#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}

```

In the below sample, pivot table is rendered with a customized pivot button icons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/icon-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/icon-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/icon-customization-cs1" %}
