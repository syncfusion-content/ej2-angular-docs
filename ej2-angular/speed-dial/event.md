---
layout: post
title: Event in Angular Speed dial component | Syncfusion
description: Learn here all about Event in Syncfusion Angular Speed dial component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Event 
documentation: ug
domainurl: ##DomainURL##
---

# Event in Angular Speed dial component

This section explains the [Angular Speed Dial](https://www.syncfusion.com/angular-components/angular-speed-dial) events that will be triggered when appropriate actions are performed.

## clicked

The SpeedDial component triggers the [`clicked`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#clicked) event with [`SpeedDialItemEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemEventArgs/) argument when an action item is clicked. You can use this event to perform the required action.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
        <button ejs-speeddial id="speeddial" content='Edit' (clicked)='clicked($event)' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
  ];
  public clicked(args: SpeedDialItemEventArgs) {
    //Your required action here
  }
}
```

## created

The Speed Dial component triggers the [`created`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#created) event when SpeedDial component rendering is completed.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
        <button ejs-speeddial id="speeddial" content='Edit' (created)='created()' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
  ];
  public created() {
    //Your required action here
  }
}
```

## beforeOpen

The SpeedDial component triggers the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#beforeopen) event with [`SpeedDialBeforeOpenCloseEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialBeforeOpenCloseEventArgs/) argument before the SpeedDial popup is opened.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
        <button ejs-speeddial id="speeddial" content='Edit' (beforeOpen)='beforeOpen($event)' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
  ];
  public beforeOpen(args: SpeedDialBeforeOpenCloseEventArgs) {
    //Your required action here
  }
}
```

## onOpen

The SpeedDial component triggers the [`onOpen`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#onopen) event with [`SpeedDialOpenCloseEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialOpenCloseEventArgs/) argument when SpeedDial popup is opened.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
        <button ejs-speeddial id="speeddial" content='Edit' (onOpen)='onOpen($event)' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
  ];
  public onOpen(args: SpeedDialOpenCloseEventArgs) {
    //Your required action here
  }
}
```

## beforeClose

The SpeedDial component triggers the [`beforeClose`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#beforeclose) event with [`SpeedDialBeforeOpenCloseEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialBeforeOpenCloseEventArgs/) argument before the SpeedDial popup is closed.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
        <button ejs-speeddial id="speeddial" content='Edit' (beforeClose)='beforeClose($event)' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
  ];
  public beforeOpen(args: SpeedDialBeforeOpenCloseEventArgs) {
    //Your required action here
  }
}
```

## onClose

The SpeedDial component triggers the [`onClose`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#onclose) event with [`SpeedDialOpenCloseEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialOpenCloseEventArgs/) argument when SpeedDial popup is closed.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
        <button ejs-speeddial id="speeddial" content='Edit' (onClose)='onClose($event)' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
  ];
  public onClose(args: SpeedDialOpenCloseEventArgs) {
    //Your required action here
  }
}
```

## beforeItemRender

The SpeedDial component triggers the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#beforeitemrender) event with [`SpeedDialItemEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemEventArgs/) argument for each `SpeedDialItem` once it is rendered.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
        <button ejs-speeddial id="speeddial" content='Edit' (beforeItemRender)='beforeItemRender($event)' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
  ];
  public beforeItemRender(args: SpeedDialItemEventArgs) {
    //Your required action here
  }
}
```

Below example demonstrates the clicked event of the Speed Dial component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/action-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/action-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/action-cs1" %}