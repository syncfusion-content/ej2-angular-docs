

import { Component, ViewChild } from '@angular/core';
import { Effect } from "@syncfusion/ej2-base";
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { AccordionComponent} from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
    <div style='padding-top: 25px'>
    <div class='row'>
    <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
      <label> Expand Animation </label></div>
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
      <div class='custom_drop'><ejs-dropdownlist #expandAnimation (change)='expandAnimationChange()' index='0' [dataSource]='expandAni' placeholder='Expand Animation'></ejs-dropdownlist></div>
    </div></div>
    <div class='row'>
    <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
    <label> Collapse Animation </label></div>
    <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
    <div class='custom_drop'><ejs-dropdownlist #collapseAnimation (change)='collapseAnimationChange()' index='1' [dataSource]='expandAni' placeholder='Collapse Animation'></ejs-dropdownlist></div>
    </div></div>
    <div style='padding-top: 25px'>
 <ejs-accordion #acrdnInstance>
        <e-accordionitems>
          <e-accordionitem expanded='true'>
            <ng-template #header>
              <div>ASP.NET</div>
            </ng-template>
            <ng-template #content>
              <div>Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web
                services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop
                or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables
                the separation of application logic and user interface.</div>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>ASP.NET MVC</div>
            </ng-template>
            <ng-template #content>
              <div>The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model,
                the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for
                creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that
                (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based
                authentication.
              </div>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>JavaScript</div>
            </ng-template>
            <ng-template #content>
              <div>JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers
                so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter
                the document content that was displayed.More recently, however, it has become common in both game development and
                the creation of desktop applications.</div>
            </ng-template>
          </e-accordionitem>
        </e-accordionitems>
    </ejs-accordion>
    </div></div>
        `
})
export class AppComponent {
    @ViewChild('acrdnInstance') acrdnInstance?: AccordionComponent;
    @ViewChild('expandAnimation') expandInstance?: DropDownListComponent;
    @ViewChild('collapseAnimation') collapseInstance?: DropDownListComponent;
    public expandAni: string[] = ['SlideDown', 'SlideUp', 'FadeIn', 'FadeOut', 'FadeZoomIn', 'FadeZoomOut', 'ZoomIn', 'ZoomOut', 'None'];
    public expandAnimationChange(): void {
      (this.acrdnInstance as AccordionComponent).animation.expand = { effect: this.expandInstance?.value as Effect }
    }
    public collapseAnimationChange(): void {
      (this.acrdnInstance as AccordionComponent).animation.collapse = { effect: this.collapseInstance?.value as Effect }
    }
}


