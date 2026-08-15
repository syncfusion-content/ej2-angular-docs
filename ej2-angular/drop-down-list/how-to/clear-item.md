---
layout: post
title: How to clear the selected item in Angular Dropdown List | Syncfusion®
description: Clear the selected item in Angular Dropdown List using the showClearButton icon, or programmatically by setting the value, text, or index to null.
platform: ej2-angular
control: Clear item 
documentation: ug
domainurl: ##DomainURL##
---

# How to clear the selected item in Angular Dropdown List

You can clear the selected item in the below two different ways.

By clicking on the `clear icon` which is shown in DropDownList element, you can clear the selected item in DropDownList through **interaction**. By using [`showClearButton`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#showclearbutton)
property, you can enable the clear icon in DropDownList element.

Through **programmatic** you can set `null` value to anyone of the index, text or value property to clear the selected item in DropDownList.

The following example demonstrate about how to clear the selected item in DropDownList.

{% tabs %}
{% highlight ts tabtitle="clear.html" %}
{% include code-snippet/dropdownlist/clear-item-cs1/src/clear.html %}
{% endhighlight %}

{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/clear-item-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/clear-item-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/clear-item-cs1" %}