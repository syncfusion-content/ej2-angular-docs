---
layout: post
title: Templates in Angular Breadcrumb component | Syncfusion
description: Learn here all about Templates in Syncfusion Angular Breadcrumb component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Breadcrumb 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Breadcrumb component

The Breadcrumb component provides flexible template customization options to create rich, interactive navigation experiences. Use the [`itemTemplate`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#itemtemplate) property to customize individual breadcrumb items and the [`separatorTemplate`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#separatortemplate) property to customize the separators between items, enabling full control over the visual presentation and functionality.

## Item Template

The following example demonstrates customizing breadcrumb items using the [`itemTemplate`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#itemtemplate) property. This shopping cart navigation scenario shows how breadcrumb items can be enhanced with chip components to create a more engaging user interface.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/template-cs1" %}

## Separator Template

The following example shows how to customize separators between breadcrumb items using the [`separatorTemplate`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#separatortemplate) property. Custom icons replace the default separator to create a more visually distinctive navigation path.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/template-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/template-cs2" %}

## Customize Specific Item Template

Individual breadcrumb items can be customized selectively using [`itemTemplate`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#itemtemplate) with conditional rendering logic. The following example demonstrates how to apply custom styling with a span element specifically to items containing "Breadcrumb" in their text, while leaving other items with default styling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/template-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/template-cs3" %}