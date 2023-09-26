


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
        <div className='control-group' style="text-align: center; margin: 100px auto;">
            Best Employee of the year: <ejs-inplaceeditor id="element" type="DropDownList" mode="Inline" value="Andrew Fuller" name='Employee' [url]="url" primaryKey="Employee" adaptor="UrlAdaptor" [model]="model" (actionSuccess)='actionSuccess($event)'></ejs-inplaceeditor>
          </div>
         <table style='margin:auto;width:50%'>
        <tr>
            <td style="text-align: left">
               Old Value :
            </td>
            <td id="oldValue" style="text-align: left">
            </td>
        </tr>
        <tr>
            <td style="text-align: left">
               New Value :
            </td>
            <td id="newValue" style="text-align: left">
                Andrew Fuller
            </td>
        </tr>
       </table>
     </div>
    `
})

export class AppComponent {
  public frameWorkList: string[] = ['Andrew Fuller', 'Janet Leverling', 'Laura Callahan', 'TypeScript', 'Margaret Hamilt', 'Michael Suyama', 'Nancy Davloio', 'Robert King'];
  public model: Object = {  dataSource: this.frameWorkList, placeholder: 'Select employee',  popupHeight: '200px' };
  public url: String = "https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData";
  public actionSuccess(e: any): void {
      let newEle: HTMLElement = document.getElementById('newValue') as HTMLElement;
      let oldEle: HTMLElement = document.getElementById('oldValue') as HTMLElement;
      oldEle.textContent = newEle.textContent;
      newEle.textContent = e.value;
    }
}



