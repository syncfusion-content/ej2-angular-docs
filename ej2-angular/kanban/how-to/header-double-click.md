---
layout: post
title: Handle Header Double-Click in Angular Kanban Component | Syncfusion
description: Learn how to handle column header double-click events in the Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Header double click
documentation: ug
domainurl: ##DomainURL##
---

# Handle Header Double-Click in Angular Kanban Component

The Kanban component does not provide a built-in event for handling column header double-clicks. You can bind the header double click event using [dataBound](https://ej2.syncfusion.com/angular/documentation/api/kanban/#dataBound) event at initial rendering. You can get the column header text when double click the headers.

The following sample demonstrates how to handle a double-click action on a column header:


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/auto-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/auto-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/auto-cs2" %}