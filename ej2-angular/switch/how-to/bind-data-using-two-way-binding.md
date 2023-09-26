---
layout: post
title: Bind data using two way binding in Angular Switch component | Syncfusion
description: Learn here all about Bind data using two way binding in Syncfusion Angular Switch component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bind data using two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# Bind data using two way binding in Angular Switch component

Switch component supports two way binding.

In this following example, two way binding for Switch is illustrated with CheckBox component. The steps to achieve two way binding in Switch are as follows,

* Initialize Switch component and bind the checked value using `ngModel` as in the below code using "banana in a box" syntax,

  ```typescript

  <ejs-switch #switch [(ngModel)]="checked"></ejs-switch>

  ```

* Initialize Checkbox component and assign the [`checked`](https://ej2.syncfusion.com/angular/documentation/api/check-box/checkBoxModel/#checked) property value like the below code,

  ```typescript

  <ejs-checkbox #checkbox [(checked)]="checked"></ejs-checkbox>

  ```

* Now, the changes made in Switch will reflect in CheckBox (i.e When the state of Switch is changed to checked state then the CheckBox state will also change to checked state) and vice versa.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/switch/binding-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/switch/binding-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/binding-cs1" %}