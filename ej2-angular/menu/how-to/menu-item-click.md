---
layout: post
title: Menu item click in Angular Menu component | Syncfusion
description: Learn here all about Menu item click in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Menu item click in Angular Menu component


To open submenu items only when a menu item is clicked, set the [`showItemOnClick` ](https://ej2.syncfusion.com/angular/documentation/api/menu/#showitemonclick)property to `true`.

You can control the behavior of menu and submenu item expansion using the `showItemOnClick` property. When enabled, submenu items will open only on click, rather than on hover.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs9" %}