---
layout: post
title: How to add rounded corners to Angular Menu Bar | Syncfusion
description: Apply rounded corners to the Angular Menu Bar by adding a custom CSS class with border-radius through the cssClass property.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# How to add rounded corners to Angular Menu Bar

You can apply rounded corners to the Angular Menu component by assigning a custom CSS class using the `cssClass`[`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/menu/#cssclass) property. This allows you to modify the appearance of the menu container to better match your application's design.

## How to Apply Rounded Corners

To achieve rounded corners, define a CSS class with the desired `border-radius` value and assign it to the Menu component via the `cssClass` property.
 
For more information, refer to the `style.css` file mapped under the source tab.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/menu/rounded-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/menu/rounded-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/rounded-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/rounded-cs1" %}
