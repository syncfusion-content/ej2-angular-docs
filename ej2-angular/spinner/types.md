---
layout: post
title: Types in Angular Spinner | Syncfusion
description: Switch the Syncfusion Angular Spinner between Material, Fabric, and Bootstrap visuals by passing a type value to the setSpinner method.
platform: ej2-angular
control: Types 
documentation: ug
domainurl: ##DomainURL##
---

# Types in Angular Spinner

By default, the Angular Spinner type is automatically set based on the theme imported into the page. The Angular Spinner loads in the applicable Essential JS 2 component according to the selected theme.

The available Angular Spinner types are:
* Material
* Fabric
* Bootstrap

Change the Angular Spinner type by passing the type as a parameter to the `setSpinner` method.

```typescript
// Specify the Angular Spinner type to display
setSpinner({ type: 'Bootstrap' });
```

> Change the spinner type only after the Essential JS 2 component is created.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spinner/default-sample-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spinner/default-sample-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spinner/default-sample-cs1" %}