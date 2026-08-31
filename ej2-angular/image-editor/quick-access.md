---
layout: post
title: Quick Access Toolbar in Angular Image Editor | Syncfusion
description: Customize the quick access toolbar in the Syncfusion Angular Image Editor to expose per-annotation actions such as duplicate, delete, and edit text.
control: Quick Access
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Quick Access Toolbar in Angular Image Editor

The quick access toolbars in the Image Editor play a vital role in facilitating interactions with annotations like Rectangle, Ellipse, Line, Arrow, Path, Text, and Freehand drawing. These toolbars offer a diverse array of tools and options that can be tailored to match the specific requirements and preferences associated with each annotation type. The toolbar is only displayed when an annotation is selected, ensuring a focused and contextual user experience.

The [`showQuickAccessToolbar`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#showquickaccesstoolbar) property (boolean, default `true`) controls the visibility of the quick access toolbar. Users have the flexibility to enable or disable this toolbar, add or remove items, and create a personalized set of tools.

## Add a custom toolbar item

The quick access toolbar that appears when inserting annotations in the Image Editor is customizable using the [`quickAccessToolbarOpen`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#quickaccesstoolbaropen) event. This event is triggered when the quick access toolbar is opened, allowing you to modify its contents.

To add a custom toolbar item, follow these steps:

1. Bind the `quickAccessToolbarOpen` event to the Image Editor.
2. In the event handler, access the `toolbarItems` property of the [`QuickAccessToolbarEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/quickaccesstoolbareventargs) argument.
3. Assign (or push/remove) the desired toolbar item identifiers (string array, e.g., `['Clone']`) to `args.toolbarItems`.

The key member of `QuickAccessToolbarEventArgs` is:

* `toolbarItems`: Gets or sets the array of toolbar item identifiers (string) displayed in the quick access toolbar.

To handle clicks on custom items, handle the `quickAccessToolbarClick` event of the Image Editor.

Here is an example of adding a custom toolbar item to the quick access toolbar. 

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs33/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs33" %}
