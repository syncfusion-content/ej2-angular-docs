import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'
import { Component } from "@angular/core";

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: "app-root",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px"></ejs-diagram>`
})
export class App { }