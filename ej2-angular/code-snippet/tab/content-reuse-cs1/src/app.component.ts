




import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import { TabComponent, SelectEventArgs  } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Content reuse
 */

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  @ViewChild('element') tabObj?: TabComponent;
  @ViewChild('DatePickertemplateRef') public DatePickertemplate?: TemplateRef<any>;
  @ViewChild('FirstDropDowntemplateRef') public FirstDropDowntemplate?: TemplateRef<any>;
  @ViewChild('SecondDropDowntemplateRef') public SecondDropDowntemplate?: TemplateRef<any>;
  @ViewChild('ThirdDropDowntemplateRef') public ThirdDropDowntemplate?: TemplateRef<any>;

  public firstDropDownData: string[] = [
    'Badminton',
    'Basketball',
    'Cricket',
    'Golf',
    'Hockey',
    'Rugby'
  ];

  public secondDropDownData: string[] = [
    'Cricket',
    'Golf',
    'Hockey',
    'Rugby',
    'Badminton',
    'Basketball'
  ];

  public thirdDropDownData: string[] = [
    'Rugby',
    'Badminton',
    'Basketball',
    'Cricket',
    'Golf',
    'Hockey'
  ];

  public tabItemsHeaderText: Object = [{ 'text': 'DatePicker' }, { 'text': 'Dropdown' }, { 'text': 'Reused Dropdown' }];

  public addButtonClicked(e: any): void {
    var newtabItem = [
      { header: { text: 'DynamicTabItem' }, content: this.ThirdDropDowntemplate }
    ];
    (this.tabObj as TabComponent).addTab(newtabItem as any,1);
  }

  public removeButtonClicked(e: any): void {
    (this.tabObj as TabComponent).removeTab(1);
  }

}





