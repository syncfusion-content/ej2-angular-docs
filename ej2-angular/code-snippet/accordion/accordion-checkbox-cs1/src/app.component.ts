


import { Component, ViewEncapsulation, Inject, ViewChild } from "@angular/core";
import {
  ExpandEventArgs,
  Accordion,
  AccordionClickArgs
} from "@syncfusion/ej2-navigations";
import { closest } from "@syncfusion/ej2-base";
import { AccordionComponent, AccordionItemModel } from "@syncfusion/ej2-angular-navigations";
import { CheckBoxComponent } from "@syncfusion/ej2-angular-buttons";

@Component({
  selector: "app-container",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  @ViewChild("element") acrdnInstance?: AccordionComponent;
  @ViewChild("checkbox1") chk1Instance?: CheckBoxComponent;
  @ViewChild("checkbox2") chk2Instance?: CheckBoxComponent;
  @ViewChild("checkbox3") chk3Instance?: CheckBoxComponent;
  public clickEventArgs?: Event;
  public expanding(e: ExpandEventArgs) {
    if (this.clickEventArgs) {
      let header = closest(
        this.clickEventArgs.target as Element,
        ".e-acrdn-header"
      );
      let checkboxEle = closest(
        this.clickEventArgs.target as Element,
        ".e-checkbox-wrapper"
      );
      if (header && !checkboxEle) {
        e.cancel = true;
        return;
      }
    }
    let index = (this.acrdnInstance as AccordionComponent).items.indexOf(e.item as AccordionItemModel);
    if (index == 0 && !(this.chk1Instance as CheckBoxComponent).checked) {
      e.cancel = true;
      return;
    }
    if (index == 1 && !(this.chk2Instance as CheckBoxComponent).checked) {
      e.cancel = true;
      return;
    }
    if (index == 2 && !(this.chk3Instance as CheckBoxComponent).checked) {
      e.cancel = true;
      return;
    }
  }
  public onClick(e: any) {
    this.clickEventArgs = e.originalEvent;
  }
  public changeHandler1() {
    this.clickEventArgs = null as any;
    (this.acrdnInstance as AccordionComponent).expandItem(true, 0);
  }
  public changeHandler2() {
    this.clickEventArgs = null as any;
    (this.acrdnInstance as AccordionComponent).expandItem(true, 1);
  }
  public changeHandler3() {
    this.clickEventArgs = null as any;
    (this.acrdnInstance as AccordionComponent).expandItem(true, 2);
  }
}


