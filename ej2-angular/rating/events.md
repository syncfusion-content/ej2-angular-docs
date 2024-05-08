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

This section describes the rating events that will be triggered when appropriate actions are performed. The following events are available in the rating component.

## beforeItemRender

The rating component triggers the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/rating#beforeitemrender) event before rendering each rating item. The [`RatingItemEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/rating/ratingItemEventArgs/) passed as an event argument provides the details of the item to be rendered.

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

The rating component triggers the [`onItemHover`](https://ej2.syncfusion.com/angular/documentation/api/rating#onitemhover) event when the rating item is hovered. The [`RatingHoverEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/rating/ratingHoverEventArgs/) passed as an event argument provides the details of the hovered item.

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

The rating component triggers the [`valueChanged`](https://ej2.syncfusion.com/angular/documentation/api/rating#valuechanged) event when the value of the rating is changed. The [`RatingChangedEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/rating/ratingChangedEventArgs/) passed as an event argument provides the details when value is changed.

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
