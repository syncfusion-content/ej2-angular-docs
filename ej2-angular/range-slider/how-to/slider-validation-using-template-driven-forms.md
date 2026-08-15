---
layout: post
title: How to validate slider with template forms in Angular Range Slider | Syncfusion
description: Apply Angular template-driven form validation to the Range Slider using directives, ngModel, and ng-valid, ng-invalid state classes.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# How to validate slider with template forms in Angular Range Slider

Implement Range Slider validation within Angular [Template-driven](https://angular.io/guide/form-validation#template-driven-validation) forms using directives and validation rules for a simpler form validation approach.

* The following [CSS classes](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel) will be added on Slider component based on the action done by user.

| **Class if true** | **Class if false** | **state** |
| --- | --- | --- |
| `ng-touched` | `ng-untouched` |The control has been visited. |
| `ng-dirty` | `ng-pristine` |The control's value has changed. |
| `ng-valid` | `ng-invalid` |The control's value is valid. |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/slider/templateform-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/templateform-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/templateform-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/templateform-cs2" %}
