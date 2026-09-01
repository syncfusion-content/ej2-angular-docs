---
layout: post
title: Template Configuration in Angular Toolbar | Syncfusion
description: Configure Angular Toolbar items with ng-template to embed complex components like the Menu for advanced toolbar layouts.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# Template Configuration in Angular Toolbar

The Angular Toolbar component supports template configuration through Angular's **ng-template** directive, enabling integration of complex UI components as toolbar items. Template configuration provides flexibility to customize toolbar items beyond standard button and separator types, allowing seamless integration of components like menus and custom controls.

The [`template`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#template) property on a Toolbar item accepts an `ng-template` reference (`TemplateRef`). Reference the template by assigning it to the item `template` input. The example below illustrates embedding the Menu component within a Toolbar item using an `<ng-template>` block.

## Integrate menu component


To implement Menu integration, define the Menu component within an **ng-template** and reference it in the toolbar item's template property. The Menu component can be populated with items programmatically or through data binding.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/menu-component-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/menu-component-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/menu-component-cs1" %}