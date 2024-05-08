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

The dialog component provides built-in utility functions to render the alert and confirm dialogs with the minimal code.
The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of dialog like the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#header) property.|
| content | Specifies the value that can be displayed in dialog's content area like the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#content) property. |
| isModal | Specifies the Boolean value whether the dialog can be displayed as modal or non-modal. For more details, refer to the [`isModal`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#ismodal) property.|
| position | Specifies the value where the alert or confirm dialog is positioned within the document. For more details, refer to the [`position`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#position) property { X: ‘center’, Y: ‘center’}|
| okButton | Configures the `OK button` that contains button properties with the click events. `okButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for OK button click', text: 'Yes' // <-- Default value is 'OK' }`|
| cancelButton | Configures the `Cancel button` that contains button properties with the click events. `cancelButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for ‘Cancel’ button click', text: 'No' // <-- Default value is 'Cancel'}`|
|isDraggable|Specifies the value whether the alert or confirm dialog can be dragged by the user.|
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
|closeOnEscape|When set to true, you can close the dialog by pressing ESC key.|
| animationSettings |Specifies the animation settings of the dialog component. |
| cssClass |Specifies the CSS class name that can be appended to the dialog. |
| zIndex |Specifies the order of the dialog, that is displayed in front or behind of another component. |
| open |Event which is triggered after the dialog is opened. |
| Close |Event which is triggered after the dialog is closed. |

## Alert dialog

An alert dialog box is used to display warning like messages to the users. Use the following code to render a simple alert dialog in an application.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-alert-cs2" %}

### Render an alert dialog with options

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-alert1-cs2" %}

## Confirm dialog

A confirm dialog displays a specified message along with ‘OK’ and ‘Cancel’ button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-confirm-cs2" %}

### Render a confirmation dialog with options

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-confirm1-cs2" %}

## Close utility dialog

When rendering an Alert and Confirmation dialog through utility methods, You can close the dialog using the following ways.

* By pressing the escape key if the [closeOnEscape](https://ej2.syncfusion.com/angular/documentation/api/dialog/#closeonescape) property is enabled.
* By clicking the close button if the [showCloseIcon](https://ej2.syncfusion.com/angular/documentation/api/dialog/#showcloseicon) property is enabled.

You can also manually close the Dialogs by creating an instance to the dialog and call the [hide](https://ej2.syncfusion.com/angular/documentation/api/dialog/#hide) method.

Below sample demonstrates the different ways of hiding the utility dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-utility-confirm1-cs3" %}