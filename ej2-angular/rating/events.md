---
layout: post
title: Events with Angular Rating component | Syncfusion
description:  Learn here all about Events with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Events
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Rating Component

The Rating component provides events that fire during user interactions and state changes. The following events are available to customize component behavior.

## beforeItemRender

The Rating component triggers the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/rating#beforeitemrender) event before each rating item renders. Use this event to customize item properties before rendering. The [`RatingItemEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/rating/ratingItemEventArgs/) provides details about the item being prepared.

```typescript

import { Component } from '@angular/core';
import { RatingItemEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id='rating' (beforeItemRender)="beforeItemRender($event)"/><br />
                </div>`
})

export class AppComponent {
  public beforeItemRender(args: RatingItemEventArgs){
    //Your required action here
  };
}

```

## created

The rating component triggers the [`created`](https://ej2.syncfusion.com/angular/documentation/api/rating#created) event when the rendering of the rating component is completed.

```typescript

import { Component } from '@angular/core';
import { RatingItemEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id='rating' (created)="created()"/><br />
                </div>`
})

export class AppComponent {
  public created(){
    //Your required action here
  };
}

```

## onItemHover

The Rating component triggers the [`onItemHover`](https://ej2.syncfusion.com/angular/documentation/api/rating#onitemhover) event when a user hovers over a rating item. Use this event to provide visual feedback or update the UI based on the hovered item. The [`RatingHoverEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/rating/ratingHoverEventArgs/) provides details about the hovered item.

```typescript

import { Component } from '@angular/core';
import { RatingHoverEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id='rating' (onItemHover)="onItemHover($event)"/><br />
                </div>`
})

export class AppComponent {
  public onItemHover(args: RatingHoverEventArgs) {
    //Your required action here
  };
}

```

## valueChanged

The Rating component triggers the [`valueChanged`](https://ej2.syncfusion.com/angular/documentation/api/rating#valuechanged) event when the user selects a rating value. Use this event to capture user input and perform related actions. The [`RatingChangedEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/rating/ratingChangedEventArgs/) provides details about the rating change.

```typescript

import { Component } from '@angular/core';
import { RatingChangedEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id='rating' (valueChanged)="valueChanged($event)"/><br />
                </div>`
})

export class AppComponent {
  public valueChanged(args: RatingChangedEventArgs) {
    //Your required action here
  };
}

```

Below example demonstrates the valueChanged event of the Rating component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/events-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/events-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/events-cs" %}
