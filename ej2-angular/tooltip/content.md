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

Text or information assigned to the Tooltip's [`content`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) property will be displayed as the main content of the Tooltip.

It can be a string or a template content. If no specific value is provided for the `content` property, it uses the value of the `title` attribute of the target element on which the Tooltip was initialized. The content can also dynamically be assigned to the Tooltip via AJAX.

## Template content

Any text or image can be added to the Tooltip, by default. To customize the Tooltip layout or to create your own visualized element on the Tooltip, `template` can be used.

Tooltip template content can be rendered using `ng-template`. If needed, it can also be rendered using `HTML` elements.

The following sample demonstrates how to add content template in Tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs5" %}

## Load dynamic Tooltip content

The Tooltip content can be dynamically loaded by making use of the Fetch call. The Fetch request is usually made within the [`beforeRender`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event of the Tooltip, and then the Tooltip’s [`content`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) is assigned the value retrieved on it’s success.

N> The Tooltip **target** property includes a unique identifier used to associate Tooltips with specific elements on a webpage or application interface. When setting the Tooltip **target** value as a GUID (Globally Unique Identifier), it's important to note that the GUID must start with a combination of **letters** before the numeric portion of the GUID. For example, **target: '#' +  ' tooltip'+ '96ad88bd-294c-47c3-999b-a9daa3285a05'**.

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
