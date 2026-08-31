---
layout: post
title: How to customize selected tab styles in Angular Tab | Syncfusion
description: Customize the selected Angular Tab header and active item styles with custom CSS classes added via the cssClass property.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to customize selected tab styles in Angular Tab

Customize the appearance of the active Tab by combining a custom HTML header (passed to the [`text`](https://ej2.syncfusion.com/angular/documentation/api/tab/headerModel#text) property) with a custom CSS class assigned via the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#cssclass) property of the Tab.

## Steps

1. Pass an HTML string to `items[i].header.text` to include animation or custom markup in the header.
2. Set `cssClass` on the Tab component to a custom class (e.g., `"custom-tab"`).
3. Override the active header styles using the custom class in your component or global CSS:

```CSS
.custom-tab .e-tab-header .e-toolbar-item.e-active .e-tab-wrap {
    background: #1976d2;
    color: #fff;
}
```

> The `cssClass` property is defined on the Tab component itself, not on Toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/custom-styles-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/custom-styles-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/custom-styles-cs1" %}

## See Also

* [Style and Appearance](../style)
* [Header configuration](../header)
