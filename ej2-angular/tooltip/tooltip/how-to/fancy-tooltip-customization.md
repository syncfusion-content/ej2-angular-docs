---
layout: post
title: Fancy tooltip customization in Angular Tooltip component | Syncfusion
description: Learn here all about Fancy tooltip customization in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Fancy tooltip customization 
documentation: ug
domainurl: ##DomainURL##
---

# Fancy tooltip customization in Angular Tooltip component

Customize the tooltip arrow by modifying CSS. The EJ2 tooltip component uses CSS3 and positions the tip arrow according to tooltip positions like `TopCenter`, `BottomLeft`, `RightTop`, and more.

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

Disable the arrow tip pointer using the [`showTipPointer`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#showtippointer) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/tip-custom-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/tip-custom-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/tip-custom-cs3" %}
