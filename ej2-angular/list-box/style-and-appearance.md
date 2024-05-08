---
layout: post
title: Style and appearance in Angular List box component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style and appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular List box component

To modify the ListBox appearance, you need to override the default CSS of ListBox component. Please find the list of CSS classes and its corresponding section in ListBox component. Also, you have an option to create your own custom theme for the controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

| CSS Class | Purpose of Class |
|-----|-----|
|.e-listbox-wrapper|To customize the listbox wrapper |
|.e-list-parent .e-list-item|To customize the listbox list items |
|.e-list-parent .e-list-item:hover|To customize the listbox list items on hover |
|.e-list-parent .e-list-item.e-selected|To customize the listbox selected list item |
|.e-listboxtool-wrapper .e-listbox-tool|To customize the listbox toolbar |
|.e-listboxtool-wrapper .e-listbox-tool .e-btn|To customize the listbox toolbar button |
|.e-listboxtool-wrapper .e-listbox-tool .e-btn .e-btn-icon.e-icons::before|To customize the listbox toolbar icon |

## Horizontal ListBox

You can use [cssClass](https://ej2.syncfusion.com/angular/documentation/api/list-box/#cssClass) property to display the Listbox horizontally.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/horizontal-listbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/horizontal-listbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/horizontal-listbox-cs1" %}
