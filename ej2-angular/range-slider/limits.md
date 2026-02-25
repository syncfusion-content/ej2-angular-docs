---
layout: post
title: Limits in Angular Range Slider component | Syncfusion
description: Learn here all about Limits in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# Limits in Angular Range Slider component

The [`limits`](https://ej2.syncfusion.com/angular/documentation/api/slider/#limits) property restricts slider thumb movement within specified boundaries. Use limits when certain value ranges would negatively impact your process or product, or when you need to lock specific handles in place.

The following are the six options in the slider's limits object. Each API in the limits object is optional.

* [`enabled`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#enabled): Enables the limits in the Slider.
* [`minStart`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#minstart): Sets the minimum limit for the first handle.
* [`minEnd`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#minend): Sets the maximum limit for the first handle.
* [`maxStart`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#maxstart): Sets the minimum limit for the second handle.
* [`maxEnd`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#maxend): Sets the maximum limit for the second handle.
* [`startHandleFixed`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#starthandlefixed): Locks the first handle.
* [`endHandleFixed`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#endhandlefixed): Locks the second handle.

## Default and MinRange Slider limits

The Default and MinRange Slider types have a single handle, so only [`minStart`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#minstart), [`minEnd`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#minend), and [`startHandleFixed`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#starthandlefixed) options apply. When limits are enabled, the restricted area appears darkened, making the allowed and restricted zones visually distinct.

Refer to the following snippet to enable the limits in the Slider.

```typescript

    ......

    limits: { enabled: true, minStart: 10, minEnd: 40 }

    ......

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/default-limit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/default-limit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/default-limit-cs1" %}

## Range Slider limits

In the Range Slider, both handles can be restricted and locked from the limit's object. In this sample, the first handle is limited between 10 and 40, and the second handle is limited between 60 and 90.

```typescript

    ......

    limits: { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 }

    ......

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/range-limit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/range-limit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/range-limit-cs1" %}

## Handle lock

Lock slider handle movement by enabling the [`startHandleFixed`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#starthandlefixed) and [`endHandleFixed`](https://ej2.syncfusion.com/angular/documentation/api/slider/limitDataModel/#endhandlefixed) properties. The following example locks both slider handles to prevent value changes.

```typescript
    ......

    limits: { enabled: true, startHandleFixed: true, endHandleFixed: true }

    ......

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/handle-lock-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/handle-lock-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/handle-lock-cs1" %}
