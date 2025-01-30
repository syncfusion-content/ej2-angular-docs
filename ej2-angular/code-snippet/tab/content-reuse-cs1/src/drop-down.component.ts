import { Component, Input, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

export let ddlObject: DropDownListComponent;

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class DropDownComponent  {
  target: string = (document.querySelector('.e-toolbar-item.e-active .e-tab-text') as Element).innerHTML;
  @ViewChild('samples') ddlObj?: DropDownListComponent;

  public height: string = '220px';
     // defined the array of data
  @Input() data?: string[];
   public changed(e: any){
    ddlObject = this.ddlObj as DropDownListComponent;   
  }
}
