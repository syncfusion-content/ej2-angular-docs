---
layout: post
title: Types in Angular Sidebar component | Syncfusion
description: Learn here all about Types in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar 
documentation: ug
domainurl: ##DomainURL##
---

# Types in Angular Sidebar component

The Sidebar component's expand behaviour can be modified based on the purpose of use.

## Expanding types of Sidebar

The Sidebar can be set to initialize based on four different types that are consistent with the main component as explained below. When `dataBind` is invoked, it immediately applies any pending property changes to the component.

 | Item | Description |
|-----|-----|
| [`Over`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#type) | Sidebar floats over the main content area.|
| [`Push`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#type) | Sidebar pushes the main content area aside, appearing side-by-side, and shrinks the main content within the screen width.|
| [`Slide`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#type) |Sidebar shifts the main content area's x and y positions based on the Sidebar width. The main content area is not adjusted to fit within the screen width.|
| [`Auto`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#type) | Sidebar with `Over` type in mobile resolution, and `Push` type in other higher resolutions. |

> Note: `Auto` is the default expand mode.

In the following sample, the types of Sidebar are demonstrated.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/Types-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/Types-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/Types-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/Types-cs1" %}

## See Also

* [How to add Sidebar with custom animation](./how-to/sidebar-with-variation-animation)
* [How to add multiple Sidebar](./how-to/multiple-sidebar)