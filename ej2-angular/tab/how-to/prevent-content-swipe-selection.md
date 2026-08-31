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

The [`swipeMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#swipemode) property in the Tab component enables users to navigate between tabs using swipe gestures. It supports both touch and mouse inputs for intuitive tab switching.

In certain scenarios—such as when tabs contain critical elements like forms or interactive content—accidental swipes can disrupt user workflow. Unintended swipes while users fill out a form might cause unexpected tab changes and potential data loss.

To prevent these issues, configure the [`swipeMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#swipemode) property based on the application's needs. Adjusting this setting balances smooth navigation with safeguards against accidental tab switches.

## Available modes

| Mode | Behavior |
|------|----------|
| **`Both`** (default) | Allow swipes between tabs using both touch and mouse actions. |
| **`Touch`** | Allow swipes between tabs using touch gestures only. Mouse drag is disabled. |
| **`Mouse`** | Allow swipes between tabs using mouse gestures only. Touch swipes are disabled. |
| **`None`** | Disable both touch and mouse swipes; users can only switch via clicks or keyboard. |

## Detecting the current mode

Read `this.tabInstance.swipeMode` at runtime to log the active mode for diagnostics.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/swipemode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/swipemode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/swipemode-cs1" %}

## See Also

* [Responsive Modes](../adaptive)
* [Accessibility](../accessibility)