---
layout: post
title: Groups in Angular TextBox component | Syncfusion
description: Learn here all about Groups in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Groups 
documentation: ug
domainurl: ##DomainURL##
---

# Groups in Angular TextBox component

The following section explains you the steps required to create TextBox with `icon` and `floating label`.

Floating label:

To add the Floating label by using [FloatLabelType](https://ej2.syncfusion.com/angular/documentation/api/textbox/#floatlabeltype) property. Specifies the floating label behavior of the TextBox that the placeholder text floats above the TextBox based on the below values. Possible values are:

* Never - The placeholder text should not be float ever.
* Always - The placeholder text floats above the TextBox always.
* Auto - The placeholder text floats above the TextBox while focusing or enter a value in TextBox.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: ` <ejs-textbox placeholder="Enter Name" floatLabelType="Auto"></ejs-textbox>`
})

export class AppComponent { }
```

And refer to the following sections to add the icons to the TextBox.

## With icon and floating label

Create an icon in the TextBox using the [addIcon](https://ej2.syncfusion.com/angular/documentation/api/textbox/#addicon) method and enable the float label using the [FloatLabelType](https://ej2.syncfusion.com/angular/documentation/api/textbox/#floatlabeltype) property. The user can place the icon on either side of the TextBox by specifying "append" or "prepend" in the [addIcon](https://ej2.syncfusion.com/angular/documentation/api/textbox/#addicon) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs1" %}

## With clear button and floating label

The clear button is added to the input for clearing the value given in the TextBox.
It is shown only when the input field has a value, otherwise not shown.

You can add the clear button to the TextBox by using [showClearButton](https://ej2.syncfusion.com/angular/documentation/api/textbox/#showclearbutton) API in TextBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/textbox-component-clearicons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/textbox-component-clearicons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/textbox-component-clearicons-cs1" %}

## Multi-line Input with Floating Label

To create a multiline input using the [multiline](https://ej2.syncfusion.com/angular/documentation/api/textbox/#multiline) API, it will act as a TextArea component. You can also resize the rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs3/src/app.component.ts %}
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
