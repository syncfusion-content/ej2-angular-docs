---
layout: post
title: How to create a rounded button in Angular Button | Syncfusion
description: Create rounded Angular Buttons by applying border-radius through a custom CSS class on the button element.
platform: ej2-angular
control: Create a rounded button 
documentation: ug
domainurl: ##DomainURL##
---

# How to create a rounded button in Angular Button

Button with rounded corner can be achieved by adding `border-radius` CSS property to button element.

In the following example, `e-round-corner` class is defined with `5px` `border-radius` property and added that class to button element using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/button#cssclass)
property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/button/round-button-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button/round-button-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button/round-button-cs2" %}