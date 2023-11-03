---
layout: post
title: Two way binding in Angular Color picker component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Angular Color picker component

ColorPicker component supports two-way property binding.

The steps to perform two-way binding.

* Create [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started#getting-started) component and binds the [`value`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#value) property as like the below code snippet.

  ```

  <input ejs-colorpicker type="color" class="form-control" id="colorpicker" required [(value)]="value" name="colorpicker" />

  ```

* Create text box and bind the value using ngModel.

  ```

  <input type="text" id="name" name="name" class="form-control" [(ngModel)]="value" />

  ```

* And name the same variable name in both color picker and text box. Which will help to view the two-way binding i.e. changing value in color picker will change the textbox value and vice versa.

* Initialize the value of the variable in component file, while will be bound to color picker and text box initially. The values will be changed synchronously while changing any one (color picker or text-box) value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/ng-model-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/ng-model-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/ng-model-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/ng-model-cs1" %}

>> By default, the selected color value returns 8 digit hex code in [`value`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#value) property. Some browser like IE won't support the 8 digit hex code. In such case, you can use getter setter method to change the value to supported format as like the above sample.
