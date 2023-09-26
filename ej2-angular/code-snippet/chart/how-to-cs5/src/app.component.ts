

import { Component, OnInit, ViewChild } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'app-container',
    template: `<div id="target">
  <ejs-chart align='center' id='chartcontainer' [title]='title' [primaryXAxis]='primaryXAxis'>
    <e-series-collection>
      <e-series [dataSource]='data' type='Column' xName='x' yName='y' name='Germany' width=2>
      </e-series>
    </e-series-collection>
  </ejs-chart>
</div>

<div id='defaultDialog'>
  <ejs-dialog #Dialog [showCloseIcon]='showCloseIcon' [target]='target' [width]='width' [height]='height'
    [visible]='visible' allowDragging=true header='chart 2'>
    <ng-template #content>
      <ejs-chart align='center' id='chartcontainer1' [title]='title' [primaryXAxis]='primaryXAxis' width='350' height='250'>
        <e-series-collection>
          <e-series [dataSource]='data1' type='Column' xName='x' yName='y' name='UK' width=2 fill="blue"> </e-series>
        </e-series-collection>
      </ejs-chart>
    </ng-template>
  </ejs-dialog>
</div>

<button class="e-control e-btn" id='dlgbtn' (click)="BtnClick($event)">Open Dialog</button>
`
})
export class AppComponent {

  public data: Object[] = [
    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 }
  ];
  public data1: Object[] = [
    { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 }
  ];
  @ViewChild('Dialog')
  public Dialog?: DialogComponent;
  public visible: boolean = false;
  public showCloseIcon: Boolean = true;
  public width: string = '500px';
  public height: string = '450px';
  public target: Element = document.getElementById('target') as Element;
  public content: string = '<div id="container2"></div>';
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift'
  };
  public title: string = 'Inflation - Consumer Price';
  public BtnClick = (event: any): void => {
    this.Dialog?.show();
  };
  constructor() {
   //code
  };
}


