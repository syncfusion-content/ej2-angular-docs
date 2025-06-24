---
layout: post
title: Header bar in Angular Schedule component | Syncfusion
description: Learn here all about Header bar in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Header bar 
documentation: ug
domainurl: ##DomainURL##
---

# Header bar in Angular Schedule component

The header part of Scheduler can be customized easily with the built-in options available.

## Show or Hide header bar

By default, the header bar holds the date and view navigation options, through which the user can switch between the dates and various views. This header bar can be hidden from the UI by setting `false` to the [`showHeaderBar`](https://ej2.syncfusion.com/angular/documentation/api/schedule#showheaderbar) property. It's default value is `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/header-bar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/header-bar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/header-bar-cs1" %}

![Hide Header Bar](images/schedule-hide-header-bar.png)

## Customizing header bar using template

Apart from the default date navigation and view options available on the header bar, you can add custom items into the Scheduler header bar by making use of the [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#toolbaritems) property. To display the default items, it's essential to assign a [`name`](https://ej2.syncfusion.com/angular/documentation/api/schedule/toolbarItem/#name) field to each item. The names of the default items are `Previous`, `Next`, `Today`, `DateRangeText`, `NewEvent`, and `Views`. For custom items you can give the name as `Custom` to the `name` field. Here, the default items such as previous, next, date range text, and today have been used along with dropdownlist as custom items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/header-bar-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/header-bar-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/header-bar-template" %}

## Customizing header bar using event

Apart from the default date navigation and view options available on the header bar, you can add custom items into the Scheduler header bar by making use of the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/schedule#actionbegin) event. Here, an employee image is added to the header bar, clicking on which will open the popup showing that person's short profile information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/header-bar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/header-bar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/header-bar-cs2" %}

## How to display the view options within the header bar popup

By default, the header bar holds the view navigation options, through which the user can switch between various views. You can move this view options to the header bar popup by setting `true` to the [`enableAdaptiveUI`](https://ej2.syncfusion.com/angular/documentation/api/schedule#enableadaptiveui) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs38" %}

![Displaying Header Bar Popup](images/schedule-header-bar-popup.png)

> Refer [here](./resources/#adaptive-ui-in-desktop) to know more about adaptive UI in resources scheduler.

## Date header customization

The Scheduler UI that displays the date text on all views are considered as the date header cells. You can customize the date header cells of Scheduler either using [`dateHeaderTemplate`] or [`renderCell`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rendercell) event.

### Using date header template

The [`dateHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#dateheadertemplate) option is used to customize the date header cells of day, week and work-week views.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/header-bar-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/header-bar-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/header-bar-cs3" %}

![Date Header Customization](images/schedule-customize-dateheader.png)

### Using renderCell event

In month view, the date header template is not applicable and therefore the same customization can be added beside the date text in month cells by making use of the [`renderCell`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rendercell) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/header-bar-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/header-bar-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/header-bar-cs4" %}

## Customizing the date range text

The [`dateRangeTemplate`](../api/schedule/#daterangetemplate) option allows you to customize the text content of the date range displayed in the scheduler. By default, the date range text is determined by the scheduler view being used. However, you can use the [`dateRangeTemplate`](../api/schedule/#daterangetemplate) option to override the default text and specify your own custom text to be displayed.

The [`dateRangeTemplate`](../api/schedule/#daterangetemplate) property includes `startDate`, `endDate` and `currentView` options, you can customize the date range text using these available options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/header-bar-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/header-bar-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/header-bar-cs5" %}

## Customizing header indent cells

It is possible to customize the header indent cells using the [`headerIndentTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#headerindenttemplate) option and change the look and appearance in both the vertical and timeline views. In vertical views, You can customize the header indent cells at the hierarchy level and you can customize the resource header left indent cell in timeline views using the template option.

**Example:** To customize the header left indent cell to display resources text, refer to the below code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/header-indent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/header-indent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/header-indent-cs1" %}

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
