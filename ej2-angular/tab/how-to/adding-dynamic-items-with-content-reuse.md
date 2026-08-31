---
layout: post
title: Add dynamic Tab items with content reuse in Angular Tab | Syncfusion
description: Add dynamic Angular Tabs that reuse content via TemplateRef and addTab for efficient multi-tab component composition.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Add dynamic Tab items with content reuse in Angular Tab

You can add dynamic tabs by reusing content through Angular **TemplateRef**, which provides an efficient way to manage complex tab content without recreating components. Dynamic tabs can be added programmatically by passing an array of items and an index to the [`addTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#addtab) method.

Content reuse can be achieved using the following steps:

1. **Create a TemplateRef variable**: Define `TemplateRef` variables in the `app.component.ts` file to hold references to your template content.
2. **Access the TemplateRef using ViewChild**: Use the `@ViewChild` decorator on `<ng-template>` elements to programmatically access template references.
3. **Implement separate TemplateRef declarations**: Provide distinct `TemplateRef` declarations for each Angular component type and pass the content when dynamically adding tabs. This enables efficient content reuse across multiple tab instances while preserving component state and functionality.

> **Indexing:** `addTab(items, index)` inserts items at the given index. Pass `0` to prepend, or `items.length` to append. Index values outside the valid range throw an error.

Refer to the following sample.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/content-reuse-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/content-reuse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/content-reuse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/content-reuse-cs1" %}

## Removing dynamically added tabs

Use the [`removeTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/index-default#removetab) method on the Tab instance to remove a dynamically added tab by its index.


## See Also

* [Load Tab items dynamically](./load-tab-items-dynamically)
* [Render other components in Tab using Angular template](./render-other-components-in-tab-using-angular-template)