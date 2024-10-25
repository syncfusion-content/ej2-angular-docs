---
layout: post
title: Add floating label to TextBox programmatically in Angular | Syncfusion
description: Learn here all about Add floating label to TextBox programmatically in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add floating label to TextBox programmatically 
documentation: ug
domainurl: ##DomainURL##
---

# Add Floating Label to TextBox Programmatically in Angular

The `Floating Label TextBox` floats label above the TextBox after focusing, or entering a value in the TextBox.

Floating label supports the types of actions as given below.

Type     | Description
------------ | -------------
  Auto       | The floating label will float above the input after focusing, or entering a value in the input.
  Always     | The floating label will always float above the input.
  Never      | By default, never float the label in the input when the placeholder is available.

* Import the `Input` modules from `ej2-inputs` library as shown in below.

  ```typescript
  import {Input} from '@syncfusion/ej2-inputs';
  ```

* Pass the `HTML Input` element and `floatLabelType` property as `Auto` to the `createInput` method.

* Set the `placeholder` value to the input element via `element attribute` or pass the parameter to the `createInput` method.

 The `watermark label` will be updated based on the specified `placeholder` value of the `Floating Label TextBox`.

* You can add the `icons` on the input by passing `buttons` property value with the class name `e-input-group-icon` as parameter to the `createInput` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs4" %}
