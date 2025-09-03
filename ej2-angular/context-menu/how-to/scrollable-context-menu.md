---
layout: post
title: Scrollable Context Menu in Angular Context menu component | Syncfusion
description: Learn here all about Render Scrollable Context Menu in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Render Scrollable Context Menu in Angular Context menu component

The Context Menu component provides scrolling functionality through the [enableScrolling](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#enablescrolling) property to manage overflow behavior when menu items exceed the available display area. This feature ensures all menu options remain accessible without disrupting page layout, particularly beneficial for menus with extensive item lists.

Enable scrolling by setting the `enableScrolling` property to `true`. Use the [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#beforeopen) event to configure the menu container height and ensure proper scrollable area implementation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/scroller-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/scroller-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/scroller-cs1" %}