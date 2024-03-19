---
layout: post
title: Events in Angular TextArea control | Syncfusion
description: Handling events triggered by user interactions or changes in the Angular TextArea control of Syncfusion Essential JS 2 and more.
control: Events
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular TextArea control

This section describes the TextArea events that will be triggered when appropriate actions are performed. The following events are available in the TextArea control.

## created

The TextArea control triggers the [created](https://ej2.syncfusion.com/angular/documentation/api/textarea/#created) event when the TextArea component is created. This event provides users with an opportunity to perform actions immediately after the TextArea has been created and initialized.

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

## input

The TextArea control triggers the [input](https://ej2.syncfusion.com/angular/documentation/api/textarea/#input) each time when the value of TextArea has changed. This event provides users with an opportunity to perform actions in response to real-time changes in the TextArea's content.
The [InputEventArgs](https://ej2.syncfusion.com/angular/documentation/api/textbox/InputEventArgs/) passed as an event argument provides the details about the input event in the TextArea.

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

## change

The TextArea control triggers the [change](https://ej2.syncfusion.com/angular/documentation/api/textarea/#change) event when the content of TextArea has changed and gets focus-out. This event provides users with an opportunity to execute specific actions in response to changes made by the user.
The [ChangedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/textbox/ChangedEventArgs/) passed as an event argument provides the details about the changes in the TextArea's value.

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

## focus 

The TextArea control triggers the [focus](https://ej2.syncfusion.com/angular/documentation/api/textarea/#focus ) when the TextArea gains focus. This event allows developers to execute specific actions when the user interacts with the TextArea by focusing on it.
The [FocusInEventArgs](https://ej2.syncfusion.com/angular/documentation/api/textbox/FocusInEventArgs/) passed as an argument provides details about the focus event in the TextArea.

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

## blur 

The TextArea control triggers the [blur](https://ej2.syncfusion.com/angular/documentation/api/textarea/#blur) when the TextArea loses focus. This event allows users to execute specific actions when the user interacts with the TextArea by moving focus away from it.
The [FocusOutEventArgs](https://ej2.syncfusion.com/angular/documentation/api/textbox/FocusOutEventArgs/) passed as an argument provides details about the blur event in the TextArea.

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

## destroyed 

The TextArea control triggers the [destroyed](https://ej2.syncfusion.com/angular/documentation/api/textarea/#destroyed) when the TextArea component is destroyed.

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
