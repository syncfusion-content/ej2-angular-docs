---
layout: post
title: Variations in Angular Sidebar component | Syncfusion
description: Learn here all about Variations in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Variations 
documentation: ug
domainurl: ##DomainURL##
---

# Variations in Angular Sidebar component

The Sidebar component's expand behaviour can be modified based on the purpose of use.

## Expanding types of Sidebar

The Sidebar can be set to initialize based on four different types that are consistent with the main component as explained below.

 | Item | Description |
|-----|-----|
| `Over` | Sidebar floats over the main content area.|
| `Push` | Sidebar pushes the main content area to appear side-by-side, and shrinks the main content within the screen width.|
| `Slide` |Sidebar translates the x and y positions of main content area based on the Sidebar width. The main content area will not be adjusted within the screen width. |
| `Auto` | Sidebar with `Over` type in mobile resolution, and `Push` type in other higher resolutions. |

> `Auto` is the default expand mode.

In the following sample, the types of Sidebar are demonstrated.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/Types-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/Types-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/Types-cs2" %}