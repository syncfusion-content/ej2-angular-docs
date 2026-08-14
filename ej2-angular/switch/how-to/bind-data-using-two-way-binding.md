---
layout: post
title: How to bind data using two way binding in Angular Toggle Switch Button | Syncfusion
description: Use two-way binding in Angular Toggle Switch Button with ngModel to keep its checked state in sync with other controls.
platform: ej2-angular
control: Bind data using two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# How to bind data using two way binding in Angular Toggle Switch Button

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
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/switch/binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/binding-cs1" %}