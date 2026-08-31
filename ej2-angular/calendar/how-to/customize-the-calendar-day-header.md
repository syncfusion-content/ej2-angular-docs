---
layout: post
title: How to customize the day header in Angular Calendar | Syncfusion®
description: Learn how to customize the Calendar day header format in the Syncfusion Angular Calendar using the dayHeaderFormat property.
platform: ej2-angular
control: Customize the calendar day header 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the day header in Angular Calendar

You can customize the format of the day names displayed in the Calendar header using the [`dayHeaderFormat`](https://ej2.syncfusion.com/angular/documentation/api/calendar#dayheaderformat) property. The default value is `Short`.

The dayHeaderFormat property supports the following values:

| **Name** | **Description** |
|------|---------------------|
| `Short` | Displays the short form of the day name, such as Su. |
| `Narrow` | Displays a single-character day name, such as S. |
| `Abbreviated` | Displays the abbreviated day name, such as Sun. |
| `Wide` | Displays the full day name, such as Sunday. |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/header-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/header-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/header-format-cs1" %}
