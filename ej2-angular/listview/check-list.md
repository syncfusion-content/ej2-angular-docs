---
layout: post
title: Check list in Angular Listview component | Syncfusion
description: Learn here all about Check list in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Check list 
documentation: ug
domainurl: ##DomainURL##
---

# Check list in Angular Listview component

The ListView supports checkbox in default and group-lists which is used to select multiple items.
The checkbox can be enabled by the `showCheckBox` property.

The Checkbox will be useful in the scenario where we need to select multiple options. For Example,
In Shipping cart we can be able to select or unselect the desired items before checkout and also it will be useful in selecting multiple items that belongs to same category using the group list.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/checklist-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/checklist-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/checklist-cs1" %}

## Checkbox Position

In ListView the checkbox can be positioned into either `Left` or `Right` side of the list-item text.
This can be achieved by `checkBoxPositon` property. By default, checkbox will be positioned to `Left` of list-item text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/checklist-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/checklist-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/checklist-cs2" %}