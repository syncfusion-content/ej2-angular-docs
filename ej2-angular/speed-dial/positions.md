---
layout: post
title: Positions in Angular Speed dial component | Syncfusion
description: Learn here all about Positions in Syncfusion Angular Speed dial component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Positions 
documentation: ug
domainurl: ##DomainURL##
---

# Positions in Angular Speed dial component

The Speed dial control can be positioned anywhere on the [`target`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#target) using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#position) property. If the `target` is not defined, then Speed Dial is positioned based on the browser viewport.

The position values of Speed Dial are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/position-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/position-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/position-cs1" %}

## Opens items on hover

You can open the Speed Dial action items on mouse hover by setting the [`opensOnHover`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#opensonhover) property.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
    <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' [items]='items' [opensOnHover]= 'true'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
  ];
}
```

## Programmatically show/hide Speed Dial items

You can open/close the Speed Dial action items programmatically using [`show`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#show) and [`hide`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#hide) methods.

Below example demonstrates open/close action items on button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/position-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/position-cs2/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/position-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/position-cs2" %}

## Programmatically refresh the position

You can refresh the position of the Speed Dial using [`refreshPosition`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/#refreshposition) method when the `target`position is changed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/position-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/position-cs3/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/position-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/position-cs3" %}
