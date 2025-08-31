---
layout: post
title: Customize loading indicator in Angular Pivotview | Syncfusion
description: Learn here all about Customizing loading indicator in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customizing loading indicator 
documentation: ug
domainurl: ##DomainURL##
---

# Customizing loading indicator in Angular Pivotview component

The pivot table displays a loading indicator during data processing operations such as filtering, sorting, and aggregation calculations. The default loading spinner can be customized to match application design requirements using the [`spinnerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#spinnertemplate) property.

The [`spinnerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#spinnertemplate) property accepts an HTML string that defines the custom loading indicator appearance. This enables control over the visual presentation, including custom styling and animations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs165/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs165/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs165" %}

## Disabling the loading indicator

The loading indicator can be completely disabled by setting the [`spinnerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#spinnertemplate) property to an empty string.

```typescript
export class AppComponent {
    public spinnerTemplate: string = '';
}
```
