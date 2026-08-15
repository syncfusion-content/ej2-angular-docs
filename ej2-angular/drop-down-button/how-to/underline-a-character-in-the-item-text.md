---
layout: post
title: Underline a character in the item text in Angular Dropdown Menu | Syncfusion
description: Underline a specific character in Angular Dropdown Menu item text using beforeItemRender and innerHTML.
platform: ej2-angular
control: Underline a character in the item text 
documentation: ug
domainurl: ##DomainURL##
---

# How to underline a character in the item text in Angular Dropdown Menu

Underline a particular character in a text can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#beforeitemrender)event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

In the following example, `C` is underlined in the text `Copy`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/default-cs2" %}