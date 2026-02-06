---
layout: post
title: State persistence in Angular Maps component | Syncfusion
description: Learn here all about State persistence in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: State persistence 
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular Maps component

## State Persistence

State persistence enables the Maps component to retain the current state in browser storage for state maintenance across page refreshes. This feature is controlled through the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/maps#enablepersistence) property which is set to **false** by default. When this property is set to **true**, specific Maps component model values are preserved even after the page is refreshed.

```typescript
import { Component, OnInit } from '@angular/core';
import { Maps, Selection} from '@syncfusion/ej2-angular-maps';
import { world_map } from 'world-map.ts';
Maps.Inject(Selection);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [enablePersistence] = 'enablePersistence' [zoomSettings] = 'zoomSettings'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData: object;
    public zoomSettings: object;
    public enablePersistence: boolean;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.enablePersistence = true;
        this.zoomSettings = {
            enable: true,
        };
    }
}
```