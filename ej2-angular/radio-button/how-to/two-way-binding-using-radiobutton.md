---
layout: post
title: Two way binding using radiobutton in Angular Radio button component | Syncfusion
description: Learn here all about Two way binding using radiobutton in Syncfusion Angular Radio button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Two way binding using radiobutton 
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding using radiobutton in Angular Radio button component

In the following example, two-way binding for RadioButton is illustrated with DropDownList component. The steps to achieve two-way binding in RadioButton are as follows,

* Initialize RadioButton component and bind the checked value using ngModel as in the below code using "banana in a box" syntax,

  ```typescript

  <ejs-radiobutton [label]='payment' [value]="payment" name="payment" [(ngModel)]="value"></ejs-radiobutton>
 
  ```

* Initialize DropDownList component and assign the [`value`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#value) property value like the below code,

  ```typescript
  <ejs-dropdownlist [dataSource]='paymentMethod' [(value)]="value" ></ejs-dropdownlist>
  ```

* Now, the changes made in RadioButton will reflect in DropDownList (i.e. Selected option in radio button will be reflected in DropDownList  ) and vice versa.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/radio-button/binding-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/radio-button/binding-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/radio-button/binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/radio-button/binding-cs1" %}