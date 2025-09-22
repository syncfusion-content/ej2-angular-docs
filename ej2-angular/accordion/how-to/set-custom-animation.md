---
layout: post
title: Set custom animation in Angular Accordion component | Syncfusion
description: Learn here all about Set custom animation in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Set custom animation in Angular Accordion component


The Angular Accordion component supports custom animations for expand and collapse actions, enhancing the visual appeal and interactivity of content transitions. Use the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#animation) property, part of the `AccordionAnimationSettingsModel`, to configure [`effect`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionActionSettingsModel/#effect), [`easing`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionActionSettingsModel/#easing), and [`duration`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionActionSettingsModel/#duration) for a tailored user experience. This is ideal for creating smooth transitions in navigation menus, FAQs, or collapsible panels.


Default animation is given as `SlideDown` for expanding the panel using [`expand`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionAnimationSettingsModel/#expand) animation property and `SlideUp` for collapsing the panel using [`collapse`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionAnimationSettingsModel/#collapse) animation property. You can also disable the animation by setting animation [`effect`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionActionSettingsModel/#effect) as `none`.

The sample demonstrates some types of animation that suits for Accordion. You can check all the animation effects here.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-custom-cs1" %}