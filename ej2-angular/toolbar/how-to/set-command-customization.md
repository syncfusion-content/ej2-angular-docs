---
layout: post
title: Set command customization in Angular Toolbar component | Syncfusion
description: Learn here all about Set command customization in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Set command customization in Angular Toolbar component

The [`htmlAttributes`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#htmlattributes) property of the Toolbar item enables comprehensive customization by setting HTML attributes such as 'ID', 'class', 'style', and 'role' for individual toolbar commands.

When applying style attributes through `htmlAttributes`, any existing style attributes with the same names will be replaced with the new values. However, the `class` attribute behaves differently - new CSS classes are appended to existing classes rather than replacing them, ensuring that previously applied styles are preserved.

For simplified CSS class management, the Toolbar item [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#cssclass) property provides a dedicated approach to add single or multiple CSS classes to toolbar commands. Use `cssClass` for straightforward styling scenarios and `htmlAttributes` when you need to set additional HTML attributes beyond just CSS classes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs2" %}