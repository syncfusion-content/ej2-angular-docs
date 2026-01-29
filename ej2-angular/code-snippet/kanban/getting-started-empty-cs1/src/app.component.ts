import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { KanbanModule } from '@syncfusion/ej2-angular-kanban'

import { Component } from '@angular/core';

@Component({
    imports: [
      KanbanModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-kanban>
                  <e-columns>
                    <e-column headerText='To do' keyField='Open'></e-column>
                    <e-column headerText='In Progress' keyField='InProgress'></e-column>
                    <e-column headerText='Testing' keyField='Testing'></e-column>
                    <e-column headerText='Done' keyField='Close'></e-column>
                  </e-columns>
              </ejs-kanban>`
})
export class App { }


