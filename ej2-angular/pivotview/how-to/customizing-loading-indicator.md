---
layout: post
title: Customizing loading indicator in Angular Pivotview component | Syncfusion
description: Learn here all about Customizing loading indicator in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customizing loading indicator 
documentation: ug
domainurl: ##DomainURL##
---

# Customizing loading indicator in Angular Pivotview component

You can customize the appearance of the loading indicator in the pivot table by using the [`spinnerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#spinnertemplate) property. This property accepts an HTML string which can be used for appearance customization.

> You can also disable the loading indicator by setting [`spinnerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#spinnertemplate) to empty string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs165/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs165/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs165/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs165" %}
