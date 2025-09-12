---
layout: post
title: Check list in Angular ListView component | Syncfusion
description: Learn here all about Check list in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Check list in Angular ListView component

The ListView supports checkboxes in default and group lists, enabling selection of multiple items. The checkbox functionality can be enabled using the [`showCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#showcheckbox) property.

Checkboxes are useful in scenarios where multiple item selection is required. For example, in a shopping cart, users can select or unselect desired items before checkout. Checkboxes are also beneficial for selecting multiple items that belong to the same category using group lists.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/checklist-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/checklist-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/checklist-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/checklist-cs1" %}

## Checkbox Position

In ListView, the checkbox can be positioned on either the `Left` or `Right` side of the list item text.
This can be achieved using the [`checkBoxPosition`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#checkboxposition) property. By default, the checkbox is positioned to the `Left` of the list item text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/checklist-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/checklist-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/checklist-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/checklist-cs2" %}