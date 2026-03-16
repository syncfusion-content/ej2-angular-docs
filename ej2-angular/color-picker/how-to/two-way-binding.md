---
layout: post
title: Two way binding in Angular Color picker component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# Two-way binding in Angular Color picker component

The ColorPicker component supports two-way property binding, allowing the color value to synchronize between the ColorPicker and other components in real time.

## Implementing two-way binding

* Create a [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started#getting-started) component and bind the [`value`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#value) property using two-way binding as shown in the following code snippet.

  ```

  <input ejs-colorpicker type="color" class="form-control" id="colorpicker" required [(value)]="value" name="colorpicker" />

  ```

* Create a text input and bind the same value property using `ngModel`.

  ```

  <input type="text" id="name" name="name" class="form-control" [(ngModel)]="value" />

  ```

* Use the same variable name in both the ColorPicker and text input. This synchronizes the value: changing the color in the ColorPicker updates the text input, and editing the text input updates the ColorPicker.

* Initialize the variable value in the component file. This value is bound to both the ColorPicker and text input. Any change to either component automatically updates the other.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/ng-model-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template.html" %}
{% include code-snippet/colorpicker/ng-model-cs1/src/template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/ng-model-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/ng-model-cs1" %}

> By default, the selected color value returns an 8-digit hex code (with alpha channel) in the [`value`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#value) property. Some browsers, such as Internet Explorer, do not support 8-digit hex codes. In such cases, use getter and setter methods to convert the value to a compatible format, as shown in the sample above.
