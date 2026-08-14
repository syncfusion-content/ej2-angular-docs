---
layout: post
title: How to configure cascading in Angular ComboBox | Syncfusion®
description: Build cascading Angular ComboBox dropdowns where the value of one ComboBox drives the data loaded into the next via the change event.
platform: ej2-angular
control: Cascading 
documentation: ug
domainurl: ##DomainURL##
---

# How to configure cascading in Angular ComboBox

The cascading ComboBox is a series of ComboBox, where the value of one ComboBox depends upon  another's value. This can be configured by using the [change](https://ej2.syncfusion.com/angular/documentation/api/combo-box/index-default#change) event of the parent ComboBox. Within that change event handler, data has to be loaded to the child ComboBox based on the selected value of the parent ComboBox.

To learn more about how to create a Cascading ComboBox in Angular, you can check the video below.

{% youtube "https://youtu.be/M3h_4_yVWLg?si=zTTizkJdINqJxk4k" %}

The following example, shows the cascade behavior of country, state, and city ComboBox. Here, the `dataBind` method is used to reflect the property changes immediately to the ComboBox.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/combobox/cascading-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/cascading-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="cascading.html" %}
{% include code-snippet/combobox/cascading-cs1/src/cascading.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/cascading-cs1" %}