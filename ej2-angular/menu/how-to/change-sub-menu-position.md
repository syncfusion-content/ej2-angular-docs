---
layout: post
title: Change sub menu position in Angular Menu component | Syncfusion
description: Learn here all about Change sub menu position in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change sub menu position 
documentation: ug
domainurl: ##DomainURL##
---

# Change sub menu position in Angular Menu component

The submenu position can be changed by using the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeopen) event. Assign the top and left position where you want to open the submenu to the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeopen) event arguments `args.top` and `args.left` respectively.

In the below sample, the sub menu opens above the parent menu item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/menu/position-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/position-cs1" %}

>> For custom positioning, set both `top` and `left` position in the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeopen) event.
