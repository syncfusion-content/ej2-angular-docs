---
layout: post
title: Cascading in Angular Combo box component | Syncfusion
description: Learn here all about Cascading in Syncfusion Angular Combo box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cascading 
documentation: ug
domainurl: ##DomainURL##
---

# Cascading in Angular Combo box component

The cascading ComboBox is a series of ComboBox, where the value of one ComboBox depends upon  another's value. This can be configured by using the [change](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#change) event of the parent ComboBox. Within that change event handler, data has to be loaded to the child ComboBox based on the selected value of the parent ComboBox.

The following example, shows the cascade behavior of country, state, and city ComboBox. Here, the `dataBind` method is used to reflect the property changes immediately to the ComboBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/cascading-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/combobox/cascading-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/cascading-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="cascading.html" %}
{% include code-snippet/combobox/cascading-cs1/src/cascading.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/cascading-cs1" %}