---
layout: post
title: Style and appearance in Angular TextArea component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion Angular TextArea component of Syncfusion Essential JS 2 and more.
control: Style and Appearance
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Sizing in Angular TextArea Component

Adjust the size of the TextArea by applying specific CSS classes:

| Property  | Description |
| -- | -- |
| Small  | Add the `e-small` class to render a smaller-sized TextArea. |
| Bigger | Add the `e-bigger` class to render a larger-sized TextArea. |

Apply these classes to customize the TextArea appearance to match your application's design requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs1" %}

## Filled and Outline Mode

Enable filled and outline modes in the TextArea component by adding the `e-outline` or `e-filled` class to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textarea/#cssClass) property. These classes allow you to choose between filled or outline appearance, aligning with your application's design.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs2" %}

>Note: Filled and Outline theme customization are available only with Material themes.

## Custom Styling with CssClass Property in TextArea

The `cssClass` property provides a powerful way to apply custom styling to the TextArea component. Use this property to apply custom CSS classes to the textarea container, enabling control over styling properties such as color, padding, margins, borders, and more.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs3" %}

## Setting the Disabled State in TextArea

Disable the TextArea using the [enabled](https://ej2.syncfusion.com/angular/documentation/api/textarea/#enabled) property. Set this property to `false` to disable the textarea and prevent user interaction.

```typescript

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                  <ejs-textarea id='default' enabled="false"></ejs-textarea>
                </div>`
})

export class AppComponent { }

```

## Set the Read-Only TextArea

Make the TextArea read-only using the [readonly](https://ej2.syncfusion.com/angular/documentation/api/textarea/#readonly) property. Set this property to `true` to prevent users from editing the textarea content.

```typescript

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                  <ejs-textarea id='default' readonly="true" value="Readonly"></ejs-textarea>
                </div>`
})

export class AppComponent { }

```

## Set the Rounded Corner in TextArea

Render the TextArea with rounded corners by adding the `e-corner` class to the textarea container.

> Rounded corners are visible only in box model textarea components.

```typescript

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                  <div class="e-input-group e-corner">
                      <textarea class="e-input" placeholder="Enter your comments"></textarea>
                  </div>
                </div>`
})

export class AppComponent { }

```

## Static Clear Button in TextArea

Display a static clear button in the TextArea component by adding the `e-static-clear` class to the `cssClass` property. This class ensures the clear button remains visible at all times, allowing users to easily clear the textarea content without focusing on the control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs4" %}

## Customize the TextArea Background Color and Text Color

Customize TextArea styles such as background color, text color, and border color by overriding the default styles to achieve your desired appearance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs5" %}

## Change the Floating Label Color of the TextArea

Change the floating label color for both `success` and `warning` validation states by applying the following CSS styles.

```css

    /* For Success state */
    .e-float-input.e-success label.e-float-text,
    .e-float-input.e-success input:focus ~ label.e-float-text,
    .e-float-input.e-success input:valid ~ label.e-float-text {
      color: #22b24b;
    }

    /* For Warning state */
    .e-float-input.e-warning label.e-float-text,
    .e-float-input.e-warning input:focus ~ label.e-float-text,
    .e-float-input.e-warning input:valid ~ label.e-float-text {
      color: #ffca1c;
    }

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs6" %}

## Adding mandatory asterisk to placeholder

To add a mandatory asterisk (*) to the placeholder in the TextArea component, you can utilize CSS to append the asterisk after the placeholder text.

```css

/* To add asterick to float label in textarea */ 
.e-float-input.e-control-wrapper .e-float-text::after {
  content: '*'; /* Add asterisk after the placeholder */
  color: red; /* Customize asterisk color */
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs7" %}
