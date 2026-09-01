---
layout: post
title: How to add toggle button in Angular Toolbar | Syncfusion
description: Add a toggle button to the Angular Toolbar via the template property and the created event to switch between two states on click.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# How to add toggle button in Angular Toolbar

The Toolbar component supports adding toggle buttons through the [`template`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#template) property of toolbar items. Toggle buttons provide users with the ability to switch between two states, making them ideal for features like play/pause, show/hide, or enable/disable functionality.

## Steps

1. **Define the toggle button structure.** Use the Toolbar item's `template` property to declare the HTML for the button. The `template` property accepts a string of HTML, a query selector (`#id`), or an `ng-template` reference. The example below uses the string form to keep the toggle markup inline:

    ```html
    <e-item [template]="'<button class=&quot;e-btn&quot; id=&quot;media_btn&quot;></button>'"></e-item>
    ```

2. **Render the toggle button and bind a click handler** in the Toolbar [`created`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#created) event. Toggle the icon CSS class (for example, swap `e-play` and `e-pause`) and the button content based on the active state. A typical toggle handler:

  ```typescript
      <e-item template='<button class="e-btn" id="media_btn"></button>'></e-item>
  ```

* Render the toggle button into the targeted element using the Toolbar [`created`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#created) event handler. Bind a click event to handle state changes. When the toggle button is clicked, update the icon and content based on the current active state.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/toolbar/toggle-button-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/toggle-button-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toggle-button-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toggle-button-cs1" %}