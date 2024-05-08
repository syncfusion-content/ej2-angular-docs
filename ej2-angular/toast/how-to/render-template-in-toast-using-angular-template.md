---
layout: post
title: Render template in toast using angular template in Angular Toast component | Syncfusion
description: Learn here all about Render template in toast using angular template in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render template in toast using angular template 
documentation: ug
domainurl: ##DomainURL##
---

# Render template in toast using angular template in Angular Toast component

You can also render the template support in Toast using the Angular **ng-template**. We need to use this ng-template within the e-toast tag with #template attribute, which is mandatory to render template property. Also you don't need to use the template property if you used this ng-template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs14" %}