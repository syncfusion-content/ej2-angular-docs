---
layout: post
title: Localization in Angular Chart | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Chart

Localization adapts the chart's static text content (for example, zoom toolbar labels) to different languages and regions. It is achieved by providing a locale-specific translation dictionary through the `L10n.load()` method and binding the desired locale to the Chart's `locale` property.

## Importing L10n

`L10n` is exported from the base package. Import it in the file where you register translations:

```ts
import { L10n } from '@syncfusion/ej2-base';
```

L10n ships with `@syncfusion/ej2-base`, which is a dependency of `@syncfusion/ej2-angular-charts`, so no extra install step is required.

## Loading Translations

Call `L10n.load()` once at application startup, before any chart is rendered and before `bootstrapApplication(...)` runs in `main.ts`. The payload is a locale dictionary whose top-level key is the locale code (for example, `ar-AR`) and whose nested key must be the module name (`chart`). Each entry inside is a camelCase string key mapped to the translated value. Keys left out of the dictionary fall back to the default English text shown in the table below:

```ts
L10n.load({
    'ar-AR': {
        'chart': {
            Zoom: 'زوم',
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Reset: 'إعادة تعيين',
            ResetZoom: 'إعادة تعيين التكبير',
            Pan: 'تحريك'
        }
    }
});
```

Bind the matching locale on the Chart component so the registered dictionary is applied:

```html
<ejs-chart locale="ar-AR" ...></ejs-chart>
```

The following table lists the default locale keys supported by the Chart. The "Default English text" column shows the value rendered when no translation is provided.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Locale key</b></td>
<td><b>Default English text</b></td>
</tr>
<tr>
<td>Zoom</td>
<td>Zoom</td>
</tr>
<tr>
<td>ZoomIn</td>
<td>ZoomIn</td>
</tr>
<tr>
<td>ZoomOut</td>
<td>ZoomOut</td>
</tr>
<tr>
<td>Reset</td>
<td>Reset</td>
</tr>
<tr>
<td>Pan</td>
<td>Pan</td>
</tr>
<tr>
<td>ResetZoom</td>
<td>Reset Zoom</td>
</tr>
</table>
<!-- markdownlint-enable MD033 -->

For more information about localization, see the localization guide: [Localization](https://ej2.syncfusion.com/angular/documentation/common/globalization).

## RTL Support

For right-to-left languages such as Arabic, also enable RTL rendering on the chart so the toolbar and layout flow correctly. Set `enableRtl` to `true` on the Chart component (typically in `ngOnInit` or as a class initializer):

```ts
@Component({ /* ... */ })
export class AppComponent implements OnInit {
    public enableRtl = true;
    // ...
}
```

## Code Example

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs1" %}

## Troubleshooting

* **Translations are not applied** — Confirm `L10n.load(...)` is called **before** the chart is created and that the `locale` property on the chart matches the dictionary key (e.g. `ar-AR`).
* **Some keys remain in English** — Verify the module key is exactly `'chart'` and that the inner keys are camelCase strings (e.g. `ZoomIn`, not `zoomIn`/`zoom_in`).
* **Layout does not flip for Arabic/Hebrew** — Set `enableRtl=true` on the chart in addition to the locale.

## See Also

* [Internationalization in Angular Chart](./internationalization)
* [Getting Started with Angular Chart](./getting-started)
