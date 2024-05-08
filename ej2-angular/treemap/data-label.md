---
layout: post
title: Data label in Angular Treemap component | Syncfusion
description: Learn here all about Data label in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data label 
documentation: ug
domainurl: ##DomainURL##
---

# Data label in Angular Treemap component

Data Labels are used to identify the name of items or groups in the TreeMap component. Data Labels will be shown by specifying the data source properties in the [`labelPath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labelpath) of the [`leafItemSettings`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#leafitemsettings).

## Format

Customize the labels for each item using the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labelformat) property in the [`leafItemSettings`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#leafitemsettings).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs9" %}

## Template

The template supports customizing labels of each leaf node using the [`labelTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labeltemplate) property. It uses Essential JS2 template engine to render elements and the position of templates can be customize using the [`templatePosition`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#templateposition) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs10" %}

## InterSectAction

When the label size in each item exceeds the actual size, use the [`interSectAction`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#intersectaction) property in the [`leafItemSettings`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#leafitemsettings) to customise the labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs11" %}