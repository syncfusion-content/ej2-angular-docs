


import { Component, ViewChild} from '@angular/core';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `  <div id="wrapper">
                        <div class="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">
                            <div class="col-lg-12 col-sm-12 col-md-12">
                                <!--header-section  declaration -->
                                <div class="main-header" id="header-section">
                                    <ul class="header-list">
                                        <li class="float-left header-style icon-menu" id="hamburger" (click)="openClick()"></li>
                                        <li class="float-left header-style nav-pane"><b>Navigation Pane</b></li>
                                    </ul>
                                </div>
                                <!--end of header-section  declaration -->
                                <!-- sidebar element declaration -->
                                <ejs-sidebar id="sidebar-treeview" class="dock-menu" #sidebarTreeviewInstance [enableDock]='enableDock' [width]='width' [dockSize]='dockSize' (created)="onCreated($event)" style="visibility: hidden"
                                    [mediaQuery]='mediaQuery' [target]='target' (close)="onClose($event)">
                                    <div class="main-menu">
                                        <div>
                                            <!-- Treevie element declaration -->
                                            <ejs-treeview id="main-treeview" #treeviewInstance [fields]='field' expandOn='Click'></ejs-treeview>

                                        </div>
                                    </div>
                                </ejs-sidebar>
                                <!-- end of sidebar element -->

                                <!-- main-content declaration -->
                                <div class="main-content" id="main-text">
                                    <div class="sidebar-content">
                                        <h2 class="sidebar-heading"> Responsive Sidebar With Treeview</h2>
                                        <p class="paragraph-content"> This is a graphical aid for visualising and categorising the
                                            site,
                                            in the style of an expandable and collapsable treeview component. It auto-expands to
                                            display
                                            the node(s), if any, corresponding to the currently viewed title, highlighting that node(s)
                                            and its ancestors. Load-on-demand when expanding nodes is available where supported
                                            (most graphical browsers), falling back to a full-page reload. MediaWiki-supported caching,
                                            aside from squid, has been considered so that unnecessary re-downloads of content are
                                            avoided
                                            where possible. The complete expanded/collapsed state of the treeview persists across page
                                            views
                                            in most situations</p>
                                        <div class="line"></div>
                                        <h2 class="sidebar-heading">Lorem Ipsum Dolor</h2>
                                        <p class="paragraph-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        <div class="line"></div>
                                        <h2 class="sidebar-heading"> Lorem Ipsum Dolor</h2>
                                        <p class="paragraph-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                            sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</p>
                                    </div>
                                </div>
                                <!-- end of main-content -->
                            </div>
                        </div>
                    </div>`
})
export class AppComponent {
    @ViewChild('sidebarTreeviewInstance')
    public sidebarTreeviewInstance?: SidebarComponent;
    @ViewChild('treeviewInstance')
    public treeviewInstance?: TreeViewComponent;
    public width: string = '290px';
    public enableDock: boolean = true;
    public dockSize:string ="44px";
    public mediaQuery: string = ('(min-width: 600px)');
    public target: string = '.main-content';
  
    public data: Object[] = [
        {
            nodeId: '01', nodeText: 'Installation', iconCss: 'icon-microchip icon',
        },
        {
            nodeId: '02', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',
        },
        {
            nodeId: '03', nodeText: 'Quick Start', iconCss: 'icon-docs icon',
        },
        {
            nodeId: '04', nodeText: 'Components', iconCss: 'icon-th icon',
            nodeChild: [
                { nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '05', nodeText: 'API Reference', iconCss: 'icon-code icon',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '06', nodeText: 'Browser Compatibility', iconCss: 'icon-chrome icon'
        },
        {
            nodeId: '07', nodeText: 'Upgrade Packages', iconCss: 'icon-up-hand icon'
        },
        {
            nodeId: '08', nodeText: 'Release Notes', iconCss: 'icon-bookmark-empty icon'
        },
        {
            nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
        },
        {
            nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
        }
    ];
    public field:Object ={ dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'iconCss' };

    public onCreated(args: any) {
        (this.sidebarTreeviewInstance as SidebarComponent).element.style.visibility = '';
    }
    public onClose(args: any) {
        (this.treeviewInstance as TreeViewComponent).collapseAll();
    }
    openClick() {
        if((this.sidebarTreeviewInstance as SidebarComponent).isOpen)
        {
            (this.sidebarTreeviewInstance as SidebarComponent).hide();
            (this.treeviewInstance as TreeViewComponent).collapseAll();
        }
        else {
            (this.sidebarTreeviewInstance as SidebarComponent).show();
            (this.treeviewInstance as TreeViewComponent).expandAll();
        }  
    }
  };




