---
layout: post
title: Create mobile contact layout from ListView in Angular ListView component | Syncfusion
description: Learn here all about Create mobile contact layout from ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Create mobile contact layout from ListView in Angular ListView component

You can customize the ListView using the [template](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property. Refer to the following steps to customize ListView as mobile contact view with our `ej2-avatar`.

* Render the ListView with [dataSource](https://ej2.syncfusion.com/angular/documentation/api/list-view/#datasource) that has avatar data. You can set avatar data as either text or class names. Refer to the following codes.

  ```typescript

  let data: any = [
      {
      text: "Jenifer",
      contact: "(206) 555-985774",
      id: "1",
      avatar: "",
      pic: "pic01"
    },
    { text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
  ];

  ```

* Set `avatar` classes in ListView template to customize contact icon. In the following codes, medium size avatar has been set using the class name `e-avatar e-avatar-circle` from data source.

  {% raw %}

  ```typescript
    <ng-template #template let-data="">
                  <div class="e-list-wrapper e-list-multi-line e-list-avatar">
                      <span class="e-avatar e-avatar-circle" *ngIf="data.avatar !== ''">{{data.avatar}}</span>
                      <span class="{{data.pic}} e-avatar e-avatar-circle" *ngIf="data.pic !== '' "> </span>
                      <span class="e-list-item-header">{{data.text}}</span>
                      <span class="e-list-content">{{data.contact}}</span>
                  </div>
      </ng-template>
  ```

  {% endraw %}

> Avatars can be set in different sizes in avatar classes. To know more about avatar classes, refer to [Avatar](https://ej2.syncfusion.com/demos/#/material/avatar/default).

* Sort the contact names using the [`sortOder`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property of ListView.
* Enable the [`showHeader`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#showheader) property, and set the [`headerTitle`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#headertitle) as `Contacts`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/avatar-template-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/avatar-template-cs3/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/avatar-template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/avatar-template-cs3" %}
