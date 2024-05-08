---
layout: post
title: Integration in Angular Inplace editor component | Syncfusion
description: Learn here all about Integration in Syncfusion Angular Inplace editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Integration 
documentation: ug
domainurl: ##DomainURL##
---

# Integration in Angular Inplace editor component

The **In-place Editor** supports adding HTML5 input components using the [template](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#template) property. The Template property can be given as either a `string` or a `query selector`.

## As a string

The HTML element tag can be given as a string for the template property. Here, the input is rendered as an HTML template.

```typescript
template: "<div><input type='text' id='name'></input></div>"

```

## As a ng-template

You can render other components inside **In-place editor** using Angular `ng-template`. We need to use `ng-template` inside the `<ejs-inplaceeditor>` tag with `#template` attribute, which is mandatory to render that template.

```typescript
<ng-template #template>
    <input id="date" value="2018-05-23" type="date">
</ng-template>

```

Template mode, the `value` property not handled by the **In-place Editor** component. So, before sending a value to the server, you need to modify at [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#actionbegin) event, otherwise, an empty string will pass. In the following template sample, before submitting a data to the server, event argument and [value](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#value) property content updated in the `actionBegin` event handler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/html-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/html-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/html-template-cs1" %}