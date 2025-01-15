---
layout: post
title: Angular Templates | Syncfusion
description: Learn everything there is to know about templates, including an example in the Angular components of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Syncfusion Angular Components

Syncfusion Angular components provide a pre-defined layout or structure that defines how the component should be rendered on the user interface. When you need to customize the component's appearance or functionality to meet specific application needs, Syncfusion Angular components offer template support to achieve this.

Template support is implemented using Angular's `ng-template` directive, which creates reusable templates that can be invoked throughout the application. This approach allows you to define a template with a specified structure and logic, then reuse it multiple times without writing duplicate code.

In Angular, a template is defined using the `<ng-template>` tag within the corresponding component. The template can be accessed via the component's template name using the `#` symbol, enabling easy referencing. Templates can include any valid HTML and Angular template syntax, such as directives, bindings, and components.

To access component data within the template, use the `let-data` attribute. Here’s an example:

```html
<ng-template #template let-data>
  <div class="template">{{data.ShipCountry}}</div>
</ng-template>
```

Let's explore how templates enhance the Grid component with a custom template:

```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
        <ejs-grid #grid [dataSource]='data'>
            <e-columns>
                <e-column field='OrderID' headerText='OrderID' width='100'></e-column>
                <e-column field='CustomerID' headerText='CustomerID' width='100'></e-column>
                <e-column field='ShipCountry' headerText='ShipCountry' width='100'>
                    <ng-template #template let-data>
                        <div class="template">{{data.ShipCountry}}</div>
                    </ng-template>
                </e-column>
            </e-columns>
        </ejs-grid>
    </div>`
});

export class AppComponent implements OnInit {

    public data: object[];
    ngOnInit(): void {
        this.data = [
            { OrderID: 10248, CustomerID: 'VINET', ShipCountry: 'France' },
            { OrderID: 10249, CustomerID: 'TOMSP', ShipCountry: 'Germany' },
            { OrderID: 10250, CustomerID: 'HANAR', ShipCountry: 'Brazil' }
        ];
    }
};
```