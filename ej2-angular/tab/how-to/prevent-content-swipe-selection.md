---
layout: post
title: How to prevent content swipe selection in Angular Tab | Syncfusion
description: Configure the Angular Tab swipeMode to Touch, Mouse, Both, or None to control swipe-based tab switching on forms.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent content swipe selection in Angular Tab

The [`swipeMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/#swipeMode) property in the Tab component enables users to navigate between tabs using swipe gestures, enhancing the navigation experience. It supports both touch and mouse inputs for intuitive tab switching.

In certain scenarios, such as when tabs contain critical elements like forms or interactive content, accidental swipes can disrupt user workflow. For instance, when users are filling out forms, unintended swipe gestures might cause unexpected tab changes, potentially leading to data loss or workflow interruptions.

To prevent such issues, you can customize the [`swipeMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/#swipeMode) property based on the needs of the application. By adjusting this setting, you can balance smooth, intuitive navigation with protecting the user experience and safeguarding against accidental tab switches.

The [`swipeMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/#swipeMode) property provides the following options for the Tab component:

* **Both** - By default, this option allows the user to swipe between tabs using both touch and mouse actions.
* **Touch** - This option allows users to swipe between tabs using touch gestures only.
* **Mouse** - This option allows users to swipe between tabs using mouse gestures only.
* **None** - This disables both touch and mouse swipe actions, preventing any unintended tab switches.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/swipemode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/swipemode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/swipemode-cs1" %}