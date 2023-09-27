---
layout: post
title: Groups in Angular Textbox component | Syncfusion
description: Learn here all about Groups in Syncfusion Angular Textbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Groups 
documentation: ug
domainurl: ##DomainURL##
---

# Groups in Angular Textbox component

The following section explains you the steps required to create TextBox with `icon` and `floating label`.

TextBox:

* Create a parent div element with the class `e-input-group`

* Place input element with the class `e-input` inside the parent div element.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class="e-float-input e-input-group">
                <input class="e-input" type="text" placeholder="Enter Name" />
                </div>
               </div>`
})

export class AppComponent { }
```

Floating label:

* Add the `e-float-input` class to the parent div element.

* Remove the e-input class and add `required` attribute to the input element.

* Place the span element with class `e-float-line` after the input element.

* Place the label element with class `e-float-text` after the above created span element.
When you focus or filled with value in the TextBox, the label floats above the TextBox.

> Creating the Floating label TextBox, you have to set the `required` attribute to the Input element to achieve the floating label functionality which is used for validating the value existence in TextBox.
If you want to render the Floating label TextBox without `required` attribute then refer to the [Floating Label without required attribute](#floating-Label-without-required-attribute) section.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                  <div class="e-float-input e-input-group">
                    <input type="text" required/>
                    <span class="e-float-line"></span>
                    <label class="e-float-text">Enter Name </label>
                  </div>
               </div>`
})

export class AppComponent { }
```

And refer to the following sections to add the icons to the TextBox.

## With icon and floating label

Create an icon element as a span with the class `e-input-group-icon`, and the user can place the icon in either side of TextBox by adding the created icon element before/after the input.

For the floating label enabled TextBox add the icon element as first or last element inside the TextBox wrapper, and based on the element position it will act as prefix or suffix icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/textbox/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs1" %}

> To place the icon on left side of the TextBox, create a div element with the class `e-input-in-wrap` as wrapper to the input element and place the `floating line`, `floating text`, and right side icon element within it.
Add the `e-float-icon-left` class to the TextBox container element.

## With clear button and floating label

The clear button is added to the input for clearing the value given in the TextBox.
It is shown only when the input field has a value, otherwise not shown.

You can add the clear button to the TextBox by `showClearButton` API in textbox

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/textbox-component-clearicons-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/textbox/textbox-component-clearicons-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/textbox-component-clearicons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/textbox-component-clearicons-cs1" %}

## Floating Label without required attribute

You can render the `Floating label TextBox` without `required` attribute by manually float the label above of the TextBox using `ngClass`.
You can manually float the label above of the TextBox by adding the below list of classes to the floating label element. The classes are:

Class Name        | Description
------------------| -------------
  e-label-top     | Floats the label above of the TextBox.
  e-label-bottom  | Label to be placed as placeholder for the TextBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/textbox/getting-started-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs2" %}

## Multi-line Input with Floating Label

Add the HTML textarea element with the `e-input` class to create default multi-line input.

Add the floating label support to the `multi-line input` by creating the floating label structure as defined in the initial section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/textbox/getting-started-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs3" %}

## See Also

* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)
* [Change the floating label color of the TextBox](./how-to/change-the-floating-label-color-of-the-textbox)
* [Change the color of the TextBox based on its value](./how-to/change-the-color-of-the-textbox-based-on-its-value)
