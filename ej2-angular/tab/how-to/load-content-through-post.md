---
layout: post
title: How to load content through Ajax in Angular Tab | Syncfusion
description: Load Angular Tab content through HTTP POST requests using Syncfusion's Ajax utility from ej2-base for external data.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to load content through Ajax in Angular Tab

The Tab component supports loading external content through Syncfusion's `Ajax` utility using HTTP POST requests. This approach is useful when sending data to the server or when the content requires authentication parameters.

## Steps

1. Import the `Ajax` module from `ej2-base`:

   ```typescript
   import { Ajax } from '@syncfusion/ej2-base';
   ```

2. Create a new `Ajax` instance with the target URL and configure it for POST.
3. In the `Success` event, assign the response data to the Tab's `items[i].content`.
4. Initialize the Tab (or call `refresh()`) once the response is received.

> **Method:** By default the Syncfusion `Ajax` helper issues POST requests. Pass `{ type: 'GET' }` to override.
> **Errors:** Handle failures via `Ajax` failure callbacks or wrap the call in a Promise; see [Troubleshooting](#troubleshooting) below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/ajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/ajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/ajax-cs1" %}

## See Also

* [Load tab with data source](./load-tab-with-data-source)
* [Load Tab items dynamically](./load-tab-items-dynamically)