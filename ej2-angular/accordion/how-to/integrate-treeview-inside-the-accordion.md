---
layout: post
title: How to integrate TreeView in Angular Accordion | Syncfusion
description: Render a TreeView inside an Angular Accordion item by initializing the TreeView in the expanding event for nested navigation.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate TreeView inside the Accordion in Angular Accordion

The Syncfusion Angular Accordion component supports integrating other Essential<sup style="font-size:70%">&reg;</sup> JS 2 components, such as TreeView, within its items using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem#content) property. This enables hierarchical navigation structures, ideal for file explorers, nested menus, or organizational charts within expandable panels.

You can give content as an element string like below, for initializing the component.

  ```js
    content: '<div id="element"> </div>'
  ```

The other component can be rendered with the use of provided events, such as [`clicked`](https://ej2.syncfusion.com/angular/documentation/api/accordion#clicked) and [`expanding`](https://ej2.syncfusion.com/angular/documentation/api/accordion#expanding).
The following procedure is to render a TreeView within the Accordion,

* Import the `TreeView` module from `ej2-navigations`, for adding TreeView. Please refer the [TreeView initialization steps](../../treeview/getting-started)

* You can initialize the TreeView component in [`expanding`](https://ej2.syncfusion.com/angular/documentation/api/accordion#expanding) event,
by getting the element and defining the required TreeView properties.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/accordion/accordion-treeview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-treeview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-treeview-cs1" %}
