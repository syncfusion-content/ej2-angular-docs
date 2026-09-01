---
layout: post
title: How to set tooltip to commands in Angular Toolbar | Syncfusion
description: Add HTML tooltips to Angular Toolbar commands via the tooltipText property, or upgrade to the ej2-tooltip component on hover.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# How to set tooltip to commands in Angular Toolbar

The [`tooltipText`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#tooltiptext) property of the Toolbar item sets the native HTML `title` attribute on each command, which displays a hint text on mouse hover. This delivers lightweight OS-level tooltips with no additional dependencies.

To upgrade to a richer, themed Syncfusion Tooltip (with configurable positioning, animation, content templates, etc.) instead of the native browser tooltip:

* Import the `TooltipModule` from `@syncfusion/ej2-angular-popups` and add it to the standalone component's `imports` array.
* Initialize the Tooltip with the Toolbar root element as the target, for example using the Toolbar's [`created`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#created) event.

Refer to the following code example:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs4" %}