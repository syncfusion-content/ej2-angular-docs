---
layout: post
title: Clear item in Angular Drop down list component | Syncfusion
description: Learn here all about Clear item in Syncfusion Angular Drop down list component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Clear item 
documentation: ug
domainurl: ##DomainURL##
---

# Clear item in Angular Drop down list component

You can clear the selected item in the below two different ways.

By clicking on the `clear icon` which is shown in DropDownList element, you can clear the selected item in DropDownList through **interaction**. By using [`showClearButton`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#showclearbutton)
property, you can enable the clear icon in DropDownList element.

Through **programmatic** you can set `null` value to anyone of the index, text or value property to clear the selected item in DropDownList.

The following example demonstrate about how to clear the selected item in DropDownList.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/clear-item-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/clear-item-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/clear-item-cs1" %}