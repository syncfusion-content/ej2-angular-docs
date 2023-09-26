---
layout: post
title: Position in Angular Predefined dialogs component | Syncfusion
description: Learn here all about Position in Syncfusion Angular Predefined dialogs component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Position 
documentation: ug
domainurl: ##DomainURL##
---

# Position in Angular Predefined dialogs component

Customize the dialog position by using the `position` property. The position can be represented with specific `X` and `Y` values.

* The `PositionDataModel.X` can be configured with a left, center, right, or offset value. By default, the value is set as `center`.
* The `PositionDataModel.Y` can be configured with a top, center, bottom, or offset value. By default, the value is set as `center`.

## Alert position

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/alert-position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/predefined-dialogs/alert-position-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/alert-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/alert-position-cs1" %}

## Confirm position

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/confirm-position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/predefined-dialogs/confirm-position-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/confirm-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/confirm-position-cs1" %}

## Prompt position

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/prompt-position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/predefined-dialogs/prompt-position-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/prompt-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/prompt-position-cs1" %}
