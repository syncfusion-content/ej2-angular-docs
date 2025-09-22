---
layout: post
title: Template configuration in Angular Toolbar component | Syncfusion
description: Learn here all about Template configuration in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# Template configuration in Angular Toolbar component

The Angular Toolbar component supports template configuration through Angular's **ng-template** directive, enabling integration of complex UI components as toolbar items. Template configuration provides flexibility to customize toolbar items beyond standard button and separator types, allowing seamless integration of components like menus and custom controls.

## Integrate menu component


To implement Menu integration, define the Menu component within an **ng-template** and reference it in the toolbar item's template property. The Menu component can be populated with items programmatically or through data binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/menu-component-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/menu-component-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/menu-component-cs1" %}