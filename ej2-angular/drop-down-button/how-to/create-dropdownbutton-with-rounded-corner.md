---
layout: post
title: Create rounded corner in Angular Dropdown Menu | Syncfusion
description: Create rounded Angular Dropdown Menu buttons by applying border-radius through the cssClass property.
platform: ej2-angular
control: Create dropdownbutton with rounded corner 
documentation: ug
domainurl: ##DomainURL##
---

# How to create rounded corner in Angular Dropdown Menu

DropDownButton with rounded corner can be achieved by adding `border-radius` CSS property to button element.

In the following example, `e-round-corner` class is defined with `5px` `border-radius`
property and added that class to button element using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#cssclass) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/rounded-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/rounded-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/rounded-cs1" %}