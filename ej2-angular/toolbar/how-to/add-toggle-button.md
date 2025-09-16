---
layout: post
title: Add toggle button in Angular Toolbar component | Syncfusion
description: Learn here all about Add toggle button in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Add toggle button in Angular Toolbar component

The Toolbar component supports adding toggle buttons through the [`template`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#template) property of toolbar items. Toggle buttons provide users with the ability to switch between two states, making them ideal for features like play/pause, show/hide, or enable/disable functionality. Follow the steps below to implement toggle button functionality:

* Use the Toolbar item's template property to define the HTML structure for the toggle button.

  ```typescript
      <e-item template='<button class="e-btn" id="media_btn"></button>'></e-item>
  ```

* Render the toggle button into the targeted element using the Toolbar [`created`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#created) event handler. Bind a click event to handle state changes. When the toggle button is clicked, update the icon and content based on the current active state.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/toolbar/toggle-button-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toggle-button-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toggle-button-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toggle-button-cs1" %}