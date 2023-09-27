---
layout: post
title: Slider validation using template driven forms in Angular Range slider component | Syncfusion
description: Learn here all about Slider validation using template driven forms in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Slider validation using template driven forms 
documentation: ug
domainurl: ##DomainURL##
---

# Slider validation using template driven forms in Angular Range slider component

Slider can be validated in Angular using [Template-driven](https://angular.io/guide/form-validation#template-driven-validation) forms.

* The following [CSS classes](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel) will be added on Slider component based on the action done by user.

| **Class if true** | **Class if false** | **state** |
| --- | --- | --- |
| `ng-touched` | `ng-untouched` |The control has been visited. |
| `ng-dirty` | `ng-pristine` |The control's value has changed. |
| `ng-valid` | `ng-invalid` |The control's value is valid. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/templateform-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/templateform-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/templateform-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/templateform-cs2" %}
