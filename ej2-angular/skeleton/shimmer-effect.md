---
layout: post
title: Shimmer effect in Angular Skeleton component | Syncfusion
description: Learn here all about Shimmer effect in Syncfusion Angular Skeleton component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Shimmer effect 
documentation: ug
domainurl: ##DomainURL##
---

# Shimmer effect in Angular Skeleton component

You can use the [`shimmerEffect`](https://ej2.syncfusion.com/angular/documentation/api/skeleton/#shimmereffect) property to change animation effect in the skeleton control. Skeleton supports `Wave`, `Pulse` and `Fade` effects and by default, the `shimmerEffect` is set to `Wave` effect.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-skeleton shape= 'Circle' width= "60px" shimmerEffect= 'Pulse'></ejs-skeleton>`
})

export class AppComponent { }
```

Below example demonstrates a list with pulse effect skeleton.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/skeleton/effect-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/skeleton/effect-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/skeleton/effect-cs1/app/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/skeleton/effect-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/skeleton/effect-cs1" %}