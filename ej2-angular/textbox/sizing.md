---
layout: post
title: Sizing in Angular TextBox component | Syncfusion
description: Learn here all about Sizing in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sizing 
documentation: ug
domainurl: ##DomainURL##
---

# Sizing in Angular TextBox Component

The TextBox component supports three distinct sizing options to accommodate different design requirements and user interface contexts. Each size variant maintains consistent functionality while providing visual flexibility for various application layouts.

Property     | Description
------------ | -------------
  Normal     | By default, the TextBox is rendered with normal size.
  Small      | Add the `e-small` class to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property to render a smaller-sized TextBox.
  Large      | Add the `e-bigger` class to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property to render a larger-sized TextBox.

## Implementation

Use the appropriate CSS class through the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property to achieve the desired TextBox size. The small variant works well in compact interfaces or dense data entry forms, while the large variant provides better accessibility and prominence in primary input scenarios.

>Note: Further customize the TextBox appearance by using the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property to add custom classes that apply additional styling to meet specific design requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs10" %}