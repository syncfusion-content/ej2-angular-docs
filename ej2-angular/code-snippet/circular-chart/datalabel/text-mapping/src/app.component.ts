import { Component, OnInit } from '@angular/core';
import { CircularChart3DTextRenderEventArgs } from '@syncfusion/ej2-charts';

@Component({
  selector: 'app-container',
  template: `<ejs-circularchart3d style='display:block;' align='center' [tilt]='tilt' [legendSettings]="legendSettings">
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' [dataLabel]='dataLabel'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
  public dataSource?: Object[];
  public legendSettings?: Object;
  public dataLabel?: Object;
  public tilt?: number;
  ngOnInit(): void {
    this.dataSource = [
      { x: 'Jan', y: 13, text: 'Jan: 13' },
      { x: 'Feb', y: 13, text: 'Feb: 13' },
      { x: 'Mar', y: 17, text: 'Mar: 17' },
      { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }];
    this.legendSettings = { visible: false };
    this.dataLabel = {
      visible: true,
      name: 'text',
    };
    this.tilt = -45
  }
}
