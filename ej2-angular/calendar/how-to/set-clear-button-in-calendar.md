---
layout: post
title: How to set clear button in Calendar | Syncfusion®
description: Learn how to add a clear button to the Syncfusion Angular Calendar UI by appending a Button element inside the created event handler.
platform: ej2-angular
control: Set clear button in calendar 
documentation: ug
domainurl: ##DomainURL##
---

# How to set clear button in Calendar in Angular Calendar

The following steps demonstrate how to add a `Clear` button to the Calendar UI and use it to clear the currently selected date.

1. In the [`created`](https://ej2.syncfusion.com/angular/documentation/api/calendar#created) event of the Calendar, create and append the required elements for the `Clear` button. In this example, a `div` element containing an Essential<sup style="font-size:70%">&reg;</sup> JS 2 Button component is added.

2. Apply the `e-footer` CSS class to the `div` element so that it is displayed as the Calendar footer.

3. Create a button that is used to clear the selected date in the Calendar.

4. Bind a click event handler to the button and reset the Calendar value when the button is clicked.

The following example demonstrates how to add a Clear button and clear the selected date programmatically.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/how-to-cs1" %}
