---
layout: post
title: Templates in Angular Form Builder control | Syncfusion
description: Learn how to include Templates in the Angular Form Builder control to display third party components.
platform: ej2-angular
control: Templates
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Form Builder component

Templates can be used in the Form Builder control to display third-party components within the form. This feature lets you configure the form schema with the properties of the third-party component.

This section explains how to use templates in the Form Builder component.

## Adding Templates

Templates can be added to the Form Builder by configuring the third-party control in the `<e-toolboxitemsetting>`.
Use the `<e-toolboxitemsetting>` directive inside `<e-toolboxitemsettings>` to define custom templates. Bind the [type](https://ej2.syncfusion.com/angular/documentation/api/form-builder/toolboxitemsetting#type) property to a `FormWidgetType` value to target a specific widget type, and define the custom UI using `<ng-template #template>`.

Multiple `<e-toolboxitemsetting>` entries can be added to register templates for different widget types.

Once a field is dragged onto the design canvas, the custom template renders automatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/form-builder/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/form-builder/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

In the Preview tab, the templates are displayed so that you can validate the created form.

{% previewsample "page.domainurl/samples/form-builder/template-cs1" %}

## Adding properties of the template in property panel

The properties of the third party components can be added to the property panel using the [setProperty](https://ej2.syncfusion.com/angular/documentation/api/form-builder/index-default#setproperty) method in the Form Builder. For more details, see this [documentation](./property-panel#adding-a-new-property-in-the-property-panel)


## Exporting templates

When the form schema is exported, the template itself is not included in the schema. However, a [templateId](https://ej2.syncfusion.com/angular/documentation/api/form-builder/toolboxitemsetting#templateid) property is added to the form schema to notify Form Renderer that a template is mapped to the corresponding element. This value is configured via the `templateId` property on `<e-toolboxitemsetting>`.

In Form Renderer, additional configuration is required as described in the [documentation](http://ej2.syncfusion.com/angular/documentation/form-renderer/templates) to render templates in the form.