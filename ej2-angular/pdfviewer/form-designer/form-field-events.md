---
layout: post
title: Form Field Events | Syncfusion
description: Learn here all about different form field in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form Field Events 
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field events

The PDF Viewer control provides the support to different Form Field events. The Form Field events supported by the PDF Viewer Control are:

    * formFieldAdd
    * formFieldClick
    * formFieldDoubleClick
    * formFieldFocusOut
    * formFieldMouseLeave
    * formFieldMouseOver
    * formFieldMove
    * formFieldPropertiesChange
    * formFieldRemove
    * formFieldResize
    * formFieldSelect
    * formFieldUnselect
    * validateFormFields

## formFieldAdd event

The `formFieldAdd` event is triggered when a new form field is added, either programmatically or through user interaction. The event arguments provide the necessary information about the form field addition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/addformfieldevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/addformfieldevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldClick event

The `formFieldClick` event is triggered when a form field is clicked. The event arguments provide the necessary information about the form field click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldclickevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldclickevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldDoubleClick event

The `formFieldDoubleClick` event is triggered when a form field is double-clicked. The event arguments provide the necessary information about the form field double-click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfielddoubleclickevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfielddoubleclickevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldFocusOut event

The `formFieldFocusOut` event is triggered when a form field loses focus. The event arguments provide the necessary information about the form field focus out event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldfocusoutevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldfocusoutevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseLeave event

The `formFieldMouseLeave` event is triggered when the mouse leaves a form field. The event arguments provide the necessary information about the form field mouse leave event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldmouseleaveevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldmouseleaveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseOver event

The `formFieldMouseOver` event is triggered when the mouse hovers over a form field. The event arguments provide the necessary information about the form field mouse over event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldmouseoverevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldmouseoverevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMove event

The `formFieldMove` event is triggered when the mouse moves inside a form field. The event arguments provide the necessary information about the form field mouse move event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldmousemoveevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldmousemoveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldPropertiesChange event

The `formFieldPropertiesChange` event is triggered when the properties of a form field are changed. The event arguments provide the necessary information about which property of the form field has been changed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldpropertieschangeevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldpropertieschangeevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldRemove event

The `formFieldRemove` event is triggered when a form field is removed from the PDF. The event arguments provide the necessary information about which form field has been removed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldremoveevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldremoveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldResize event

The `formFieldResize` events are triggered when a form field in a PDF is resized. These events provide the relevant details about the specific form field that has been resized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldresizeevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldresizeevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldSelect event

The `formFieldSelect` events are triggered when a form field in a PDF is selected. These events provide the necessary details about the specific form field that has been selected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldselectevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldselectevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldUnselect event

The `formFieldUnselect` events are triggered when a form field in a PDF is unselected. These events provide the necessary details about the specific form field that has been unselected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldunselectevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldunselectevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## validateFormFields event

The `formFieldUnselect` events are triggered when a required form field is left unfilled before downloading the PDF. These events provide the necessary information for validating which form fields are incomplete.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/formfieldvalidationevent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/formfieldvalidationevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

