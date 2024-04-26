---
layout: post
title: Label and size in Angular Check box component | Syncfusion
description: Learn here all about Label and size in Syncfusion Angular Check box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Label and size 
documentation: ug
domainurl: ##DomainURL##
---

# Label and size in Angular Check box component

This section explains the different sizes and labels.

## Label

The CheckBox caption can be defined using the [`label`](https://ej2.syncfusion.com/angular/documentation/api/check-box#label) property. This reduces the manual addition of label for CheckBox. You can customize the label position before or after the CheckBox through the [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/check-box#labelposition) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/label-and-size-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/label-and-size-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/label-and-size-cs3" %}

## Size

The different CheckBox size are default and small. To reduce the size of default CheckBox to small, set the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/check-box#cssclass) property to `e-small`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/label-and-size-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/label-and-size-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/label-and-size-cs4" %}

## See Also

* [CheckBox customization](./how-to/customized-checkbox)