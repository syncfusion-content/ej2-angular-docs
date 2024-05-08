---
layout: post
title: Hide sorting in excel filter in Angular Grid component | Syncfusion
description: Learn here all about Hide sorting in excel filter in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hide sorting in excel filter 
documentation: ug
domainurl: ##DomainURL##
---

# Hide sorting in excel filter in Angular Grid component

You can hide the sorting options on the excel filter dialog by setting display as none for the following classes.

```css
.e-excel-ascending,
.e-excel-descending,
.e-separator.e-excel-separator {
  display: none;
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/hide-sort-excel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/hide-sort-excel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/hide-sort-excel-cs1" %}