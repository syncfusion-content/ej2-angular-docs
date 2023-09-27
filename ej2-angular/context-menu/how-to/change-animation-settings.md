---
layout: post
title: Change animation settings in Angular Context menu component | Syncfusion
description: Learn here all about Change animation settings in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change animation settings 
documentation: ug
domainurl: ##DomainURL##
---

# Change animation settings in Angular Context menu component

To change the animation of the ContextMenu, [`animationSettings`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuAnimationSettingsModel/) property is used.
The supported effects for ContextMenu are,

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Specifies the sub menu transform with no animation effect. |
| SlideDown | Specifies the sub menu transform with slide down effect. |
| ZoomIn | Specifies the sub menu transform with zoom in effect. |
| FadeIn | Specifies the sub menu transform with fade in effect. |

The following sample illustrates how to open ContextMenu with `FadeIn` effect with the `duration` of `800ms`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/context-menu/template-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs2" %}
