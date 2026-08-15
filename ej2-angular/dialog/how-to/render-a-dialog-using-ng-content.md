---
layout: post
title: How to render a Dialog using ng-content in Angular Dialog | Syncfusion
description: Project custom child elements into a Syncfusion Angular Dialog using ng-content for flexible and reusable popup content composition.
platform: ej2-angular
control: Render a dialog using ng content 
documentation: ug
domainurl: ##DomainURL##
---

# How to render a Dialog using ng-content in Angular Dialog

Render custom components in the dialog content using `ng-content`. The following example demonstrates rendering child elements in a custom component using `ng-content`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/ng-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/ng-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/ng-content-cs1" %}