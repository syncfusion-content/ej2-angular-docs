---
layout: post
title: Position in Angular Toast component | Syncfusion
description: Learn here all about Position in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Position 
documentation: ug
domainurl: ##DomainURL##
---

# Position in Angular Toast component

Toast position can be updated based on predefined positions or user customizable positions. Predefined position combinations are updated in [`X`](https://ej2.syncfusion.com/angular/documentation/api/toast/toastPositionModel/#x) and [`Y`](https://ej2.syncfusion.com/angular/documentation/api/toast/toastPositionModel/#y) position properties.

## Predefined

`X` Positions

* Left
* Center
* Right

`Y` Positions

* Top
* Bottom

> In the case of multiple Toast display, new Toast position will not update on dynamic change of property values, until the old Toast messages removed.
> Toast occupies full width when we set width as '100%', so X positions won't affect changes when '100%' width.

## Custom

Custom `X` and `Y` Position can be given as pixels/numbers/percentage. The number value is considered as pixels. based value top and left value updated in the toast.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs18/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs18" %}

## See Also

* [Render toast with different positions](./how-to/show-multiple-toasts-in-various-positions/)