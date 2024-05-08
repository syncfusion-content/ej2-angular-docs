---
layout: post
title: Add reactive forms within a tab in Angular Tab component | Syncfusion
description: Learn here all about Add reactive forms within a tab in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add reactive forms within a tab 
documentation: ug
domainurl: ##DomainURL##
---

# Add reactive forms within a tab in Angular Tab component

As we know already, we can render other components inside the Tab using Angular **ng-template**. Likewise, we can also render the reactive forms module inside the Tab items using this **ng-template**.

For more details about Reactive Forms refer: <https://angular.io/guide/reactive-forms>.

For the reactive forms you should import a ReactiveFormsModule into app module as well as the FormGroup,FormControl should be imported to `app component`. The FormGroup is used to declare `formGroupName` for the form and the FormControl is used to declare `formControlName` for form controls. You can declare the `formControlName` to AutoComplete as usual. Then,you must create a value object to the FormGroup and each
value will be the default value of the form control.

Create the reactive form like above and then directly refer that in your **ng-template**

The following example demonstrates how to add the reactive forms within a Tab item using ng-template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/reactive-forms-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/reactive-forms-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/reactive-forms-cs1" %}