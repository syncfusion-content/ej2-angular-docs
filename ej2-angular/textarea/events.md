---
layout: post
title: Events in Angular TextArea component | Syncfusion
description: Handling events triggered by user interactions or changes in the Angular TextArea component of Syncfusion Essential JS 2 and more.
control: Events
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular TextArea Component

This section describes the TextArea events that will be triggered when appropriate actions are performed. The following events are available in the TextArea component.

## Created Event

The TextArea component triggers the [created](https://ej2.syncfusion.com/angular/documentation/api/textarea/#created) event when the component is created and initialized. Use this event to perform actions immediately after the TextArea becomes available.

```typescript

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                    <ejs-textarea id="default" (created)="created()></ejs-textarea>
                </div>`
})

export class AppComponent {
  public created(){
    //Your required action here
  };
}

```

## Input Event

The TextArea component triggers the [input](https://ej2.syncfusion.com/angular/documentation/api/textarea/#input) event each time the textarea value changes. Use this event to respond to real-time content modifications.
The [InputEventArgs](https://ej2.syncfusion.com/angular/documentation/api/textbox/InputEventArgs/) parameter provides details about the input event.

```typescript

import { Component } from '@angular/core';
import { InputEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                  <ejs-textarea id="default" (input)="inputHandler($event)"/>
                </div>`
})

export class AppComponent {
  public inputHandler(args: InputEventArgs){
    //Your required action here
  };
}

```

## Change Event

The TextArea component triggers the [change](https://ej2.syncfusion.com/angular/documentation/api/textarea/#change) event when the textarea content changes and loses focus. Use this event to execute actions in response to user-made changes.
The [ChangedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/textbox/ChangedEventArgs/) parameter provides details about the changes to the textarea value.

```typescript

import { Component } from '@angular/core';
import { ChangedEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                  <ejs-textarea id="default" (change)="changeHandler($event)"/>
                </div>`
})

export class AppComponent {
  public changeHandler(args: ChangedEventArgs){
    //Your required action here
  };
}

```

## Focus Event

The TextArea component triggers the [focus](https://ej2.syncfusion.com/angular/documentation/api/textarea/#focus) event when the textarea gains focus. Use this event to execute actions when the user interacts with the TextArea.
The [FocusInEventArgs](https://ej2.syncfusion.com/angular/documentation/api/textbox/FocusInEventArgs/) parameter provides details about the focus event.

```typescript

import { Component } from '@angular/core';
import { FocusInEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                  <ejs-textarea id="default" (focus)="focusHandler($event)"/>
                </div>`
})

export class AppComponent {
  public focusHandler(args: FocusInEventArgs){
    //Your required action here
  };
}

```

## Blur Event

The TextArea component triggers the [blur](https://ej2.syncfusion.com/angular/documentation/api/textarea/#blur) event when the textarea loses focus. Use this event to execute actions when the user moves focus away from the TextArea.
The [FocusOutEventArgs](https://ej2.syncfusion.com/angular/documentation/api/textbox/FocusOutEventArgs/) parameter provides details about the blur event.

```typescript

import { Component } from '@angular/core';
import { FocusOutEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                  <ejs-textarea id="default" (blur)="blurHandler($event)"/>
                </div>`
})

export class AppComponent {
  public blurHandler(args: FocusOutEventArgs){
    //Your required action here
  };
}

```

## Destroyed Event

The TextArea component triggers the [destroyed](https://ej2.syncfusion.com/angular/documentation/api/textarea/#destroyed) event when the component is destroyed.

```typescript

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render TextArea component. -->
                <div class="wrap">
                    <ejs-textarea id="default" (destroyed)="destroyed()></ejs-textarea>
                </div>`
})

export class AppComponent {
  public destroyed(){
    //Your required action here
  };
}

```
