---
layout: post
title: Keyboard interaction in Angular Datepicker component | Syncfusion
description: Learn here all about Keyboard interaction in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Keyboard interaction 
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard interaction in Angular Datepicker component

You can use the following keys to interact with the DatePicker.
The component implements the keyboard navigation support by following the  [WAI-ARIA practices](http://www.w3.org/WAI/PF/aria-practices).

It supports the below list of shortcut keys.

Input Element

| **Press** | **To do this** |
| --- | --- |
| Alt +  Down Arrow | Opens the popup. |
| Alt +  Up Arrow | Closes the popup.|
| Esc | closes the popup. |

> To know more about Calendar navigation keys refer the Calendar [keyboard Interaction](http://ej2.syncfusion.com/staging/ej2/documentation/calendar/keyboard-interaction) section.

To focus the Calendar component use the `alt+t` keys.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs11" %}