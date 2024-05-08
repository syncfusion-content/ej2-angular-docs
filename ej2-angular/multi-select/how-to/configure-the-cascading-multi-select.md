---
layout: post
title: Configure the cascading multi select in Angular Multi select component | Syncfusion
description: Learn here all about Configure the cascading multi select in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Configure the cascading multi select 
documentation: ug
domainurl: ##DomainURL##
---

# Configure the cascading multi select in Angular Multi select component

The cascading MultiSelect is a series of MultiSelect, where the value of one MultiSelect depends upon  another's value. This can be configured by using the `change` event of the parent MultiSelect. Within that change event handler, data has to be loaded to the child MultiSelect based on the selected value of the parent MultiSelect.

The following example, shows the cascade behavior of country, state, and city MultiSelect. Here, the `dataBind` method is used to reflect the property changes immediately to the MultiSelect.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/cascading-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/cascading-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="cascading.html" %}
{% include code-snippet/multiselect/cascading-cs1/src/cascading.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/cascading-cs1" %}
