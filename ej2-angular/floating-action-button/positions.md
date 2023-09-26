---
layout: post
title: Positions in Angular Floating action button component | Syncfusion
description: Learn here all about Positions in Syncfusion Angular Floating action button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Positions 
documentation: ug
domainurl: ##DomainURL##
---

# Positions in Angular Floating action button component

The floating action button can be positioned anywhere on the [`target`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#target) using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#position) property. If the `target` is not defined, then FAB is positioned based on the browser viewport.

The position values of Floating Action Button are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Floating Action Button in BottomLeft position. -->
                <button ejs-fab id='fab' content='Add' position='BottomLeft'></button>`
})

export class AppComponent { }
```

Below example demonstrates different supported positions of FAB.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/floating-action-button/all-positions-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/floating-action-button/all-positions-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/floating-action-button/all-positions-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/all-positions-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/floating-action-button/all-positions-cs1" %}

## Custom position

You can define the custom position of the Floating Action Button by override the `top`, `left`, `right`, and `bottom` CSS properties using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#cssclass). For detailed information, refer `index.css` file below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/floating-action-button/position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/floating-action-button/position-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/floating-action-button/position-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/position-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/floating-action-button/position-cs1" %}