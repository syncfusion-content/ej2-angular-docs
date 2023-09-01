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

A text or a piece of information assigned to the Tooltip's `content` property will be displayed as the main text stream of the Tooltip.
It can be a string or a template content. If the `content` property is not provided with any specific value, then it takes the value assigned to the `title` attribute of the target element on which the Tooltip was initialized. The content can also dynamically be assigned to the Tooltip via AJAX.

## Template content

Any text or image can be added to the Tooltip, by default. To customize the Tooltip layout or to create your own visualized element on the Tooltip, `template` can be used.

Tooltip template content can be rendered using the `ng-template`. If needed it can be rendered using the `HTML` elements also.

The following sample demonstrates how to add content template in tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/getting-started-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs5" %}

## Dynamic content via AJAX

The Tooltip content can be dynamically loaded  by making use of the AJAX call. The AJAX request is usually made within the `beforeRender` event of the Tooltip, and then the Tooltip's `content` is assigned the value retrieved on it's success.

N> The Tooltip **target** property includes a unique identifier used to associate Tooltips with specific elements on a webpage or application interface. When setting the Tooltip **target** value as a GUID (Globally Unique Identifier), it's important to note that the GUID must start with a combination of **letters** before the numeric portion of the GUID. For example, **target: '#' +  ' tooltip'+ '96ad88bd-294c-47c3-999b-a9daa3285a05'**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/ajax-content-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/ajax-content-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/ajax-content-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/ajax-content-cs1" %}
