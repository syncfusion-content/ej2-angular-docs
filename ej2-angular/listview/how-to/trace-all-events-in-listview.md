---
layout: post
title: Track events in Angular ListView component | Syncfusion
description: Learn here all about Trace all events in ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Event Tracing in Angular ListView Component

The ListView component provides built-in events that can be used as extension points to implement custom operations and debugging. This guide demonstrates how to trace and handle various ListView events effectively.

## Refer to the following steps to trace the ListView events:

1. Render the ListView with [dataSource](https://ej2.syncfusion.com/angular/documentation/api/list-view/#datasource), and bind the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#actionbegin), [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#actioncomplete), and [`select`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) events.

2. Perform custom operations in `actionBegin`, `actionComplete`, and select events.

3. Provide event log details for `actionBegin` and `actionComplete` events, and they will be displayed in the event trace panel when the ListView action starts and the dataSource bound successfully.

4. Get the selected item details from the [`SelectEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/list-view/selectEventArgs/) in the select event, and display the selected list item text in the event trace panel while selecting list items.

5. Use clear button to remove event trace information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/getting-started-cs7/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs7" %}
