---
layout: post
title: Add dynamic Tab with content reuse in Angular | Syncfusion
description: Learn here all about Adding dynamic items with content reuse in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Adding dynamic items with content reuse in Angular Tab component

You can add dynamic tabs by reusing content through Angular **TemplateRef**, which provides an efficient way to manage complex tab content without recreating components. Dynamic tabs can be added programmatically by passing an array of items and index value to the [`addTab`](https://ej2.syncfusion.com/angular/documentation/api/tab/#addtab) method.

Content reuse can be achieved using the following steps:

1. **Create a TemplateRef variable**: Define TemplateRef variables in your component (app.component.ts) file to hold references to your template content.
2. **Access the TemplateRef using ViewChild**: Use the `@ViewChild` decorator on `<ng-template>` elements to programmatically access template references.
3. **Implement separate TemplateRef declarations**: Provide distinct TemplateRef declarations for each Angular component type and pass the content when dynamically adding tabs. This enables efficient content reuse across multiple tab instances while preserving component state and functionality.

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