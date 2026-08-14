---
layout: post
title: How to enable scroller in Angular ListBox | Syncfusion
description: Enable scrolling in the Angular ListBox by setting a fixed pixel height on the component, which constrains the popup to the specified value.
platform: ej2-angular
control: Enable scroller 
documentation: ug
domainurl: ##DomainURL##
---

# How to enable scroller in Angular ListBox

The ListBox supports scrolling and it can be achieved by restricting the height of the list box using [`height`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#height) property.

In the following sample, `height` of the list box is restricted to `290px`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/listbox/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs10" %}