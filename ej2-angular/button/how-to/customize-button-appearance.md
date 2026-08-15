---
layout: post
title: How to customize button appearance in Angular Button | Syncfusion
description: Customize Angular Button colors, size, and states by assigning your own CSS class through the cssClass property.
platform: ej2-angular
control: Customize button appearance 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize button appearance in Angular Button

You can customize the appearance of the button by using the Cascading Style Sheets (CSS). Define the CSS according to your requirement, and assign the class name to the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/button#cssclass)property.
In the following code snippet the background color, text color, height, width, and sharp corner of the button can be customized through the `e-custom` class for all states (hover, focus, and active).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/button/howto-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button/howto-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button/howto-cs1" %}