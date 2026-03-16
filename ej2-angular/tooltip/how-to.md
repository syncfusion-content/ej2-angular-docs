---
layout: post
title: How to in Angular Tooltip component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Tooltip component

## Show Tooltip on disabled elements

By default, tooltips do not display on disabled elements. Enable this behavior by following these steps:

1. Wrap the disabled element (e.g., `button`) in a div with `display: inline-block`.
2. Set the pointer event to `none` for the disabled element using CSS.
3. Initialize the Tooltip on the outer div element that wraps the disabled button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs9" %}

## Load HTML tags into Tooltip

Load HTML tags into the tooltip using the [content](https://ej2.syncfusion.com/angular/documentation/tooltip/content) template.

You can use HTML tags such as `<div>`, `<span>`, `<b>`, `<i>`, `<u>`, and more. You can also apply style attributes to HTML tags.

This example uses Bold, Italic, Underline, and Anchor tags.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/load-html-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/load-html-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/load-html-cs1" %}

## Define Tooltip open mode property

Define the tooltip's open mode to control when it displays on hover, focus, or click actions. The tooltip component supports the following open modes:

* **Auto** - Tooltip appears on hover or when the target element receives focus.
* **Hover** - Tooltip appears on hover.
* **Click** - Tooltip appears when you click the target element.
* **Focus** - Tooltip appears when you focus the target (e.g., using Tab key).
* **Custom** - Tooltip is not triggered by default actions. Bind your own events and use the `open` or `close` methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/open-mode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/open-mode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/open-mode-cs1" %}

## Create and show Tooltip on multiple targets

Create and display tooltips on multiple targets within a container by assigning specific target elements to the `target` property. The tooltip initializes only on matched targets within the container.

The tooltip content is derived from the `title` attribute of the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/form-valid-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/form-valid-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/form-valid-cs1" %}

## Change Tooltip content dynamically

Change tooltip content dynamically using [AJAX](https://ej2.syncfusion.com/documentation/base/api-ajax.html?lang=typescript) requests.

Make the AJAX request within the [`beforeRender`](https://ej2.syncfusion.com/angular/documentation/tooltip/api-tooltipComponent/#beforerender) event. On success, assign the retrieved data to the [content](https://ej2.syncfusion.com/angular/documentation/tooltip/api-tooltipComponent/#content) property.

When hovering over icons, the corresponding data is retrieved dynamically and assigned to the tooltip's content.

Refer to the following code snippet to implement dynamic tooltip content.

```typescript

onBeforeRender(args: TooltipEventArgs): void {
    this.content = 'Loading...';
    this.dataBind();
    let ajax: Ajax = new Ajax('./tooltip.json', 'GET', true);
    ajax.send().then(
        (result: any) => {
            result = JSON.parse(result);
            for (let i: number = 0; i < result.length; i++) {
                if (result[i].Id == args.target.id) {
                    /* tslint:disable */
                    this.content = result[i].Name;
                    /* tslint:enable */
                }
            }
            this.dataBind();
        },
        (reason: any) => {
            this.content = reason.message;
            this.dataBind();
        });
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/dynamic-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/dynamic-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/dynamic-content-cs1" %}

## Tooltip Content Template

Load tooltip [content](https://ej2.syncfusion.com/angular/documentation/tooltip/content) using template support. Refer to the following code snippet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/load-html-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/load-html-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/load-html-cs2" %}

## Customize Tooltip

Customize the tooltip arrow by modifying CSS. The EJ2 Tooltip component uses CSS3 and positions the tip arrow according to tooltip positions like `TopCenter`, `BottomLeft`, `RightTop`, and more.

This example customizes the tip arrow as a Curved Tooltip and a Bubble Tooltip.

**Curved tip**

To customize the curved tip arrow, override the following CSS class:

```typescript
.e-arrow-tip-outer.e-tip-bottom,
.e-arrow-tip-outer.e-tip-top {
     border-left: none !important;
     border-right: none !important;
     border-top: none !important;
}
.e-arrow-tip.e-tip-top {
     transform: rotate(170deg);
}
```

**Bubble tip**

Two divs (inner and outer) create the bubble tip arrow. Override the following CSS class to customize:

```typescript
.e-arrow-tip-outer.e-tip-bottom, .e-arrow-tip-outer.e-tip-top {
   border-radius: 50px;
   height: 10px;
   width: 10px;
}

.e-arrow-tip-inner.e-tip-bottom, .e-arrow-tip-inner.e-tip-top {
   border-radius: 50px;
   height: 10px;
   width: 10px;
}
```

Customize tip arrow styling through CSS modifications at the sample level. Change the tooltip position using radio button click events.

Disable the arrow tip pointer using the [`showTipPointer`](https://ej2.syncfusion.com/angular/documentation/tooltip/api-tooltip/#showtippointer) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/tip-custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/tip-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/tip-custom-cs1" %}

## Display Tooltip on SVG and canvas elements

Display tooltips on both SVG and Canvas elements. Attach `<svg>` or `<canvas>` elements directly to show tooltips on data visualization elements.

**SVG**

Create an SVG square element and render the tooltip on it using the following code:

```typescript
<ejs-tooltip cssClass='e-tooltip-css' content='SVG Square' target='#square'>
    <svg>
        <rect id="square" class="shape" x="50" y="20" width="50" height="50" style="fill:#FDA600;stroke:none;stroke-width:5;stroke-opacity:0.9" />
    </svg>
</ejs-tooltip>
```

**Canvas**

Create a canvas circle element and render the tooltip on it using the following code:

```typescript
<ejs-tooltip cssClass='e-tooltip-css' content='Canvas Circle' target='#circle'>
    <canvas #circle id="circle" class="shape" width="60" height="60"></canvas>
</ejs-tooltip>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/svg-canvas-cs1" %}

## Load HTML pages into Tooltip

Load HTML pages into the tooltip using HTML tags such as iframe, video, and map. The [`content`](https://ej2.syncfusion.com/angular/documentation/tooltip/api-tooltip/#content) property accepts both string and HTML tags.

To load an `iframe` element in the tooltip, set the required iframe in the `content` property when initializing the tooltip component. Refer to the following code:

```typescript
content= '<iframe src="https://www.syncfusion.com/products/essential-js2"></iframe>'
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/html-page-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/html-page-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/html-page-cs1" %}