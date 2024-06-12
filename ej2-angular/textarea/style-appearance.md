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

you can adjust the size of the TextArea by applying specific classes:

| Property  | Description |
| -- | -- |
| Small  | Add the `e-small` class to the input element or its container to render a smaller-sized TextArea. |
| Bigger | Add the `e-bigger` class to the input element or its container to render a larger-sized TextArea. |

By applying these classes, users can easily customize the appearance of the TextArea to better fit their application's design requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs1" %}

## Filled and outline mode

The Filled and Outline modes can be enabled in the TextArea component by adding the `e-outline` or `e-filled` class to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textarea/#cssClass) API.
By adding these classes, users can choose between a filled or outline appearance for the TextArea component, aligning with the design aesthetics of their application.

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

## Custom styling with cssClass API in TextArea

The `cssClass` Api provides a powerful way to apply custom styling to the TextArea component, allowing users to customize its appearance and layout according to their design requirements.

By utilizing the `cssClass` API, users can apply custom CSS classes to the TextArea component's container, enabling control over its styling properties such as color, padding, margins, borders, and more.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs3" %}

## Setting the disabled state in TextArea

To disable the TextArea, you can utilize the [enabled](https://ej2.syncfusion.com/angular/documentation/api/textarea/#enabled) property. When set to `false`, the TextArea becomes disabled, preventing user interaction.

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

## Set the readonly TextArea

To make the TextArea read-only , you can use the [readonly](https://ej2.syncfusion.com/angular/documentation/api/textarea/#readonly) property. When set to `true`, it prevents users from editing the content of the TextArea.

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

## Set the rounded corner in TextArea

Render the TextArea with `rounded corner` by adding the `e-corner` class to the input parent element.

>This rounded corner is visible only in box model input component

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

## Static clear button in TextArea

To display a static clear button in the TextArea component, you can add the `e-static-clear` class to the `cssClass` property. This class ensures that the clear button remains visible at all times, providing users with the ability to easily clear the TextArea content without needing to focus on the control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs4" %}

## Customize the TextArea background color and text color

You can customize the TextArea styles such as background-color, text-color and border-color by overriding its default styles to achieve the desired appearance for the TextArea.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/style-appearance-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/style-appearance-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/style-appearance-cs5" %}

## Change the floating label color of the TextArea

You can change the floating label color of the TextArea for both `success` and `warning` validation states by applying the following CSS styles.

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
