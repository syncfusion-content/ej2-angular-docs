---
layout: post
title: Custom Value in Angular MultiSelect Dropdown | Syncfusion
description: Learn here all about Custom value in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom value 
documentation: ug
domainurl: ##DomainURL##
---

# Custom Value in Angular MultiSelect Dropdown

The Multi select component allows users to add new options that are not present in the data source when the [`allowCustomValue`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#allowcustomvalue) property is enabled. When a user selects a new custom value, the [`customValueSelection`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#customvalueselection) event is triggered, providing an opportunity to handle the custom input.

The following sample demonstrates configuration of custom value support with the Multi select component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs2" %}