---
layout: post
title: Adding dynamic items with content reuse in Angular Tab component | Syncfusion
description: Learn here all about Adding dynamic items with content reuse in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adding dynamic items with content reuse 
documentation: ug
domainurl: ##DomainURL##
---

# Adding dynamic items with content reuse in Angular Tab component

You can add dynamic tabs by reusing the content using Angular **TemplateRef**. Tabs can be added dynamically by passing array of items and index value to the [`addTab`](https://ej2.syncfusion.com/angular/documentation/api/tab#addtab) method.

Content reuse can be achieved by using the following steps:
1. Create a TemplateRef variable in your component(app.component.ts) file.
2. Access the TemplateRef using ViewChild on the `<ng-template>` element.
3. Provide separate TemplateRef declaration for each angular component and pass content by dynamically adding tab. It will reuse the content of angular component.

Refer to the following sample.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/content-reuse-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/content-reuse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/content-reuse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/content-reuse-cs1" %}