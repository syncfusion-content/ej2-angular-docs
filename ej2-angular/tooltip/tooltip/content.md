---
layout: post
title: Content in Angular Tooltip component | Syncfusion
description: Learn here all about Content in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Content 
documentation: ug
domainurl: ##DomainURL##
---

# Content in Angular Tooltip component

Assign text or information to the Tooltip's `content` property to display as the main content. The content can be a string or template. If the `content` property is not specified, the tooltip uses the value from the `title` attribute of the target element. You can also dynamically assign content to the tooltip via AJAX.

## Template content

Add any text or image to the tooltip by default. Use the `template` property to customize the tooltip layout or create custom visualized elements.

Render tooltip template content using the `ng-template` or HTML elements.

The following sample demonstrates how to add a content template to the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs25" %}

## Dynamic content via AJAX

Dynamically load tooltip content using AJAX calls. Make the AJAX request within the `beforeRender` event, and assign the retrieved data to the Tooltip's `content` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/ajax-content-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/ajax-content-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/ajax-content-cs2" %}
