---
layout: post
title: Localization in Angular Tab | Syncfusion
description: Localize Angular Tab default text like the close button tooltip using the locale property and the L10n load function.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Tab

The Localization library localizes the default text content of the Tab component for different cultures using the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#locale) property. In Tab, the close button's tooltip text is localized based on the specified culture. The close button appears on the tab header when the [`showCloseButton`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#showclosebutton) property is enabled.

The list of localizable keys and their default values is shown below.

| Locale key | en-US (default) |
|------------|-----------------|
| `closeButtonTitle` | `Close` |

## Loading translations

Use the `load` function of the `L10n` class to load translation objects. First, import the necessary modules as shown here:

```typescript
import { L10n } from '@syncfusion/ej2-base';
```

Next, load the translations. The following example localizes the `closeButtonTitle` key for French (`fr-FR`):

```typescript
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'fr-BE': {
        tab: {
            closeButtonTitle: 'Fermer'
        }
    }
});
```

In the sample below, the `fr-FR` culture is applied to the Tab component, which changes the close button's tooltip text accordingly.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/basic-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs10" %}

## Changing locale dynamically

After initial render, switch the locale at runtime by updating the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#locale) property on the component instance. New translations take effect for subsequent renderings, such as when a tab with a close button is freshly rendered.

## Fallback behavior

If a translation key is missing for the active locale, the Tab falls back to the value defined under the `en-US` default key. The component never displays an empty string for a localizable default.

## See Also

* [Syncfusion Angular Globalization](../common/globalization)
* [Getting Started](./getting-started)