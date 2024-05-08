---
layout: post
title: Integrate treeview inside the accordion in Angular Accordion component|Syncfusion
description: Learn here all about Integrate treeview inside the accordion in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Integrate treeview inside the accordion 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate treeview inside the accordion in Angular Accordion component

Accordion supports to render other Essential JS 2 Components by using content property.
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
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-treeview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-treeview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-treeview-cs1" %}
