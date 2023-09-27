

import { Component, ViewChild } from "@angular/core";
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-section" id="reswrapper">
        <div>
            <ejs-appbar>
                <button #defaultButtonMenu ejs-button cssClass="e-inherit" iconCss="e-icons e-menu" (click)="toggle()"></button>
                <div class="e-folder">
                    <div class="e-folder-name">Navigation Pane</div>
                </div>
            </ejs-appbar>
        </div>
        <ejs-sidebar id="sideTree" class="sidebar-treeview" #sidebarTreeviewInstance [width]="width" [target]="target" [mediaQuery]="mediaQuery" [isOpen]="true">
            <div class='main-menu'>
                <div class="table-content">
                    <ejs-textbox id="resSearch" placeholder="Search..."></ejs-textbox>
                    <p class="main-menu-header">TABLE OF CONTENTS</p>
                </div>
                <div>
                    <ejs-treeview id='mainTree' cssClass="main-treeview" [fields]="fields" expandOn='Click'>
                </ejs-treeview>
                </div>
            </div>
        </ejs-sidebar>
        <div class="main-sidebar-content" id="main-text">
            <div class="sidebar-content">
            <div class="sidebar-heading"> Responsive Sidebar with Treeview</div>
                <p class="paragraph-content">
                    This is a graphical aid for visualising and categorising the site, in the style of an expandable and
                    collapsable treeview component.
                    It auto-expands to display the node(s), if any, corresponding to the currently viewed title,
                    highlighting that node(s)
                    and its ancestors. Load-on-demand when expanding nodes is available where supported (most graphical
                    browsers),
                    falling back to a full-page reload. MediaWiki-supported caching, aside from squid, has been considered
                    so that
                    unnecessary re-downloads of content are avoided where possible. The complete expanded/collapsed state of
                    the treeview persists across page views in most situations.
                </p>
            </div>
        </div>
    </div>`,
})
export class AppComponent {
  @ViewChild('sidebarTreeviewInstance')
  public sidebarTreeviewInstance?: SidebarComponent;
  public data: { [key: string]: Object }[] = [
    {
        nodeId: '01', nodeText: 'Installation',
    },
    {
        nodeId: '02', nodeText: 'Deployment',
    },
    {
        nodeId: '03', nodeText: 'Quick Start',
    },
    {
        nodeId: '04', nodeText: 'Components',
        nodeChild: [
            { nodeId: '04-01', nodeText: 'Calendar' },
            { nodeId: '04-02', nodeText: 'DatePicker' },
            { nodeId: '04-03', nodeText: 'DateTimePicker' },
            { nodeId: '04-04', nodeText: 'DateRangePicker' },
            { nodeId: '04-05', nodeText: 'TimePicker' },
            { nodeId: '04-06', nodeText: 'SideBar' }
        ]
    }
  ];
  public width: string = '220px';
  public target: string = '.main-sidebar-content';
  public mediaQuery: string = '(min-width: 600px)';
  public fields: object = { dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' };
  toggle() {
    (this.sidebarTreeviewInstance as SidebarComponent).toggle();
  };
}


