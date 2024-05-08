---
layout: post
title: Render other components in tab using angular template in Angular Tab component | Syncfusion
description: Learn here all about Render other components in tab using angular template in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render other components in tab using angular template 
documentation: ug
domainurl: ##DomainURL##
---

# Render other components in tab using angular template in Angular Tab component

You can render other components inside Tab using Angular **ng-template**. Through this, we can add content as other components directly with all their functionalities to our Tab. We need to use `ng-template` inside the each `e-tabitem` tag with `#content` attribute, which is mandatory to render content. And now use `ng-template` tag with select attribute of id or class name for mapping required content.

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
