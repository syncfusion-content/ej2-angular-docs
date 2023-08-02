---
layout: post
title: Customize number date and time values in Angular Pivotview component | Syncfusion
description: Learn here all about Customize number date and time values in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize number date and time values 
documentation: ug
domainurl: ##DomainURL##
---

# Customize number date and time values in Angular Pivotview component

You can format the number, date, and time values for each field using `formatSettings` option under `dataSourceSettings`. It can be configured through code behind, during initial rendering.

## Number formatting

For numbers, the formatting settings required to apply through code behind are:

* `name`: It allows to set the field name.
* `format`: It allows to set the format of the respective field.

> Also, you can customize the applied number format by setting the [`NumberFormatOptions`](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#manipulating-numbers) options in `formatSettings` itself.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs163/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs163/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs163/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs163" %}

## Date and Time formatting

For date and time, the formatting settings required to apply through code behind are:

* `name`: It allows to set the field name.
* `format`: It allows to set the format of the respective field.
* `type`: It allows to set the type of format to be used for the respective field.

> Also, you can customize the applied date format by setting [`DateFormatOptions`](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#manipulating-datetime) options in `formatSettings` itself.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs164/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs164/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs164/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs164" %}

## Limitations of date formatting

As per Firefox and Edge browsers standards, most of the date and time formats used in data source aren’t supported. For example: Apr-2000, Apr-01-2000, 01-03-2000, 2000-Apr-01 etc... are not supported. Meanwhile [`ISO formats`](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) will be supported across all browsers.