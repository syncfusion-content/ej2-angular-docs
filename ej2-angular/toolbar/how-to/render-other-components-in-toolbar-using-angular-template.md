---
layout: post
title: Render other components in Toolbar using Angular template in Angular Toolbar | Syncfusion
description: Render other Angular components inside Toolbar items using ng-template with the template attribute for rich embedded UI.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# How to render other components in Toolbar using Angular template in Angular Toolbar

The Angular Toolbar component supports embedding other Angular components directly within toolbar items using Angular **ng-template** directives. This template-based approach enables integration of complex UI elements with full functionality, including dropdowns, input controls, buttons, and custom components as toolbar items.

The `ng-template` directive must be placed inside each `e-item` tag with the `#template` attribute, which serves as the mandatory template reference variable for rendering the embedded content. This approach maintains the component's lifecycle, event handling, and data binding capabilities within the toolbar context.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/direct-components-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/direct-components-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/direct-components-cs1" %}