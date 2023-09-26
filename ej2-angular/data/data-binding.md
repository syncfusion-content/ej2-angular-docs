---
layout: post
title: Data binding in Angular Data component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Data component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Data component

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) supports both RESTful JSON data services binding and local JavaScript object array binding.

## Local data binding

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can be bound to local datasource by assigning the array of JavaScript objects to the **json** property or simply passing them to the constructor while instantiating. Now the JavaScript object array can be queried and manipulated.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs4/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs4" %}

## Remote data binding

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can be bound to remote datasource by assigning service end point URL to the **url** property. With the provided **url**, the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) handles all communication with the data server with help of queries.

When querying data, the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) will convert the query object( [`Query`](https://ej2.syncfusion.com/documentation/api/data/query/)) into server request after calling [`executeQuery`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executequery) and waits for the server response(**JSON** format).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs5/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs5" %}

> The queried data will not be cached locally unless offline mode is enabled.

## See Also

* [Binding with OData service](../data/adaptors/#odata-adaptor)
* [Binding with ODataV4 service](../data/adaptors/#odatav4-adaptor)
* [Binding with Web API](../data/adaptors/#web-api-adaptor)
* [How to write custom adaptor](../data/adaptors/#writing-custom-adaptor)
* [How to work in offline mode](../data/how-to/#work-in-offline-mode)
* [How to send additional parameters](../data/how-to/#sending-additional-parameters-to-server)
* [How to add custom request headers](../data/how-to/#adding-custom-headers)