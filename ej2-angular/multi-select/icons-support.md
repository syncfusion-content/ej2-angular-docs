---
layout: post
title: Icons support in Angular Multi select component | Syncfusion
description: Learn here all about Icons support in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Icons support 
documentation: ug
domainurl: ##DomainURL##
---

# Icons support in Angular Multi select component

You can render **icons** to the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#iconcss) field within the [fields](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#fields) property. This [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#iconcss) field creates a `span` element in each list item with the mapped CSS class name, allowing you to style the icons according to your requirements.

In the following sample, icon classes are mapped with the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#iconcss)  field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/iconClass-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/iconClass-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/iconClass-cs1" %}