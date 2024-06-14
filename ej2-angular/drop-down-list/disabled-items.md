---
layout: post
title: Disabled Items in Angular DropDownList component | Syncfusion
description: Learn here all about Disabled Items in Syncfusion Angular DropDownList component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Disabled Items 
documentation: ug
domainurl: ##DomainURL##
---

# Disabled Items in Angular DropDownList component

The DropDownList provides options for individual items to be either in an enabled or disabled state for specific scenarios. The category of each list item can be mapped through the [disabled](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#fields) field in the data table. Once an item is disabled, it cannot be selected as a value for the component. To configure the disabled item columns, use the `fields.disabled` property.

In the following sample, State are grouped according on its category using `disabled` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs21" %}

## Disable Item Method

The [disableItem](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#disableItem) method can be used to handle dynamic changing in disable state of a specific item. Only one item can be disabled in this method. To disable multiple items, this method can be iterated with the items list or array. The disabled field state will to be updated in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#datasource), when the item is disabled using this method. If the selected item is disabled dynamically, then the selection will be cleared.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML Li element of the item to be removed.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean and object type value of the item to be removed. |
| itemIndex | <code>number</code> | It accepts the index of the item to be removed. |

## Enabled

If you want to disabled the overall component to set the [enabled](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#enabled) property to false.

{% [Disabled DropDownList Component](././images/dropdownlist-disable.png)" %}
