---
layout: post
title: How to set item-wise custom template in Angular Toolbar | Syncfusion
description: Add custom HTML template content to Angular Toolbar items via the template property as a string literal or query selector.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# How to set item-wise custom template in Angular Toolbar

The Angular Toolbar component supports adding template commands using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#template) property, enabling integration of custom controls as toolbar items. The template property accepts HTML content as either a string literal or a query selector reference, providing flexibility for various implementation approaches.

Template configuration allows embedding interactive elements like checkboxes, dropdowns, input controls, or even other components within toolbar items. This capability extends the toolbar's functionality beyond standard buttons and separators, enabling rich user interface scenarios.

## As string

The HTML element tag can be given as a string for the template property. This approach is suitable for simple HTML structures and inline content. The following example demonstrates rendering a checkbox as an HTML template within a toolbar item:

```typescript
template: "<div><input type='checkbox' id='check1' checked=''>Accept</input></div>"
```

## As selector

The template property also allows getting template content through query `selector`. Here, button 'ID' attribute is specified in the template.

```typescript
template: "#Template"
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs3" %}