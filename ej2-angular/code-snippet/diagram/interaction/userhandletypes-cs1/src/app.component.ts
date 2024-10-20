import { DiagramModule,  } from '@syncfusion/ej2-angular-diagrams';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, UserHandleModel, SelectorModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],
    providers: [ ],
    standalone: true,
    selector: 'app-container',

  template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="600px" [selectedItems]='selectedItems'  >
      <e-nodes>
        <e-node id='node1' [offsetX]=200 [offsetY]=200 [height]=100 [width]= 100 ></e-node>
      </e-nodes>
      <ng-template #userHandleTemplate >
            <input id="colorPicker" type="color"  value="#008000"/>
      </ng-template>
    </ejs-diagram>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
   public diagram?: DiagramComponent;

  public userHandles: UserHandleModel[] = [
    {
      name: 'handle1',
      pathData:
        'M0,3.42 L1.36,3.42 L1.36,12.39 L9.62,12.39 L9.62,13.75 L1.36,13.75 C0.97,13.75,0.65,13.62,0.39,13.36 C0.13,13.1,0,12.78,0,12.39 Z M4.13,0 L12.39,0 C12.78,0,13.1,0.13,13.36,0.39 C13.62,0.65,13.75,0.97,13.75,1.36 L13.75,9.62 C13.75,10.01,13.62,10.33,13.36,10.6 C13.1,10.87,12.78,11.01,12.39,11.01 L4.13,11.01 C3.72,11.01,3.39,10.87,3.13,10.6 C2.87,10.33,2.74,10.01,2.74,9.62 L2.74,1.36 C2.74,0.97,2.87,0.65,3.13,0.39 C3.39,0.13,3.72,0,4.13,0 Z ',
      tooltip: { content: 'Path data user handle' },
      offset: 1,
      side: 'Bottom',
    },
    {
      name: 'handle2',
      source:
        'data:image/png;base64,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',
      tooltip: { content: 'Image user handle' },
      offset: 0,
      side: 'Bottom',
    },
    {
      name: 'handle3',
      content:
        '<g><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522' +
        'c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982' +
        'c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537' +
        'c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z' +
        ' M68.129,53.938' +
        'c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537' +
        'c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333' +
        'c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882' +
        'c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977' +
        'c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344' +
        'c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223' +
        'C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107' +
        'C68.398,56.537,68.398,54.386,68.129,53.938z"></path></g>',
      tooltip: { content: 'Content user handle' },
      offset: 0,
      side: 'Top',
    },
    {
      name: 'handle4',
      tooltip: { content: 'Template user handle' },
      offset: 1,
      side: 'Top',
    },
  ];
//Define user handles in selectedItems property
  public selectedItems: SelectorModel = {
    userHandles: this.userHandles
  };

}
