---
layout: post
title: Render a dialog using utility functions in Angular Dialog component | Syncfusion
description: Learn here all about Render a dialog using utility functions in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render a dialog using utility functions 
documentation: ug
domainurl: ##DomainURL##
---

# Render a dialog using utility functions in Angular Dialog component

The dialog component provides built-in utility functions to render alert and confirm dialogs with minimal code.
The following options are used as arguments when calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of the dialog, similar to the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#header) property. |
| content | Specifies the content to display in the dialog, similar to the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#content) property. |
| isModal | Specifies whether the dialog displays as modal or non-modal. For more details, refer to the [`isModal`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#ismodal) property. |
| position | Specifies the position of the alert or confirm dialog within the document. For more details, refer to the [`position`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#position) property, e.g., `{ X: 'center', Y: 'center' }`. |
| okButton | Configures the OK button with button properties and click events. Example: `okButton: { icon: 'icon-class', cssClass: 'custom-class', click: 'handler', text: 'Yes' }` (default text is 'OK'). |
| cancelButton | Configures the Cancel button with button properties and click events. Example: `cancelButton: { icon: 'icon-class', cssClass: 'custom-class', click: 'handler', text: 'No' }` (default text is 'Cancel'). |
| isDraggable | Specifies whether the alert or confirm dialog can be dragged by the user. |
| showCloseIcon | When set to `true`, displays the close icon in the dialog component. |
| closeOnEscape | When set to `true`, closes the dialog by pressing the Esc key. |
| animationSettings | Specifies the animation settings for the dialog component. |
| cssClass | Specifies the CSS class name to append to the dialog. |
| zIndex | Specifies the z-index order of the dialog for layering in front of or behind other components. |
| open | Event triggered after the dialog opens. |
| close | Event triggered after the dialog closes. |

## Alert dialog

An alert dialog displays warning messages to users. Use the following code to render a simple alert dialog in an application.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-alert-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-alert-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-alert-cs1" %}

### Render an alert dialog with options

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-alert1-cs1" %}

## Confirm dialog

A confirm dialog displays a specified message along with OK and Cancel buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-confirm-cs1" %}

### Render a confirmation dialog with options

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-confirm1-cs1" %}