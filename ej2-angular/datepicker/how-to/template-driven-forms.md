---
layout: post
title: Template driven forms in Angular Datepicker component | Syncfusion
description: Learn here all about Template driven forms in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template driven forms 
documentation: ug
domainurl: ##DomainURL##
---

# Template driven forms in Angular Datepicker component

The form can be build with Angular template syntax easily along with form specific directives.
This template-drive forms uses the `ng` directives in view to handle the forms controls.

* To enable the template-driven,  import the FormsModule into corresponding app component.

For more details about template-driven Forms refer to:<https://angular.io/guide/forms#template-driven-forms>.

* In angular forms mentioning the name is must to process as form elements.

* Mention the `name` attribute to DatePicker element which will be used to identify the form element. To register an DatePicker element to ngForm,  give the ngModel  to it so the FormsModule will automatically detect the DatePicker as a form element.
After that, the DatePicker value will be selected based on the ngModel value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/template-driven-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/template-driven-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/template-driven-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/datepicker/template-driven-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/template-driven-cs1" %}