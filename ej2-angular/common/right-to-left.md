---
layout: post
title: Right to left in Angular Common control | Syncfusion
description: Learn here all about Right to left in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Right-to-Left (RTL) Support in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

Right-to-Left (RTL) support enables applications to correctly display content for languages written from right to left, such as Arabic, Hebrew, Persian, and Urdu. When RTL is enabled, Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components automatically adjust text direction, alignment, icons, scrollbars, popups, and layout mirroring to provide a natural reading and interaction experience.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components include built-in RTL support. Setting the `enableRtl` property to `true` applies the `e-rtl` class to the component's root element, triggering layout mirroring and direction changes.

Ensure the following imports are present in your component or module:

```ts
import { enableRtl } from '@syncfusion/ej2-base';
```

## Enable RTL Configuration

To apply RTL consistently across all Syncfusion<sup style="font-size:70%">&reg;</sup> components, enable it at the application level before any component initialization. The most reliable method is to call `enableRtl(true)` early in the application lifecycle

Example enabling RTL globally:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/right-to-left-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/right-to-left-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/right-to-left-cs1" %}

## Enable RTL for an individual component

For scenarios requiring mixed LTR and RTL layouts (e.g., specific sections in RTL while the rest remains LTR), set the `enableRtl` property directly on individual components.

Example enabling RTL on a single component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/individual-rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/individual-rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/individual-rtl-cs1" %}

## RTL with Localization

RTL is most effective when combined with appropriate culture/locale settings. Load the desired locale and set it alongside RTL:

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

// Load locale resources (example for Arabic)
L10n.load({
  'ar': {
    // locale strings...
  }
});

setCulture('ar');
enableRtl(true);
```

This ensures text, date/number formatting, and layout all align with RTL language conventions.

## What Changes in RTL Mode

When `enableRtl` is enabled, Syncfusion<sup style="font-size:70%">&reg;</sup> components automatically:
- Reverse text direction (`direction: rtl`)
- Mirror horizontal alignments (left → right, right → left)
- Flip icons, arrows, and expand/collapse indicators
- Adjust popup/menu positioning and scrollbars
- Reverse grid column order

Most Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components fully support RTL. For any exceptions or special configurations, refer to the specific component documentation.
