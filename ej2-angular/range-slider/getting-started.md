---
layout: post
title: Getting started with Angular Range Slider component | Syncfusion
description: Learn how to add and configure the Angular Range Slider component from Syncfusion Essential JS 2, including setup, configuration, and basic usage.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Range Slider component

The Range Slider is available in the `@syncfusion/ej2-angular-inputs` package. Use this package to render the Slider component.

To get started quickly with the Angular Range Slider, watch this video:

{% youtube "https://www.youtube.com/watch?v=_PInU4vTumk" %}

## Setting up Angular project

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular projects.

Install the CLI globally (optional):

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-app
```

By default, the CLI creates a project that uses plain CSS. To use SCSS, pass the `--style=scss` argument when creating the project.

Example:

```bash
ng new syncfusion-angular-app --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Range Slider package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from [npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>= 20.2.36) have moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To install the package, use the following command.

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version, as shown below.

```bash
@syncfusion/ej2-angular-inputs:"32.1.19-ngcc"
```

N> If the ngcc tag is not specified while installing the package, the Ivy package will be installed, and a warning may be displayed.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Slider Component

Use the following snippet in the `src/app/app.ts` file to import the MaskedTextBox component.

```typescript
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { Component } from '@angular/core';

@Component({
  imports: [SliderModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div id='container'>
        <div class='wrap'>
            <ejs-slider id='slider' [value]=30></ejs-slider>
        </div>
    </div>`
})

export class App { }
```

## Adding Slider CSS reference

* Add the Slider component styles in `styles.css` as shown below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material.css';
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import 'node_modules/@syncfusion/ej2-base/styles/material.css';
@import 'node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import 'node_modules/@syncfusion/ej2-popups/styles/material.css';
@import 'node_modules/@syncfusion/ej2-angular-inputs/styles/material.css';
```

## Running the application

After configuring the Slider, run the application with:

```bash
ng serve
```

The following shows a basic `Slider` example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-01-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-01-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-01-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-01-cs1" %}

## Types

The Slider supports the following types:

| **Types** | **Usage** |
| --- | --- |
| Default | Select a single value. |
| MinRange | Shows a selection from the start value to the current value. |
| Range | Select a range of values; shows the selection between handles. |

> Both Default and MinRange types select a single value. In MinRange, the selection is shown from the start value to the current handle position. The Range type uses two handles to select a range, and the selection is shown between them.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-02-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-02-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-02-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-02-cs1" %}

## Customization

### Orientation

Display the Slider in horizontal or vertical orientation. By default, it renders horizontally.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-03-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-03-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-03-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-03-cs1" %}

### Tooltip

The Slider displays a tooltip to indicate the current value when clicking the bar or dragging the handle. Customize tooltip position using the `placement` property. Control when the tooltip appears (hover, focus, or click) and whether it remains visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-04-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-04-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-04-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-04-cs1" %}

### Buttons

Change the Slider value using the Increase and Decrease buttons. In a Range Slider, the first handle value changes by default when clicking the buttons. Move focus to a handle to change that handle’s value.

> After enabling slider buttons, pressing the Tab key moves focus to the handle, not the button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-05-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-05-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-05-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-05-cs1" %}

## See Also

[Slider Types](#types)

[Slider Formatting](./format)

[Orientation Slider](#orientation)

[Ticks in Slider](./ticks)

[Tooltip in Slider](#tooltip)
