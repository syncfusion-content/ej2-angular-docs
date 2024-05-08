---
layout: post
title: Add toggle button in Angular Toolbar component | Syncfusion
description: Learn here all about Add toggle button in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add toggle button 
documentation: ug
domainurl: ##DomainURL##
---

# Add toggle button in Angular Toolbar component

Toolbar supports to add a toggle Button by using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item#template) property. Refer below steps

* By using Toolbar template property, pass required HTML String to render toggle button.

  ```typescript
      <e-item template='<button class="e-btn" id="media_btn"></button>'></e-item>
  ```

* Now render the toggle Button into the targeted element in Toolbar [`created`](https://ej2.syncfusion.com/angular/documentation/api/toolbar#created) event handler and bind click event for it.  On clicking the toggle Button, change the required icon and content based on current active state.

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