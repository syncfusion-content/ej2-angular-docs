---
layout: post
title: How to set state persistence of Tab in Angular Tab | Syncfusion
description: Retain Angular Tab model values across page refreshes and browser sessions by enabling the enablePersistence property.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to set state persistence of Tab in Angular Tab

State persistence enables the Tab component to retain specific model values in the browser's local storage for state maintenance. This is controlled through the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#enablepersistence) property, which is `false` by default. Set it to `true` to preserve model values across page refreshes and browser sessions.

## Persisted values

When `enablePersistence` is `true`, the following model values are persisted:

* Selected tab index
* Tab item order (after programmatic reorders)
* Disabled tab indices (when set declaratively)

## Steps

1. Set the `enablePersistence` property to `true` on the Tab component.
2. Persisted values are stored under a Tab-specific key in `localStorage`.

```html
<ejs-tab [items]="items" [enablePersistence]="true"></ejs-tab>
```

The following sample demonstrates how to set state persistence of the Tab component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/persistence-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/persistence-cs1" %}

## See Also

* [Show/Hide Tab item](./show-hide-tab-item)
* [Load Tab items dynamically](./load-tab-items-dynamically)