---
layout: post
title: How to set command customization in Angular Toolbar | Syncfusion
description: Customize Angular Toolbar commands with the htmlAttributes property for ID, class, style, and role, or use the cssClass property.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# How to set command customization in Angular Toolbar

The [`htmlAttributes`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#htmlattributes) property of the Toolbar item enables comprehensive customization by setting HTML attributes such as `id`, `class`, `style`, and `role` for individual toolbar commands.

When applying style attributes through `htmlAttributes`, any existing style attributes with the same names will be replaced with the new values. The `class` attribute behaves differently: new CSS classes are appended to the existing classes rather than replacing them, ensuring that previously applied styles are preserved. For example, an existing `class="e-toolbar-item e-active"` combined with `htmlAttributes: { class: 'my-class' }` results in `class="e-toolbar-item e-active my-class"`.

The Toolbar item [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#cssclass) property is the simpler choice for adding one or more CSS classes. Use `cssClass` when only CSS classes are required, and use `htmlAttributes` when you need any of the other HTML attributes (`id`, `style`, `role`, etc.). When both are set on the same item, `htmlAttributes` classes are appended after `cssClass`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs2" %}