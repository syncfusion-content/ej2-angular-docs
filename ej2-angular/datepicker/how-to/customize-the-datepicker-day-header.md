---
layout: post
title: Customize the datepicker day header in Angular Datepicker component | Syncfusion
description: Learn here all about Customize the datepicker day header in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize the datepicker day header 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the datepicker day header in Angular Datepicker component

You can change the format of the day that to be displayed in header using [`dayHeaderFormat`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#dayheaderformat) property. By default, the format is `Short`.

You can find the possible formats on below.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su ) in day header. |
| `Narrow` | Sets the single character of day name (like S ) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun ) in day header. |
| `Wide` | Sets the long format of day name (like Sunday ) in day header. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/header-format-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/header-format-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/header-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/header-format-cs1" %}
