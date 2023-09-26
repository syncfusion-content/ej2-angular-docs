---
layout: post
title: Localization in Angular Inplace editor component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Inplace editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Inplace editor component

## Localization

Localization library allows you to localize the default text content of the **In-place Editor** to different cultures using the [locale](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#locale) property. **In-place Editor** following keys will be localize based on culture.

| Locale key | en-US (default) |
|------|------|
| save | Close |
| cancel | Cancel |
| loadingText | Loading... |
| editIcon | Click to edit |
| editAreaClick | Click to edit |
| editAreaDoubleClick | Double click to edit |

To load translation object in an application use `load` function of `L10n` class. In the following sample, `French` culture is set to **In-place Editor** and change the tooltip text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/editable-on-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/in-place-editor/editable-on-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/editable-on-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/editable-on-cs2" %}

## Right to left

Specifies the direction of the **In-place Editor** component using the enableRtl property. For writing systems that require it like Arabic, Hebrew, etc., the direction can be switched to right-to-left.

> It will not change based on the locale property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/in-place-editor/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/default-cs1" %}

## Format

Formatting is a way of representing the value in different format. You can format the following mentioned components with its `format` property, when it passed through the **In-place Editor** [model](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#model) property.

* [DatePicker](../datepicker/date-format/)
* [DateRangePicker](../daterangepicker/globalization/#date-format-customization)
* [DateTimePicker](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker/#format)
* [NumericTextBox](../numerictextbox/formats/#custom-formats)
* [Slider](../range-slider/format/)
* [TimePicker](https://ej2.syncfusion.com/angular/documentation/api/timepicker/#format)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/format-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/in-place-editor/format-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/format-cs1" %}