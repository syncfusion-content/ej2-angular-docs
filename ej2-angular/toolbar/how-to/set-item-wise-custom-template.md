---
layout: post
title: Set item wise custom template in Angular Toolbar component | Syncfusion
description: Learn here all about Set item wise custom template in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set item wise custom template 
documentation: ug
domainurl: ##DomainURL##
---

# Set item wise custom template in Angular Toolbar component

The Toolbar supports adding template commands using the  `template` property. Template property can be given as the `HTML element` that is either a `string`  or a `query selector`.

## As string

The HTML element tag can be given as a string for the template property. Here, the checkbox is rendered as a HTML template.

```typescript
template: "<div><input type='checkbox' id='check1' checked=''>Accept</input></div>"

```

## As selector

The template property also allows getting template content through query `selector`. Here, button 'ID' attribute is specified in the template.

```typescript
template: "#Template"

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs3" %}