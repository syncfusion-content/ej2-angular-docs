---
layout: post
title: Template in Angular Toast component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Toast component

Template property can be given as the `HTML element` that is either a `string`  or a `query selector`.

The HTML element tag can be given as a string for the template property.

```typescript
template: "<div>Toast Content</div>"

```

The template property also allows getting template content through query `selector`. Here, element 'ID' attribute is specified in the template.

```typescript
template: "#Template"

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs19" %}

## See Also

* [Add template dynamically](./how-to/add-dynamic-template/)
