---
layout: post
title: Form Support with Angular TextArea component | Syncfusion
description: Checkout and learn about Form support of the Angular TextArea component of Syncfusion Essential JS 2 and more details.
control: Form Support
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Form Support in Angular TextArea Component

The TextArea component seamlessly integrates with HTML forms for efficient submission of multiline text data. Include TextArea inputs within your forms to allow users to enter detailed content and submit it as part of the form submission. This integration enhances form usability by providing users with the ability to input lengthy descriptions, feedback, or other multiline text content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/form-support-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/form-support-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/form-support-cs1" %}

## Integration of Angular TextArea Component with FormValidator Component

The TextArea component seamlessly integrates with the `FormValidator` component, allowing you to incorporate textarea inputs into form validation processes.

By integrating TextArea with the `FormValidator` component, you can enforce validation rules specific to text inputs, such as required fields, minimum and maximum length constraints, and pattern matching. This ensures that user-submitted text data meets specified criteria and maintains data integrity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/form-support-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/form-support-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/form-support-cs2" %}
