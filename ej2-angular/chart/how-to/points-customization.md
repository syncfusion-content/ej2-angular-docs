---
layout: post
title: How to Customize Points in Angular Chart | Syncfusion
description: Learn how to customize individual point colors in Syncfusion Angular Chart using the pointColorMapping property.
platform: ej2-angular
control: pointColorMapping
documentation: ug
domainurl: ##DomainURL##
---

# How to Customize Points in Angular Chart

Use the [`pointColorMapping`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#pointcolormapping) property to customize the color or fill pattern of individual series points. The property accepts the name of a field in your [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource); each point is then rendered with the value from that field.

## Customizing point colors

1. **Prepare the data source with a color field.** Add a field to each data point that holds the color value (a hex code, an RGB value, a CSS named color, or an SVG pattern reference such as `url(#chess)`):

   ```typescript
   public chartData: Object[] = [
       { x: 'BGD', y: 106, text: 'Bangladesh', color: 'url(#chess)' },
       { x: 'BTN', y: 103, text: 'Bhutan',     color: 'url(#cross)' },
       { x: 'NPL', y: 198, text: 'Nepal',      color: 'url(#circle)' },
       { x: 'THA', y: 189, text: 'Thailand',   color: 'url(#rectangle)' },
       { x: 'MYS', y: 250, text: 'Malaysia',   color: 'url(#line)' }
   ];
   ```

2. **Bind `pointColorMapping` on the series.** Point the property to the field name that carries the color:

   ```typescript
   public pointColorMapping: string = 'color';
   ```

   ```html
   <e-series [dataSource]='data' type='Column' xName='x' yName='y'
             name='Tiger' [pointColorMapping]='pointColorMapping'>
   </e-series>
   ```

The following tabs show the same setup end-to-end. The full component (`app.component.ts`), the host page (`index.html`) that declares the SVG `<pattern>` definitions, and the bootstrap entry (`main.ts`) are included from the sample:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/pattern-point-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/pattern-point-cs1/index.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/pattern-point-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/pattern-point-cs1" %}

Each point is rendered with its corresponding color (or SVG pattern) from the data source, making points visually distinct within the same series.

## Troubleshooting

- **Color not applied to a point.** Verify that the bound color field holds a valid CSS color string (`#RRGGBB`, `rgb(...)`, a CSS named color) or a valid SVG `url(#id)` reference, and that the field name in `pointColorMapping` matches the data field name exactly (case-sensitive).
- **SVG pattern not rendered.** If you reference `url(#id)`, ensure a matching `<pattern id="…">` element is defined in the DOM (typically inside an inline `<svg>` in `index.html`).

## See also

- [Marker](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesmodel#marker)
- [Data labels](https://ej2.syncfusion.com/angular/documentation/chart/data-labels)
- [Point render event](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#pointrender)