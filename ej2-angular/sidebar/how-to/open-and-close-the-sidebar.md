---
layout: post
title: Open and close the Angular Sidebar component | Syncfusion
description: Learn here all about Open and close the Sidebar in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# Open and close the Angular Sidebar component

The Sidebar component can be programmatically opened or closed using its public methods, enabling dynamic control in response to user interactions or application logic. These methods are accessible via a `ViewChild` reference to the Sidebar instance in an Angular component.

## Sidebar Control Methods

The following methods control the Sidebar’s visibility, updating its [`isOpen`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#isopen) property.

- [`show()`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#show): Opens the Sidebar, setting `isOpen` to `true`. Useful for displaying the Sidebar on user actions like button clicks.
- [`hide()`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#hide): Closes the Sidebar, setting `isOpen` to `false`. Ideal for hiding the Sidebar when navigating away or completing an action.
- [`toggle()`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#toggle): Toggles the Sidebar between open and closed states, switching the `isOpen` value. Suitable for interactive elements like toggle buttons.

The following sample demonstrates a Sidebar toggled via a button using the `toggle()` method.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/openclose-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/openclose-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/openclose-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/openclose-cs1" %}
