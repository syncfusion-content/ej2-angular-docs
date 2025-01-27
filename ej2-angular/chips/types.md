---
layout: post
title: Types in Angular Chips component | Syncfusion
description: Learn here all about Types in Syncfusion Angular Chips component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Types 
documentation: ug
domainurl: ##DomainURL##
---

# Types in Angular Chips component

The Chips component has the following types:

* Input Chips
* Choice Chips
* Filter Chips
* Action Chips

## Input Chips

Input Chips holds information in compact form. It allows users to convert their input into chips.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/types/input-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs1" %}

## Choice Chips

Choice Chips allows users to select a single Chips from the set of ChipList/ChipCollection. It can be enabled by setting the [`selection`](https://ej2.syncfusion.com/angular/documentation/api/chips/#selection) property to `Single`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/types/input-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs2" %}

## Filter Chips

Filter Chips allows you to select multiple chips from the set of ChipList/ChipCollection. It can be enabled by setting the [`selection`](https://ej2.syncfusion.com/angular/documentation/api/chips/#selection) property to `Multiple`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/types/input-cs3/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs3" %}

## Action Chips

The Action Chips triggers events like click or delete, which helps perform actions based on the event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/types/input-cs4/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs4" %}

### Deletable Chips

Deletable Chips allows users to delete a Chips from ChipList/ChipCollection. It can be enabled by setting the [`enableDelete`](https://ej2.syncfusion.com/angular/documentation/api/chips/#enabledelete) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/types/input-cs5/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs5" %}