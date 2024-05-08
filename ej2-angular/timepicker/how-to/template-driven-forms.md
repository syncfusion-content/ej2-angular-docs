---
layout: post
title: Template driven forms in Angular Timepicker component | Syncfusion
description: Learn here all about Template driven forms in Syncfusion Angular Timepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template driven forms 
documentation: ug
domainurl: ##DomainURL##
---

# Template driven forms in Angular Timepicker component

The form can be build with Angular template syntax easily along with form specific directives. This template-driven forms uses the `ng` directives in view to handle the forms controls.

* To enable the template-driven,  import the FormsModule into corresponding app component.

For more details about template-driven Forms refer to:<https://angular.io/guide/forms#template-driven-forms>.

* In angular forms mentioning the name is must to process as form elements.

* Mention the `name` attribute to TimePicker element which will be used to identify the form element. To register an TimePicker element to ngForm,  give the ngModel  to it so the FormsModule will  automatically detect the TimePicker as a form element. After that, the TimePicker value will be selected based on the ngModel value.

The following example  demonstrates template driven forms with TimePicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/template-driven-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/template-driven-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/timepicker/template-driven-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/template-driven-cs1" %}