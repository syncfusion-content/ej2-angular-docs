---
layout: post
title: Shapes in Angular Skeleton component | Syncfusion
description: Learn here all about Shapes in Syncfusion Angular Skeleton component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Shapes 
documentation: ug
domainurl: ##DomainURL##
---

# Shapes in Angular Skeleton component

The Skeleton control support various built-in shape variants to design layout of the page. You can use the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/skeleton/#shape) property to create a preview of any layout.

The Skeleton component supports the following content shapes:

## Circle skeleton shape

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-skeleton shape= 'Circle' width= "48px"></ejs-skeleton>`
})

export class AppComponent { }
```

## Square skeleton shape

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-skeleton shape= 'Square' width= "48px"></ejs-skeleton>`
})

export class AppComponent { }
```

## Rectangle skeleton shape

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-skeleton shape= 'Rectangle' width= "50px" height="25px"></ejs-skeleton>`
})

export class AppComponent { }
```

## Text skeleton shape

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-skeleton shape= 'Text' width= "50%" height="15px"></ejs-skeleton>`
})

export class AppComponent { }
```

Below example demonstrates the above functionalities of a Skeleton component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/skeleton/shapes-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/skeleton/shapes-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/skeleton/shapes-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/skeleton/shapes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/skeleton/shapes-cs1" %}