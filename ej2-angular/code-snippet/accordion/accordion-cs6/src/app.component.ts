

import { Component, ViewChild } from '@angular/core';
import { AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { ExpandEventArgs, Accordion, AccordionClickArgs} from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-container',
    template: `
      <ejs-accordion>
        <e-accordionitems>
          <e-accordionitem expanded="true">
            <ng-template #header>
              <div>Video</div>
            </ng-template>
            <ng-template #content>
              <ejs-accordion>
                <e-accordionitems>
                  <e-accordionitem>
                    <ng-template #header>
                      <div>Video Track 1</div>
                    </ng-template>
                  </e-accordionitem>
                  <e-accordionitem>
                    <ng-template #header>
                      <div>Video Track 2</div>
                    </ng-template>
                  </e-accordionitem>
                </e-accordionitems>
              </ejs-accordion>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>Music</div>
            </ng-template>
            <ng-template #content>
              <ejs-accordion>
                <e-accordionitems>
                  <e-accordionitem>
                    <ng-template #header>
                      <div>Music Track 1</div>
                    </ng-template>
                  </e-accordionitem>
                  <e-accordionitem>
                    <ng-template #header>
                      <div>Music Track 2</div>
                    </ng-template>
                  </e-accordionitem>
                  <e-accordionitem>
                    <ng-template #header>
                      <div>Music New</div>
                    </ng-template>
                    <ng-template #content>
                      <ejs-accordion>
                        <e-accordionitems>
                          <e-accordionitem>
                            <ng-template #header>
                              <div>New Track 1</div>
                            </ng-template>
                          </e-accordionitem>
                          <e-accordionitem>
                            <ng-template #header>
                              <div>New Track 2</div>
                            </ng-template>
                          </e-accordionitem>
                        </e-accordionitems>
                      </ejs-accordion>
                    </ng-template>
                  </e-accordionitem>
                </e-accordionitems>
              </ejs-accordion>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>Images</div>
            </ng-template>
            <ng-template #content>
              <ejs-accordion>
                <e-accordionitems>
                  <e-accordionitem>
                    <ng-template #header>
                      <div>Track 1</div>
                    </ng-template>
                  </e-accordionitem>
                  <e-accordionitem>
                    <ng-template #header>
                      <div>Track 2</div>
                    </ng-template>
                  </e-accordionitem>
                </e-accordionitems>
              </ejs-accordion>
            </ng-template>
          </e-accordionitem>
        </e-accordionitems>
      </ejs-accordion>
      `
})

export class AppComponent {
}


