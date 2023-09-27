

import { Component, ViewChild } from '@angular/core';
import { AccordionComponent, AccordionItemModel } from '@syncfusion/ej2-angular-navigations';
import { Accordion, ExpandEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-container',
    template: `
       <ejs-accordion #element (expanding)="expanding($event)" (expanded)="expanded($event)" (created)="created($event)" expandMode='Single' >
        <e-accordionitems>
          <e-accordionitem>
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
        `
})

export class AppComponent {
    @ViewChild('element') acrdnInstance?: AccordionComponent;
    public initialLoad = true;
    public isCollapsed = false;
    public expandIndex?: number;
    public expanding(e: ExpandEventArgs) {
        if (e.isExpanded && !this.initialLoad && !this.isCollapsed) {
            e.cancel = true;
            this.expandIndex = (this.acrdnInstance as AccordionComponent).items.indexOf((e as ExpandEventArgs).item as AccordionItemModel);
            this.isCollapsed = true;
      }
    }
    public expanded(e: ExpandEventArgs) {
       if (!e.isExpanded && !this.initialLoad && this.isCollapsed) {
           (this.acrdnInstance as AccordionComponent).expandItem(true, this.expandIndex);
           this.isCollapsed = false;
      }
    }
    public created(args: any): void {
        this.initialLoad = false;
    }
    constructor() {
    }
}


