---
layout: post
title: Methods in Angular TextArea component | Syncfusion
description: Checkout and learn about methods in the Angular TextArea component of Syncfusion Essential JS 2 and more.
control: Methods 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Angular TextArea Component

This section outlines the methods available for interacting with the TextArea component.

## FocusIn Method

The [focusIn](https://ej2.syncfusion.com/angular/documentation/api/textarea/#focusIn) method sets focus to the textarea element, enabling user interaction. Call this method to programmatically focus the TextArea component, allowing users to interact with it via keyboard input or other means.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/methods-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/methods-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/methods-cs1" %}

## FocusOut Method

The [focusOut](https://ej2.syncfusion.com/angular/documentation/api/textarea/#focusOut) method removes focus from the textarea element, ending user interaction. Use this method to programmatically remove focus from the TextArea component, such as after completing a specific task or when navigating to another element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/methods-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/methods-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/methods-cs2" %}

## GetPersistData Method

The [getPersistData](https://ej2.syncfusion.com/angular/documentation/api/textarea/#getPersistData) method retrieves the properties that need to be maintained in the persisted state. This method returns an object containing the properties to be persisted, including various configuration options and state information of the TextArea component. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/methods-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/methods-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/methods-cs3" %}
