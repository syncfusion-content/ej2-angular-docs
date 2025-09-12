---
layout: post
title: Create Mmobile contact layout with Angular ListView | Syncfusion
description: Learn here all about Create mobile contact layout from ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Create mobile contact layout in Angular ListView 

You can create a professional mobile contact directory interface using the ListView component's [template](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property combined with the Syncfusion Avatar component. This approach provides a native mobile experience with contact photos, names, and phone numbers displayed in an organized, scrollable list format.

Follow these sequential steps to implement a mobile contact layout:

## Step 1: Prepare the contact data structure

Render the ListView with [dataSource](https://ej2.syncfusion.com/angular/documentation/api/list-view/#datasource) containing contact information including avatar data. Configure avatar data using either text initials for generated avatars or CSS class names for custom contact images:

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

## Step 2: Configure the ListView template with Avatar integration

Set avatar classes in the ListView template to create contact icons with proper spacing and alignment. The template uses conditional rendering to display either custom images or initial-based avatars using the `e-avatar e-avatar-circle` classes:

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

This template structure creates a multi-line list item with avatar positioning on the left, contact name as the primary header, and phone number as secondary content.

> Avatars can be configured in different sizes using avatar classes. To explore comprehensive avatar styling options and size variations, refer to [Avatar](https://ej2.syncfusion.com/demos/#/material/avatar/default).

## Step 3: Enable sorting and header display

Configure the ListView for optimal contact browsing by sorting contact names alphabetically using the [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property. Enable the [`showHeader`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#showheader) property and set the [`headerTitle`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#headertitle) to "Contacts" for clear navigation context.

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