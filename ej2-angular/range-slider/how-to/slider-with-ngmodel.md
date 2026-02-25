---
layout: post
title: Slider with ngmodel in Angular Range Slider component | Syncfusion
description: Learn here all about Slider with ngmodel in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# Slider with ngmodel in Angular

Implement two-way data binding between a Range Slider and other form controls using the [ngModel](https://angular.io/api/forms/NgModel) directive. Changes to the slider value automatically update bound properties, and vice versa. Follow the steps below to set up two-way binding.

* Create a [slider](https://ej2.syncfusion.com/angular/documentation/slider/getting-started.html#types) component and bind its value property using ngModel. Refer to the code snippet below.

  ```

  <ejs-slider class="form-control" id='slider' [ticks]="ticks" [(ngModel)]="slidervalue" name="slider" required #slider="ngModel"></ejs-slider>
 
  ```

* Create a numeric input field and bind its value using ngModel to the same property.

  ```

  <input type="number" id="name" name="name" class="form-control" required [(ngModel)]="slidervalue" #slider="ngModel">

  ```

* Use the same property name in both the slider and numeric input. This enables two-way binding, so adjusting the slider updates the input and vice versa.
* Initialize the property with a default value in the component. Both controls will reflect changes synchronously.

  ```typescript

  export class AppComponent {
      slidervalue = "30";
    public ticks: Object = {
      placement: 'Before',
      largeStep: 20,
      smallStep: 5,
      showSmallTicks: true
    };
  }

  ```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/ngmodel-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/ngmodel-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/ngmodel-cs2" %}
