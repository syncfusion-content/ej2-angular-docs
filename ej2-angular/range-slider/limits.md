---
layout: post
title: Limits in Angular Range slider component | Syncfusion
description: Learn here all about Limits in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Limits 
documentation: ug
domainurl: ##DomainURL##
---

# Limits in Angular Range slider component

The slider limits restrict the slider thumb between a particular range. This is used if higher or lower value affects the process or product where the slider is being used.

The following are the six options in the slider's limits object. Each API in the limits object is optional.

* ``enabled``: Enables the limits in the Slider.
* ``minStart``: Sets the minimum limit for the first handle.
* ``minEnd``: Sets the maximum limit for the first handle.
* ``maxStart``: Sets the minimum limit for the second handle.
* ``maxEnd``: Sets the maximum limit for the second handle.
* ``startHandleFixed``: Locks the first handle.
* ``endHandleFixed``: Locks the second handle.

## Default and MinRange Slider limits

There is only one handle in the Default and MinRange Slider, so ``minStart``, ``minEnd``, and ``startHandleFixed`` options can be used.
When the limits are enabled in the Slider, the limited area becomes darken. So you can differentiate the allowed and restricted area.
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

In the range slider, both handles can be restricted and locked from the limit's object. In this sample, the first handle is limited between 10 and 40, and the second handle is limited between 60 and 90.

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

The movement of slider handles can be locked by enabling the ``startHandleFixed`` and ``endHandleFixed`` properties in the limit's object.
In this sample, the movement of both slider handles has been locked.

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
