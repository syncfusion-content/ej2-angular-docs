---
layout: post
title: Timezone Behavior in Angular Datetimepicker | Syncfusion
description: Learn here all about Timezone Behavior in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timezone Behavior 
documentation: ug
domainurl: ##DomainURL##
---

# Timezone Behavior in DateTimePicker Control

The DateTimePicker component displays and maintains the selected date and time value based on the client system’s current time zone. When a user selects a value, it is stored and rendered using the local time zone of the system at the time of selection. This ensures that the value remains consistent and predictable during user interaction.

N> if the system time zone is changed dynamically after a value is selected, the DateTimePicker will **not update or shift** the selected value. The component preserves the original selection, ensuring a stable and reliable user experience.

## `serverTimezoneOffset`

The `serverTimezoneOffset` property allows you to specify the server's time zone offset from UTC in **hours** or **fractional hours**. This is useful when binding values from the server to ensure they are interpreted correctly on the client side.

- The value should be a number representing the offset from UTC.
- Examples:
  - `-5` → UTC-5 (Eastern Standard Time)
  - `-4.5` → UTC-4:30 (Afghanistan Time)
  - `5.5` → UTC+5:30 (India Standard Time)

N> The `serverTimezoneOffset` property is applicable **only for pre-bound values** (i.e., values set during initialization or data binding). It does **not affect** values selected by the user during runtime.

The following example illustrates the output in your browser

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/timezone-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/timezone-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/timezone-cs1" %}
