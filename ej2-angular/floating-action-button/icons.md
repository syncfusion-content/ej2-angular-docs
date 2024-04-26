---
layout: post
title: Icons in Angular Floating action button component | Syncfusion
description: Learn here all about Icons in Syncfusion Angular Floating action button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Icons 
documentation: ug
domainurl: ##DomainURL##
---

# Icons in Angular Floating action button component

You can customize the icon and text of Angular Floating Action Button(FAB) using [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#iconcss) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#content) properties.

## FAB with icon

You can show icon only in Floating Action Button by setting [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#iconcss) property. You can show tooltip on hover to show additional details to end-user by setting `title` attribute.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: ` <!-- To Render Floating Action Button with icon only -->
                <button ejs-fab id='fab' iconCss= 'fab-icons fab-icon-people'></button>`
})

export class AppComponent { }
```

## FAB with icon and text

You can show icon along with text in Floating Action Button by setting [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#iconcss) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#content) properties.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Floating Action Button with icon and text -->
                <button ejs-fab id='fab' iconCss= 'fab-icons fab-icon-people' content= 'Contacts'></button>`
})

export class AppComponent { }
```

### Icon position

You can change the position of icon when showing along with content by setting [`iconPosition`](https://ej2.syncfusion.com/angular/documentation/api/floating-action-button/fab/#iconposition) property. By default, the icon is positioned on the left side together with text.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Floating Action Button with icon position -->
                <button ejs-fab id='fab' iconCss= 'fab-icons fab-icon-people' content= 'Contacts' iconPosition= 'Right'></button>`
})

export class AppComponent { }
```

Below example demonstrates a FAB with icon and text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/floating-action-button/icons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/floating-action-button/icons-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/icons-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/floating-action-button/icons-cs1" %}
