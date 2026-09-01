---
layout: post
title: How to add reactive forms within Tab in Angular Tab | Syncfusion
description: Embed Angular reactive forms inside a Tab item using ng-template, ReactiveFormsModule, FormGroup, and FormControl for multi-section forms.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to add reactive forms within Tab in Angular Tab

The Tab component supports rendering other components inside Tab panels using Angular **ng-template**. This includes integrating reactive forms within individual tab items to create organized, multi-section form interfaces.

For more details about Reactive Forms refer: <https://angular.io/guide/reactive-forms>.

To implement reactive forms within tabs:

1. Import `ReactiveFormsModule` into the app module.
2. Import `FormGroup` and `FormControl` into the component file.
3. Bind each `FormControl` to a form element (e.g., AutoComplete).
4. Reference the `FormGroup` directly within the **ng-template** to render the form content inside the tab panel.

> **Form state preservation:** When `loadOn` is set to `Dynamic`, the form values are reset on every selection. For state preservation across tab switches, use the default `OnDemand` or `Init` rendering modes. See [Content Render Modes](../content-render-modes).

The following example demonstrates how to add reactive forms within a Tab item using ng-template.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/reactive-forms-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/reactive-forms-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/reactive-forms-cs1" %}

## See Also

* [Render other components in Tab using Angular template](./render-other-components-in-tab-using-angular-template)
* [Content Render Modes](../content-render-modes)