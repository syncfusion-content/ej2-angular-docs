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

By default, the Spinner type is automatically set based on the theme imported into the page. The spinner loads in the applicable Essential JS 2 component according to the selected theme.

The available spinner types are:
* Material
* Fabric
* Bootstrap

Change the spinner type by passing the type as a parameter to the `setSpinner` method.

```typescript
// Specify the spinner type to display
setSpinner({ type: 'Bootstrap' });
```

> Change the spinner type only after the Essential JS 2 component is created.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spinner/default-sample-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spinner/default-sample-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spinner/default-sample-cs1" %}