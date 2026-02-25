---
layout: post
title: Content in Angular Tooltip component | Syncfusion
description: Learn here all about Content in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Content in Angular Tooltip component

Text or information assigned to the Tooltip's [`content`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) property displays as the main content of the Tooltip.

The content can be a string or template. If no specific value is provided, the tooltip uses the `title` attribute of the target element. Content can also be dynamically assigned to the tooltip via AJAX.

## Template content

Add text or images to the tooltip by default. Use `template` to customize the tooltip layout or create custom visualized elements.

Render tooltip template content using `ng-template` or `HTML` elements as needed.

The following sample demonstrates how to add a content template to the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs5" %}

## Load dynamic tooltip content

Load tooltip content dynamically using the Fetch API. Make the Fetch request within the [`beforeRender`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event and assign the retrieved value to the tooltip's [`content`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) property.

> The tooltip **target** property includes a unique identifier to associate tooltips with specific elements. When setting a GUID as the **target** value, ensure the GUID starts with **letters** before the numeric portion. For example: **target: '#tooltip' + '96ad88bd-294c-47c3-999b-a9daa3285a05'**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/ajax-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tooltip/ajax-content-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/ajax-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/ajax-content-cs1" %}
