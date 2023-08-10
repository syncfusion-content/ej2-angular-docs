---
layout: post
title: Spinner and progress in Angular Progress button component | Syncfusion
description: Learn here all about Spinner and progress in Syncfusion Angular Progress button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Spinner and progress 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD002 MD022 -->

## Spinner and progress in Angular Progress button component

### Change spinner position

Spinner position can be changed by modifying the [`position`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/spinSettingsModel#position) property of [`spinSettingsModel`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/spinSettingsModel). By default, the spinner is positioned at the left of the ProgressButton. You can position it at the `left`, `right`, `top`, `bottom`, or `center` of the text content.

### Change spinner size

Spinner size can be changed by modifying the [`width`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/spinSettingsModel#width) property of [`spinSettingsModel`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/spinSettingsModel). In this demo, the `width` is set to `20` to change the spinner size.

### Spinner template

You can use custom spinner by specifying the [`template`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/spinSettingsModel#template) property of [`spinSettingsModel`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/spinSettingsModel) with custom styles.

The following sample demonstrates the above functionalities of the spinner.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progress-button/default-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs8" %}

## Progress

### Content animation

The [`content`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#content) of the ProgressButton can be animated during progress using the [`effect`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/animationSettingsModel#effect) property of [`animationSettingsModel`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/animationSettingsModel). You can also set custom duration and timing function using the [`duration`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/animationSettingsModel#duration) and [`easing`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/animationSettingsModel#easing) properties. The possible `effect` values are `None`, `SlideLeft`, `SlideRight`, `SlideUp`, `SlideDown`, `ZoomIn`, and `ZoomOut`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progress-button/default-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs9" %}

### Change step of the ProgressButton

The progress can be visualized at the specified interval by changing the [`step`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/progressEventArgs#step) property in the [`begin`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#begin) event of the ProgressButton. In this demo, the `step` property is set to `20` to show progress at every 20% increment.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progress-button/default-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs10" %}

> The class `e-hide-spinner` hides the spinner in the ProgressButton, For more information, see [hide spinner](./how-to/hide-spinner) section.

### Change progress dynamically

The progress can be changed dynamically by modifying the [`percent`](https://ej2.syncfusion.com/angular/documentation/api/progress-button/progressEventArgs#percent) property in the ProgressButton events. In this demo, on 40% completion of progress, the `percent` property is set to `90` to show dynamic change of the progress.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progress-button/default-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs11" %}

> The method [`dataBind`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#databind) applies the property changes immediately to the component.

### Start and stop methods

You can pause and resume the progress using the [`stop`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#start) and [`start`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#stop) methods, respectively. In this demo, clicking the ProgressButton will pause and resume the progress.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progress-button/default-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs12" %}

## See Also

* [How to hide spinner](./how-to/hide-spinner)
* [Customize ProgressButton using cssClass](how-to/customize-progress-using-cssclass)