---
layout: post
title: Use two way binding in Angular Checkbox Component | Syncfusion
description: Learn here all about bind data using two way binding support in Syncfusion Essential Angular Checkbox component, it's elements and more.
platform: ej2-angular
control: Bind data using two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# Use two way binding in Angular Checkbox Component

Checkbox component supports two way binding.

In this following example, two way binding for Checkbox is illustrated with Switch component. The steps to achieve two way binding in CheckBox are as follows,

* Initialize CheckBox component and bind the checked value using `ngModel` as in the below code using "banana in a box" syntax,

  ```typescript

  <ejs-checkbox #checkbox [(ngModel)]="checked"></ejs-checkbox>

  ```

* Initialize Switch component and assign the [`checked`](https://ej2.syncfusion.com/angular/documentation/api/switch/#checked) property value like the below code,

  ```typescript

  <ejs-switch #switch [(checked)]="checked"></ejs-switch>

  ```

* Now, the changes made in CheckBox will reflect in Switch (i.e When the state of CheckBox is changed to checked state then the Switch state will also change to checked state) and vice versa.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/binding-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/check-box/binding-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/binding-cs1" %}