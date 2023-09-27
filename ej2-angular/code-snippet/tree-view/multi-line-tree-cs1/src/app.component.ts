


import { Component, Inject, ViewChild } from '@angular/core';
import { TreeViewComponent, NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
/**
 * Hovering multiple line treeview
 */
@Component({
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview id='treeElement' #treevalidate [fields]='field'  (nodeSelecting)='onSelect($event)' cssClass="customTree" (created)="onCreate($event)"></ejs-treeview></div>`
})
export class AppComponent {

   // Data source for TreeView component
   public hierarchicalData: Object[] = [
     {
            id: 1, name: 'Web Control sWeb ControlsWeb ControlsWeb ControlsWeb ControlsWeb ControlsWeb ControlsWeb Controls', expanded: true,
            child: [
                {
                    id: 2, name: 'CalendarCalendarCalendarCalendarCalendarCalendarCalendarCalendarCalendarCalendarCalendarCalendarCalendar', child: [
                        { id: 7,  name: 'Constructors' },
                        { id: 8,  name: 'Properties' },
                        { id: 9,  name: 'Methods' },
                        { id: 10, name: 'Events' }
                    ]
                },
                {
                    id: 3, name: 'Data Grid', child: [
                        { id: 11, name: 'Constructors' },
                        { id: 12, name: 'Fields' },
                        { id: 13, name: 'Properties' },
                        { id: 14, name: 'Methods' },
                        { id: 15, name: 'Events' }
                    ]
                },
                {
                    id: 4, name: 'DropDownList', child: [
                        { id: 16, name: 'Constructors' },
                        { id: 17, name: 'Properties' },
                        { id: 18, name: 'Methods' }
                    ]
                },
                {
                    id: 5,  name: 'Menu', child: [
                        { id: 19, name: 'Constructors' },
                        { id: 20, name: 'Fields' },
                        { id: 21, name: 'Properties' },
                        { id: 22, name: 'Methods' },
                        { id: 23, name: 'Events' }
                    ]
                }
            ]
        },
        {
            id: 24, name: 'Web Controls',
            child: [
                {
                    id: 25, name: 'Calendar', child: [
                        { id: 26, name: 'Constructors' },
                        { id: 27, name: 'Properties' },
                        { id: 28, name: 'Methods' },
                        { id: 29, name: 'Events' }
                    ]
                },
                {
                    id: 30, name: 'Data Grid', child: [
                        { id: 31,  name: 'Constructors' },
                        { id: 32,  name: 'Fields' },
                        { id: 33,  name: 'Properties' },
                        { id: 34,  name: 'Methods' },
                        { id: 35,  name: 'Events' }
                    ]
                }
            ]
        }
    ];


    public field:Object ={  dataSource: this.hierarchicalData , id: 'id', text: 'name', child: 'child' };

    @ViewChild ('treevalidate') tree?: TreeViewComponent;

    // Triggers on node selection
    public onSelect(args: NodeSelectEventArgs): void {
      this.setHeight(args.node);
    }
    public onCreate(args: any) {
    // Triggers on mouse hover/keydown event
    ['mouseover','keydown'].forEach( evt =>
        this.tree?.element.addEventListener(evt, (event)=>{this.setHeight(event.target); }));
    }


    // Sets e-fullrow to be the same as e-text-content
    public setHeight(element: any) {
      if(this.tree?.fullRowSelect) {
        if(element?.classList.contains("e-treeview")) {
          element = element.querySelector(".e-node-focus").querySelector(".e-fullrow");
        }
        else if(element.classList.contains("e-list-parent")) {
          element = element.querySelector(".e-fullrow");
        }
        else if(element.classList.value != ("e-fullrow") && element.closest(".e-list-item")) {
          element = element.closest(".e-list-item").querySelector(".e-fullrow");
        }
        if(element.nextElementSibling)
          element.style.height = element.nextElementSibling.offsetHeight +"px";
      }
    }
}



