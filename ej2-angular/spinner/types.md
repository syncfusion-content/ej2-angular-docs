---
layout: post
title: Types in Angular Spinner component | Syncfusion
description: Learn here all about Types in Syncfusion Angular Spinner component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Types 
documentation: ug
domainurl: ##DomainURL##
---

# Types in Angular Spinner component

By default, the Spinner is loaded in the applicable Essential<sup style="font-size:70%">&reg;</sup> JS 2 component based on the theme imported into the page. Based on the theme, the type is set to the Spinner.

The available types are:
* Material
* Fabric
* Bootstrap

You can change the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component spinner type by passing the type of the spinner as parameter to the `setSpinner` method like as below.

```typescript

// Specify the type of the Spinner to be displayed
setSpinner({ type: 'Bootstrap'});
```

> After Essential<sup style="font-size:70%">&reg;</sup> JS 2 component creation only, you can change the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component spinner type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spinner/default-sample-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spinner/default-sample-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spinner/default-sample-cs1" %}