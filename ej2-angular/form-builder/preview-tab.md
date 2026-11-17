---
layout: post
title: Preview Tab in Angular Form Builder component | Syncfusion
description: Learn how to use the Preview Tab in the Angular Form Builder component to view the generated form and review the JSON schema.
platform: ej2-angular
control: Preview Tab
documentation: ug
domainurl: ##DomainURL##
---

# Preview Tab in Angular Form Builder component

The Form Builder provides a preview tab that lets you view the generated form as it will appear to end users. It also includes a JSON code preview to review the form schema created by the builder.

## Preview the form

You can switch to the **Preview** tab to see a live preview of the form. This view reflects the current form configuration and helps you validate the layout, labels, and field behavior before exporting or publishing the form.

![Preview in Form Builder](./images/form-builder-preview.gif)

## Disabling the preview

The preview option can be disabling by setting the [enablePreview](https://ej2.syncfusion.com/angular/documentation/api/form-builder/index-default#enablepreview) property to `false`. The default value is `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/form-builder/preview-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/form-builder/preview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

The output will appear as follows:

{% previewsample "page.domainurl/samples/form-builder/preview-cs1" %}

## JSON code preview

You can switch to the **JSON** tab to view the form schema as a JSON object. This code preview is useful for reviewing the generated schema and understanding the structure used by the Form Builder.

The **Copy** button in the JSON code preview copies the created form schema JSON object to the clipboard so that you can reuse it in another application or pass it to the Form Renderer control.

![Code Preview in Form Builder](./images/form-builder-code-preview.gif)

## Build and preview workflow

Use the **Build** tab to create or edit the form, then switch to **Preview** to validate the rendered form. If you need the schema representation, open **JSON** and use **Copy** to copy the generated form schema.
