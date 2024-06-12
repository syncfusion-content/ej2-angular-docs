---
layout: post
title: Radial menu in Angular Speed dial component | Syncfusion
description: Learn here all about Radial menu in Syncfusion Angular Speed dial component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Radial menu 
documentation: ug
domainurl: ##DomainURL##
---

# Radial menu in Angular Speed dial component

The Angular Speed Dial action items can be displayed in a circular patter like a radial menu by setting [`mode`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/#mode) property. You can customize the `direction`, `startAngle`, `endAngle` and `offset` by setting [`radialSettings`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/#radialsettings) property.

## Radial menu direction

You can open the action items in either clockwise or anticlockwise by setting [`direction`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/radialSettingsModel/#direction) property. The default value is [`Auto`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/radialDirection/) where the action items are displayed based on the `position` property of the Speed Dial.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
    <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' [items]='items' mode= 'Radial' [radialSettings]= 'radialSettings'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
  ];

  public radialSettings: RadialSettingsModel = { direction: 'AntiClockwise' };
}
```

## Radial menu start and end angle

You can modify the start and end angle of action items by setting [`startAngle`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/radialSettingsModel/#startangle) and [`endAngle`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/radialSettingsModel/#endangle) properties. If the angle is not defined, the action items are displayed based on the `position` property of the Speed Dial.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
    <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' [items]='items' mode= 'Radial' position='MiddleCenter' [radialSettings]= 'radialSettings'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
  ];

    public radialSettings: RadialSettingsModel = { direction: 'AntiClockwise', startAngle: 180, endAngle: 360 };
}
```

## Offset

You can modify the offset distance between action items and Speed Dial button using [`offset`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/radialSettingsModel/#offset) property.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
    <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' [items]='items' mode= 'Radial' [radialSettings]= 'radialSettings'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
  ];

  public radialSettings: RadialSettingsModel = { offset: '80px' };
}
```

Below example demonstrates the radial menu settings of the Speed Dial.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/radial-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/speed-dial/radial-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/radial-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/radial-cs2" %}
