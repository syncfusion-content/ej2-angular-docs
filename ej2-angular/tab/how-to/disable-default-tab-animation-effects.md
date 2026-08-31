---
layout: post
title: Disable default Tab animation effects in Angular Tab | Syncfusion
description: Disable Angular Tab default content transition animations via the animation property to improve performance and accessibility.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Disable default Tab animation effects in Angular Tab

Disable the built-in content transitions using the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#animation) property. This is useful for improving performance, meeting accessibility requirements, or building custom visual flows.

## Steps

1. On the component class, define an `animation` object that sets the `effect` to `'None'` for both previous and next directions.
2. Bind that object to the Tab's `animation` property.

```typescript
public animation: object = {
  previous: { effect: 'None' },
  next: { effect: 'None' }
};
```

```html
<ejs-tab #sample [items]="items" [animation]="animation"></ejs-tab>
```

> **Accessibility remark:** Visual transitions can help certain users locate the changed panel. If you disable animations, consider keeping a short duration (e.g., `100` ms) so screen-reader focus updates remain perceptible.

The following sample demonstrates Tab with default animations disabled.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/disable-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/disable-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/disable-animation-cs1" %}

## See Also

* [Set custom animation](./set-custom-animation)
* [Set state persistence of the Tab component](./set-state-persistence-of-the-tab-component)