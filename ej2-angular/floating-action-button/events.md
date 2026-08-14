---
layout: post
title: Events in Angular Floating Action Button | Syncfusion
description: Explore Angular Floating Action Button events such as created and click to run custom logic on interaction.
platform: ej2-angular
control: Events 
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Floating Action Button

This section explains the available events in Floating Action Button component.

## created

Event triggers after the creation of Floating Action Button.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Floating Action Button. -->
                <button ejs-fab id='fab' iconCss= 'e-icons e-edit' content= 'Edit' (created)="onCreate()"></button>`
})

export class AppComponent {

    onCreate() {
        //Your required action here
  };
 }
```

## onclick

Event triggers when the Floating Action Button is clicked.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Floating Action Button. -->
                <button ejs-fab id='fab' iconCss= 'e-icons e-edit' content= 'Edit' (click)="onclick()"></button>`
})

export class AppComponent {

    onclick() {
        //Your required action here
  };
 }
```

Below example demonstrates the click event of the Floating Action Button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/floating-action-button/events-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/floating-action-button/events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/floating-action-button/events-cs1" %}
