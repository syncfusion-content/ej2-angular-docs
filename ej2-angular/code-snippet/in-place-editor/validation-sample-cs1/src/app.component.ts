


import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div id="container">
      <table class="table-section">
        <tr>
          <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <ejs-inplaceeditor
              type="Numeric"
              name="Number"
              mode="Inline"
              [validationRules]="validationRules"
            ></ejs-inplaceeditor>
          </td>
        </tr>
      </table>
    </div>
  `
})
export class AppComponent {
  public name: string = "Number";

  public validationRules = {
    Number: { maxLength: 5 }
  };
}



