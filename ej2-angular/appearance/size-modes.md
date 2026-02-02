---
layout: post
title: Size Modes in Angular Component | Syncfusion
description: Learn here all about Size Modes in Syncfusion Angular Appearance component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance
documentation: ug
domainurl: ##DomainURL##
---

# Size Modes in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components support two size modes to optimize user experience across different devices and input methods:

- **Normal mode** (default) — Standard sizing optimized for mouse and keyboard interactions.
- **Touch mode** (bigger) — Larger elements with increased padding, font sizes, and touch targets for improved touch interaction and accessibility.

Touch mode enhances usability on tablets, mobile devices, and touch-enabled laptops by making buttons, icons, and interactive areas easier to tap accurately.

## Applying Touch Mode Globally (Entire Application)

Add the `e-bigger` class to the `<body>` element in `index.html`:

```html
<body class="e-bigger">
  <!-- Application content -->
</body>
```

This applies the larger size mode to all Syncfusion<sup style="font-size:70%">&reg;</sup> components across the application.

## Applying Touch Mode to a Specific Component

You can enable touch mode for individual components in two ways:

1. Add the `e-bigger` class directly to the component's wrapper element.
2. Use the component's `cssClass` property to include `e-bigger`.

**Example (using cssClass):**

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/common/size-modes" %}

## Toggling Size Mode Dynamically (Application Level)

Switch between normal and touch modes at runtime by adding/removing the `e-bigger` class on the `<body>` element.

**Example:**

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes-app/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes-app/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/common/size-modes-app" %}

## Toggling Size Mode Dynamically (Component Level)

Dynamically apply or remove the `e-bigger` class on a specific component.

**Example:**

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes-cp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes-cp/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/common/size-modes-cp" %}

## Best Practices

- Use touch mode (`e-bigger`) when targeting mobile/tablet users or touch-first experiences.
- Combine with responsive layouts and media queries for optimal cross-device support.
- Test touch targets with real devices to ensure minimum 44×44 px interactive areas (WCAG recommendation).
- For performance-critical apps, consider using optimized (lite) theme files if bigger mode is rarely used.

## See Also

- [Sidebar Responsiveness](https://ej2.syncfusion.com/angular/documentation/sidebar/auto-close)
- [Grid Responsiveness](https://ej2.syncfusion.com/angular/documentation/grid/columns/responsive-columns)
- [TreeGrid Responsiveness](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling#responsive-with-parent-container)
- [Dashboard Layout Responsiveness](https://ej2.syncfusion.com/angular/documentation/dashboard-layout/responsive-adaptive)
- [Kanban Responsiveness](https://ej2.syncfusion.com/angular/documentation/kanban/responsive-mode)
- [Toolbar Responsiveness](https://ej2.syncfusion.com/angular/documentation/toolbar/responsive-mode)
- [Tab Responsiveness](https://ej2.syncfusion.com/angular/documentation/tab/adaptive)