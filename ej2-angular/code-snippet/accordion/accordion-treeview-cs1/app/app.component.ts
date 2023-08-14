


import { Component, ViewChild, ElementRef } from '@angular/core';
import { AccordionComponent, AccordionItemModel, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { Accordion, ExpandEventArgs, TreeView } from '@syncfusion/ej2-navigations';
import { DocDB, DownloadDB, PicDB } from './datasource';

@Component({
  selector: 'app-container',
  template: `
    <ejs-accordion #element>
        <e-accordionitems>
          <e-accordionitem expanded='true'>
            <ng-template #header>
              <div>Documents</div>
            </ng-template>
            <ng-template #content>
              <ejs-treeview id="treeDoc" [fields]='docField' [sortOrder]='sortOrder'></ejs-treeview>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>Downloads</div>
            </ng-template>
            <ng-template #content>
            <ejs-treeview id="treeDownload" [fields]='downField' [sortOrder]='sortOrder'></ejs-treeview>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>Pictures</div>
            </ng-template>
            <ng-template #content>
            <ejs-treeview id="treePic" [fields]='picField' [sortOrder]='sortOrder'></ejs-treeview>
            </ng-template>
          </e-accordionitem>
        </e-accordionitems>
    </ejs-accordion>
        `
})

export class AppComponent {
  @ViewChild('element') acrdnInstance?: AccordionComponent;
  @ViewChild('treeDocRef') treeDocRef!: ElementRef<HTMLDivElement>;

  public docField: Object = { dataSource: DocDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' };
  public downField: Object = { dataSource: DownloadDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' };
  public picField: Object = { dataSource: PicDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' };

  public sortOrder: string = 'Ascending';
}
