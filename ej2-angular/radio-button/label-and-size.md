---
layout: post
title: Label and size in Angular Radio button component | Syncfusion
description: Learn here all about Label and size in Syncfusion Angular Radio button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Label and size 
documentation: ug
domainurl: ##DomainURL##
---

# Label and size in Angular Radio button component

This section explains the different sizes and labels.

## Label

RadioButton caption can be defined by using the [`label`](https://ej2.syncfusion.com/angular/documentation/api/radio-button#label) property. This reduces the manual addition
of label for RadioButton. You can customize the label position before or after the RadioButton through the [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/radio-button#labelposition) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/radio-button/label-and-size-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/radio-button/label-and-size-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/radio-button/label-and-size-cs2" %}

## Size

The different RadioButton size are default and small. To reduce the size of the default RadioButton to small, set the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/radio-button#cssclass) property to `e-small`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/radio-button/label-and-size-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/radio-button/label-and-size-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/radio-button/label-and-size-cs3" %}

## See Also

* [How to customize the RadioButton appearance](./how-to/customize-radiobutton-appearance)
