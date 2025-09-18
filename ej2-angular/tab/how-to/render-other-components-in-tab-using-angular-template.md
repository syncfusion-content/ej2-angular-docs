---
layout: post
title: Render components in Angular Tab using templates | Syncfusion
description: Learn here all about Render other components in tab using angular template in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Render components in Tab using Angular templates

You can render other components inside Tab using Angular **ng-template**. This approach enables you to add content as other components directly with all their functionalities integrated into the Tab. The `ng-template` must be used inside each `e-tabitem` tag with the `#content` attribute, which is mandatory to render content. Then use the `ng-template` tag with a select attribute containing the id or class name for mapping the required content.

Check out this video to learn about integrating other UI components inside the Angular Tab component:

{% youtube "https://www.youtube.com/watch?v=207C5_BZIj0" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/direct-components-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/direct-components-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/direct-components-cs1" %}