---
layout: post
title: How to load Tab items dynamically in Angular Tab | Syncfusion
description: Add Angular Tab items at runtime with the addTab method, passing header text, content, and an index for user-driven tabs.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to load Tab items dynamically in Angular Tab

Tabs can be added dynamically by passing an array of items and an index to the [`addTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#addtab) method.

```typescript
    // New tab title and content inputs are fetched and stored in local variable
    let title: string = document.getElementById('tab-title').value;
    let content: string = document.getElementById('tab-content').value;

    // Required tab item object formed by using textbox inputs
    let item: Object =  { header: { text: title }, content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };

    // Pass the item object and the index argument to the addTab method to add a new tab
    this.tabInstance.addTab([item], this.totalItems - 1);
```

## Steps

1. Add a **+** icon to the tab header via the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/tab/headerModel/#iconcss) property on the items configuration.
2. Capture new-tab title and content from input fields.
3. Click the **Add Tab** button to call `addTab([item], index)` with the calculated last index.

In the following demo, tab content is added by clicking the **+** icon.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/dynamic-tab-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/dynamic-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/dynamic-tab-cs1" %}

## Index parameter

Pass `0` to prepend a tab or `currentItems.length` to append it. Indices outside the valid range throw an error.

## Removing dynamically added tabs

Call [`removeTab(index)`](https://ej2.syncfusion.com/angular/documentation/api/tab/index-default#removetab) on the Tab instance to remove a tab by its current index.

## See Also

* [Adding dynamic items with content reuse](./adding-dynamic-items-with-content-reuse)
* [Show/Hide Tab item](./show-hide-tab-item)