---
layout: post
title: Load html content via AJAX in Angular ListView | Syncfusion
description: Learn here all about Load html content via ajax in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Load html content via AJAX in Angular ListView component

The ListView component allows you to load external `HTML` content as a template using `AJAX` requests. This article demonstrates how to fetch and set HTML content as the [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property for the ListView component.

## Prerequisites

Import the required Ajax class from the Syncfusion package:

```typescript
import { Ajax } from '@syncfusion/ej2-base';
```

## Implementation

Here's how to load external HTML content using AJAX and set it as the ListView template:

```typescript
// Create AJAX instance with the template URL
let ajax = new Ajax('https://helpej2.syncfusion.com/angular/documentation/code-snippet/listview/ajax-cs1/template', 'GET', false);
ajax.onSuccess = (e) => {
    this.listtemplate = e;
};
ajax.send();
```

The following example demonstrates rendering a smart phone settings template loaded from an external HTML file:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/ajax-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/ajax-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/ajax-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/ajax-cs2" %}
