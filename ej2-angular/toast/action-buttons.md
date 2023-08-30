---
layout: post
title: Action buttons in Angular Toast component | Syncfusion
description: Learn here all about Action buttons in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Action buttons 
documentation: ug
domainurl: ##DomainURL##
---

# Action buttons in Angular Toast component

You can include action Buttons into toast by adding [`buttons`](https://ej2.syncfusion.com/angular/documentation/api/toast/#buttons) property. You can bind collections of Essential JS 2 Button Model to `model` property inside buttons property, You can also include click event callback function, for each button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs2" %}

## See Also

* [Configuring options](./config/)