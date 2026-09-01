---
layout: post
title: Render scrollable Context Menu in Angular Context Menu | Syncfusion
description: Render a scrollable Angular Context Menu with enableScrolling and a fixed height set in beforeOpen to manage long item lists.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# How to render scrollable Context Menu in Angular Context Menu

The Context Menu component provides scrolling functionality through the [enableScrolling](https://ej2.syncfusion.com/angular/documentation/api/context-menu#enablescrolling) property to manage overflow behavior when menu items exceed the available display area. This feature ensures all menu options remain accessible without disrupting page layout, particularly beneficial for menus with extensive item lists.

Enable scrolling by setting the `enableScrolling` property to `true`. The ContextMenu renders a vertical scrollbar in the popup when the combined item height exceeds the available viewport. To constrain the popup to a specific height, use the [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeopen) event to set a fixed `height` on the popup element.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/scroller-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/scroller-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/scroller-cs1" %}