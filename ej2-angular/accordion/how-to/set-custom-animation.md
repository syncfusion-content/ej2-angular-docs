---
layout: post
title: Set custom animation in Angular Accordion component | Syncfusion
description: Learn here all about Set custom animation in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set custom animation 
documentation: ug
domainurl: ##DomainURL##
---

# Set custom animation in Angular Accordion component

Accordion supports custom animations for both expand and collapse actions from the provided animation option of `Animation` library.
The [`animation`](https://ej2.syncfusion.com/angular/documentation/api/accordion#animation) property also allows you to set [`easing`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionActionSettingsModel#easing), [`duration`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionActionSettingsModel#duration), and various other effects of your choice.

Default animation is given as `SlideDown` for expanding the panel using [`expand`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionAnimationSettingsModel#expand) animation property and `SlideUp` for collapsing the panel using [`collapse`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionAnimationSettingsModel#collapse) animation property. You can also disable the animation by setting animation [`effect`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionActionSettingsModel#effect) as `none`.

The sample demonstrates some types of animation that suits for Accordion. You can check all the animation effects here.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/accordion/accordion-custom-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-custom-cs1" %}