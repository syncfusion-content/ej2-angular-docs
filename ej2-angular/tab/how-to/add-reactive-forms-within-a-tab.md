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

The Tab component supports rendering other components inside tab panels using Angular **ng-template**. This includes integrating reactive forms within individual tab items to create organized, multi-section form interfaces.

For more details about Reactive Forms refer: <https://angular.io/guide/reactive-forms>.

To implement reactive forms within tabs, import the ReactiveFormsModule into the app module. Additionally, import FormGroup and FormControl into the `app component`. The FormGroup declares the `formGroupName` for the entire form, while FormControl declares individual `formControlName` properties for specific form controls. Each FormControl can be applied to form elements like AutoComplete as standard practice. Create a value object for the FormGroup where each property represents the default value for its corresponding form control.

After creating the reactive form structure, reference it directly within the **ng-template** to render the form content inside the tab panel.

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