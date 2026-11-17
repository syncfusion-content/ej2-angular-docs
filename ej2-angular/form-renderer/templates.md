---
layout: post
title: Templates in Angular Form Renderer component | Syncfusion
description: Learn how to use templates in the Angular Form Renderer component to display and integrate third-party components within forms.
platform: ej2-angular
control: Templates
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Form Renderer component

Templates can be displayed in the Form Renderer control to render third-party components within a form.

This section explains how to use templates in the Form Renderer component.

## Adding Templates

Templates can be added to a form in Form Renderer using `<e-customwidgetsetting>`.
Use the `<e-customwidgetsetting>` directive inside `<e-customwidgetsettings>` to define custom templates. Set the [type](https://ej2.syncfusion.com/angular/documentation/api/form-renderer/customwidgetsetting#type) property to target all form fields of a specific widget type, and define the custom UI using `<ng-template #template>`.

Multiple `<e-customwidgetsetting>` entries can be added inside `<e-customwidgetsettings>` to register templates for different widget types.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/form-renderer/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/form-renderer/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/form-renderer/template-cs1" %}

## Adding a template to a single or specific field

To apply a template to a specific field rather than an entire widget type, use [fieldName](https://ej2.syncfusion.com/angular/documentation/api/form-renderer/customwidgetsetting#fieldname) or [templateId](https://ej2.syncfusion.com/angular/documentation/api/form-renderer/customwidgetsetting#templateid) on `<e-customwidgetsetting>` instead of `type`:

* **`fieldName`** - Matches the `name` value of the target field in the schema.
* **`templateId`** - Matches a `templateId` property defined on the field in the schema.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/form-renderer/template-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/form-renderer/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/form-renderer/template-cs2" %}