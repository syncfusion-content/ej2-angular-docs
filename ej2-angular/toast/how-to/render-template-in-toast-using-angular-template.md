---
layout: post
title: How to render a template in toast in Angular Toast | Syncfusion
description: Render Syncfusion Angular Toast content with an Angular ng-template inside the e-toast tag, using the template attribute to bind content.
platform: ej2-angular
control: Render template in toast using angular template
documentation: ug
domainurl: ##DomainURL##
---

# How to render a template in toast in Angular Toast

You can also render the template support in Toast using the Angular **ng-template**. We need to use this ng-template within the e-toast tag with #template attribute, which is mandatory to render template property. Also you don't need to use the template property if you used this ng-template.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs14" %}