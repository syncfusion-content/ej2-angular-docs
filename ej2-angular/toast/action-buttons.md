---
layout: post
title: Action buttons in Angular Toast | Syncfusion
description: Add interactive action buttons to Syncfusion Angular Toast with click callbacks to let users confirm, undo, or take custom actions.
platform: ej2-angular
control: Action buttons 
documentation: ug
domainurl: ##DomainURL##
---

# Action buttons in Angular Toast

You can include action Buttons into toast by adding [`buttons`](https://ej2.syncfusion.com/angular/documentation/api/toast/index-default#buttons) property. You can bind collections of Essential<sup style="font-size:70%">&reg;</sup> JS 2 Button Model to `model` property inside buttons property, You can also include click event callback function, for each button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs2" %}

## See Also

* [Configuring options](./config)