import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, UserHandleModel, SelectorModel, DiagramModule, UserHandleEventsArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],
    providers: [ ],
    standalone: true,
    selector: 'app-container',

  template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="600px" [selectedItems]='selectedItems' (onUserHandleMouseDown) = "onUserHandleMouseDown($event)" (onUserHandleMouseEnter)="onUserHandleMouseEnter($event)" (onUserHandleMouseUp)="onUserHandleMouseUp($event)" (onUserHandleMouseLeave)="onUserHandleMouseLeave($event)" >
      <e-nodes>
        <e-node id='node1' [offsetX]=250 [offsetY]=250 [height]=100 [width]= 100 ></e-node>
      </e-nodes>
    </ejs-diagram>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
   public diagram?: DiagramComponent;

  public userHandles: UserHandleModel[] = [
    {
      name: 'clone',
      pathData:
        'M0,3.42 L1.36,3.42 L1.36,12.39 L9.62,12.39 L9.62,13.75 L1.36,13.75 C0.97,13.75,0.65,13.62,0.39,13.36 C0.13,13.1,0,12.78,0,12.39 Z M4.13,0 L12.39,0 C12.78,0,13.1,0.13,13.36,0.39 C13.62,0.65,13.75,0.97,13.75,1.36 L13.75,9.62 C13.75,10.01,13.62,10.33,13.36,10.6 C13.1,10.87,12.78,11.01,12.39,11.01 L4.13,11.01 C3.72,11.01,3.39,10.87,3.13,10.6 C2.87,10.33,2.74,10.01,2.74,9.62 L2.74,1.36 C2.74,0.97,2.87,0.65,3.13,0.39 C3.39,0.13,3.72,0,4.13,0 Z ',
      offset: 1,
      //Sets the border width of user handle
      borderWidth: 5,
      //Sets the border color of user handle
      borderColor: '#64Abbb',
      //Sets the background color of user handle
      backgroundColor: 'yellow',
      //Sets the path data color of user handle
      pathColor: 'green',
      //Sets the size of user handle
      size: 40,
      //Sets the visibility of user handle
      visible: true,
    },
  ];
//Define user handles in selectedItems property
  public selectedItems: SelectorModel = {
    userHandles: this.userHandles
  };

  public onUserHandleMouseDown(args: UserHandleEventsArgs)
  {
    if (args.element) {
        //To clone the selected node
        ((this.diagram)as DiagramComponent).copy();
        ((this.diagram)as DiagramComponent).paste();
      }
  };
  public onUserHandleMouseEnter(args: UserHandleEventsArgs)
  {
    if (args.element) {
      args.element.pathColor = 'red';
      args.element.backgroundColor = 'pink';
      }
  };
  public onUserHandleMouseUp(args: UserHandleEventsArgs)
  {
     //Customize
  };
  public onUserHandleMouseLeave(args: UserHandleEventsArgs)
  {
    if (args.element) {
      args.element.pathColor = 'green';
      args.element.backgroundColor = 'yellow';
      }
  };


}





