


import { Component, ViewChild } from '@angular/core';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { AutoCompleteComponent, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `<ejs-autocomplete id='country' #local [dataSource]='countries' [fields]='localFields' (change)='onChange()' (filtering)='onFiltering($event)' (focus)='onFocus()'></ejs-autocomplete>`,
})
export class AppComponent {
  @ViewChild('local')
  public localObj : AutoCompleteComponent | any;
  public suggestList: Array<string> = [];
  public countries?: { [key: string]: Object; }[] = [
    { Name: 'Australia', Code: 'AU' },
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' },
    { Name: 'Denmark', Code: 'DK' },
    { Name: 'France', Code: 'FR' },
    { Name: 'Finland', Code: 'FI' }
  ];
  // maps the local data column to fields property
  public localFields: Object = { value: 'Name' };
  onChange() {
    localStorage.setItem("value", this.localObj.value as string);
    if (localStorage.getItem('value') !== 'null') {
      this.suggestList.push((localStorage as any).getItem('value'));
      var proxy = this;
      this.suggestList = this.suggestList.filter(function (item, pos, self) {
        return proxy.suggestList.indexOf(item) == pos;
      });
    }
  }
  onFocus() {
    if (this.suggestList.length > 0) {
      (this.localObj.dataSource as any) = this.suggestList;
      this.localObj.dataBind();
      let keyEventArgs: any = { preventDefault: (): void => { }, action: 'down', keyCode: 40, type: null };
      (this.localObj as any).onFilterUp(keyEventArgs);
      (this.localObj as any).popupObj.element.classList.add('e-suggestion');
    }
  }
  onFiltering(e: FilteringEventArgs){
    let query: any = new Query();
    query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
    e.updateData((this as any).countries, query);
    (this.localObj as any).popupObj.element.classList.remove('e-suggestion');
        }
}



