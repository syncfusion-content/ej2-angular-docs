---
layout: post
title: Immutable mode in Angular TreeGrid component | Syncfusion
description: Learn about immutable mode in the Syncfusion Angular TreeGrid component of Essential JS 2, including performance benefits and feature limitations.
platform: ej2-angular
control: Immutable mode 
documentation: ug
domainurl: ##DomainURL##
---

# Immutable mode in Angular TreeGrid component

Immutable mode enhances TreeGrid re-rendering performance by using object reference comparison and [deep comparison](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality) techniques. When TreeGrid actions are performed, only modified or newly added rows are re-rendered; unchanged rows remain unaffected.

Enable immutable mode by setting the [`enableImmutableMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#enableimmutablemode) property to **true**.

> * This feature uses the primary key value for data comparison. Set the [`isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) column to ensure correct row identification.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/immutable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/immutable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/immutable-cs1" %}

## Limitations

The following features are not supported when immutable mode is enabled:

* Frozen rows and columns
* Row Template
* Detail Template
* Column reorder
* Virtualization

> To discover more features, visit the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid). Explore the [Angular TreeGrid example](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to see data presentation and management in action.
