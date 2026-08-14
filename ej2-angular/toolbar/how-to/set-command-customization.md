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

The [`htmlAttributes`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#htmlattributes) property of the Toolbar item enables comprehensive customization by setting HTML attributes such as 'ID', 'class', 'style', and 'role' for individual toolbar commands.

When applying style attributes through `htmlAttributes`, any existing style attributes with the same names will be replaced with the new values. However, the `class` attribute behaves differently - new CSS classes are appended to existing classes rather than replacing them, ensuring that previously applied styles are preserved.

For simplified CSS class management, the Toolbar item [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#cssclass) property provides a dedicated approach to add single or multiple CSS classes to toolbar commands. Use `cssClass` for straightforward styling scenarios and `htmlAttributes` when you need to set additional HTML attributes beyond just CSS classes.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs2" %}