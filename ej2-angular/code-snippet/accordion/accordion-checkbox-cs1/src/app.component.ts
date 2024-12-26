import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { Component, ViewEncapsulation, Inject, ViewChild } from "@angular/core";
import { ExpandEventArgs, Accordion,AccordionClickArgs } from "@syncfusion/ej2-navigations";
import { closest } from "@syncfusion/ej2-base";
import { AccordionComponent } from "@syncfusion/ej2-angular-navigations";
import { changeEventArgs } from "@syncfusion/ej2-buttons";
import { CheckBoxModule } from "@syncfusion/ej2-angular-buttons";

@Component({
imports: [ AccordionModule, CheckBoxModule],
standalone: true,
  selector: "app-container",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  @ViewChild("element") acrdnInstance?: AccordionComponent;
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
  }
  public onClick(e: any) {
    this.clickEventArgs = e.originalEvent;
  }
  public changeHandler1(args: changeEventArgs) {
    this.clickEventArgs = null as any;
    (this.acrdnInstance as AccordionComponent).expandItem(args.checked, 0);
  }
  public changeHandler2(args: changeEventArgs) {
    this.clickEventArgs = null as any;
    (this.acrdnInstance as AccordionComponent).expandItem(args.checked, 1);
  }
  public changeHandler3(args: changeEventArgs) {
    this.clickEventArgs = null as any;
    (this.acrdnInstance as AccordionComponent).expandItem(args.checked, 2);
  }
}
