import { Component, Input, ViewChild } from '@angular/core';
import { DropDownListComponent, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

export let ddlObject: DropDownListComponent;

@Component({
  selector: 'drop-down',
  standalone: true,
  imports: [DropDownListModule],
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
