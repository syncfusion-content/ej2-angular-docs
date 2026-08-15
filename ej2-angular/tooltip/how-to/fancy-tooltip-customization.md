---
layout: post
title: How to apply fancy Tooltip customization in Angular Tooltip | Syncfusion
description: Customize the Syncfusion Angular Tooltip tip arrow into curved or bubble shapes by overriding the arrow tip and outer tip CSS classes.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# How to apply fancy Tooltip customization in Angular Tooltip

Customize the tooltip arrow by overriding CSS at the sample level.

The Tooltip component is styled using CSS3 and positions the tip arrow according to tooltip positions such as `TopCenter`, `BottomLeft`, `RightTop`, and others.

The following sample demonstrates customizing the tip arrow as a Curved Tooltip and Bubble Tooltip.

**Curved tip**

Content is added for the tip pointer arrow. To customize the curved tip arrow, override the following CSS class.

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

Two `div` elements (inner and outer) are used to create the bubble tip arrow. To customize the bubble tip arrow, override the following CSS class.

```typescript

.e-arrow-tip-outer.e-tip-bottom, .e-arrow-tip-outer.e-tip-top
{
   border-radius: 50px;
   height: 10px;
   width: 10px;
}

.e-arrow-tip-inner.e-tip-bottom, .e-arrow-tip-inner.e-tip-top
  {
   border-radius: 50px;
   height: 10px;
   width: 10px;
  }

```

These tip arrow customizations are achieved through CSS changes at the sample level. Change the tooltip position by using the radio button click event.

Disable the arrow tip pointer using the [`showTipPointer`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#showtippointer) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tooltip/tip-custom-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tooltip/tip-custom-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/tip-custom-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/tip-custom-cs2" %}
