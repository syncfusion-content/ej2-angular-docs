---
layout: post
title: Customization in Angular Predefined dialogs component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Predefined dialogs component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Predefined dialogs component

Customize predefined dialog buttons using the following properties:
* `okButton` - Customize the OK button text.
* `cancelButton` - Customize the Cancel button text.

The following code samples demonstrate customizing action buttons for alert, confirm, and prompt dialogs.

For alert dialogs, customize the button content as `Dismiss` using the `text` property.

For confirm dialogs, customize button content as `Yes` and `No` using the `text` property, and customize button icons using the `icon` property.

For prompt dialogs, customize button content as `Connect` and `Close` using the `text` property.

## Alert action button

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/alert-action-btn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/alert-action-btn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/alert-action-btn-cs1" %}

## Confirm action buttons

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/confirm-action-btn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/confirm-action-btn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/confirm-action-btn-cs1" %}

## Prompt action buttons

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/prompt-action-btn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/prompt-action-btn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/prompt-action-btn-cs1" %}

## Show or hide dialog close button

When rendering predefined dialogs through utility methods, close the dialog using the following methods. The default values for `closeOnEscape` and `showCloseIcon` are `false`.

* Press the Esc key if the [closeOnEscape](https://ej2.syncfusion.com/angular/documentation/api/dialog/#closeonescape) property is enabled.
* Click the close button if the [showCloseIcon](https://ej2.syncfusion.com/angular/documentation/api/dialog/#showcloseicon) property is enabled.

Manually close dialogs by creating an instance and calling the [hide](https://ej2.syncfusion.com/angular/documentation/api/dialog/#hide) method.

The following code samples demonstrate different ways to close utility dialogs for alert, confirm, and prompt.

## Alert dialog close button

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/alert-close-btn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/alert-close-btn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/alert-close-btn-cs1" %}

## Confirm dialog close button

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/confirm-close-btn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/confirm-close-btn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/confirm-close-btn-cs1" %}

## Prompt dialog close button

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/prompt-close-btn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/prompt-close-btn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/prompt-close-btn-cs1" %}

## Customize dialog content

Load custom content in predefined dialogs using the `content` property.

The following code customizes the dialog content to render a custom TextBox component inside the prompt dialog to get the username from the user.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/custom-dialog-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/custom-dialog-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/custom-dialog-content-cs1" %}
