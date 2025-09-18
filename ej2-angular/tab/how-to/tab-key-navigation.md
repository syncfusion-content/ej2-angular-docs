---
layout: post
title: Tab key navigation with tabIndex in Angular Tab component | Syncfusion
description: Learn here all about Tab key navigation in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Enabling tab key navigation in Tabs

The [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#tabindex) property of a Tab item enables tab key navigation for specific items. When a positive value is assigned to the [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#tabindex) property, users can switch focus to the next or previous tab item using the Tab or Shift+Tab keys. By default, users can only switch between tab items using the arrow keys.

If the [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#tabindex) value is set to 0 for all tab items, the tab will switch based on the order of the elements on the page. This means that if the tab items are listed in a specific order on the page, the user will be able to navigate through them using the Tab key in that same order.

To enable tab key navigation, assign a positive value to the [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#tabindex) property for each tab item. For example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/tab-key-navigation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/tab-key-navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/tab-key-navigation-cs1" %}

With this configuration, users can switch between tab items using the Tab and Shift+Tab keys in the order specified by the [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#tabindex) values. The [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#tabindex) property specifically controls Tab key navigation behavior, while arrow key navigation between tab items remains available regardless of the [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#tabindex) property value.