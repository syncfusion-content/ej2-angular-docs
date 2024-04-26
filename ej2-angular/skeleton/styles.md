---
layout: post
title: Styles in Angular Skeleton component | Syncfusion
description: Learn here all about Styles in Syncfusion Angular Skeleton component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Styles 
documentation: ug
domainurl: ##DomainURL##
---

# Styles in Angular Skeleton component

You can customize skeleton control in the below ways.

## cssClass

You can customize the style of a Skeleton control by using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/skeleton/#cssclass). The appearance of Angular Skeleton can be customized by changing the wave color, background color, width, and height. For detailed information, refer `index.css` file below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/skeleton/styles-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/skeleton/styles-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/skeleton/styles-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/skeleton/styles-cs1" %}

## Visible

You can use the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/skeleton/#visible) property which defines the visible state of Skeleton.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-skeleton shape= 'Circle' width= "60px" [visible]='false'></ejs-skeleton>`
})

export class AppComponent { }
```