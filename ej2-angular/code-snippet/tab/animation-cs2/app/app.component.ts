


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DropDownListComponent, DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { Tab, TabComponent, SelectingEventArgs, SelectEventArgs} from '@syncfusion/ej2-angular-navigations';

/**
 * Add nested Tabs
 */

@Component({
    selector: 'app-container',
    template: `<div>  
        <div class="EventLog" id="EventLog" style="word-break: normal;padding: 5px;"><b>{{eventLog}}</b></div>
        <ejs-dropdownlist id='selectDropdown' [dataSource]='dropdownData' (change)='onChange($event)' [value]='value' [fields]='fields' [placeholder]='waterMark' [popupHeight]='height'></ejs-dropdownlist>
        <ejs-tab id="element" #tabObj [items]='tabItems'
        heightAdjustMode= 'Auto' (selecting)="selecting($event)" (selected)="selected($event)">
        </ejs-tab></div>`,
})
export class AppComponent implements OnInit {
  @ViewChild('tabObj')
  public tabObj?: TabComponent;
  public eventLog: string = '';
  public tabItems?: Object[];
  public dropdownData: Object[] = [
    { text: 'India', Id: 0 },
    { text: 'Canada', Id: 1 },
    { text: 'Australia', Id: 2 },
    { text: 'USA', Id: 3 },
    { text: 'London', Id: 4 },
    { text: 'Germany', Id: 5 },
    { text: 'France', Id: 6 },
  ];
  public fields: Object = { text: 'text', value: 'Id' };
  public waterMark: string = 'Select Tab Item using dropdown';
  public value: number = 0;
  public onChange(args: any): void {
    (this.tabObj as TabComponent).select(args.value);
  }
  public ngOnInit(): void {
    this.tabItems = [
      {
        header: { text: 'India' },
        content:
          'India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.',
      },
      {
        header: { text: 'Canada' },
        content:
          'Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north. Major cities include massive Toronto, west coast film centre Vancouver, French-speaking Montréal and Québec City, and capital city Ottawa. Canada vast swaths of wilderness include lake-filled Banff National Park in the Rocky Mountains. It also home to Niagara Falls, a famous group of massive waterfalls.',
      },
      {
        header: { text: 'Australia' },
        content:
          'Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the world sixth-largest country by total area. Neighboring countries include Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east.  <br/><br/>India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia. In the north, Mughal Empire andmarks include Delhis Red Fort complex and massive Jama Masjid mosque, plus Agras iconic Taj Mahal mausoleum. Pilgrims bathe in the Ganges in Varanasi, and Rishikesh is a yoga centre  and base for Himalayan trekking.',
      },
      {
        header: { text: 'USA' },
        content:
          'The United States of America (USA or U.S.A.), commonly called the United States (US or U.S.) and America, is a federal republic consisting of fifty states and a federal district. The 48 contiguous states and the federal district of Washington, D.C. are in central North America between Canada and Mexico. The state of Alaska is west of Canada and east of Russia across the Bering Strait, and the state of Hawaii is in the mid-North Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean.',
      },
      {
        header: { text: 'London' },
        content:
          'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
      },
      {
        header: { text: 'Germany' },
        content:
          'Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.',
      },
      {
        header: { text: 'France' },
        content:
          'France, officially the French Republic is a sovereign state comprising territory in western Europe and several overseas regions and territories. The European part of France, called Metropolitan France, extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean; France covers 640,679 square kilo metres and as of August 2015 has a population of 67 million, counting all the overseas departments and territories.',
      },
    ];
  }

  public selecting(args: SelectingEventArgs) {
    this.getInteractionDetail(args.isInteracted as boolean);
  }
  public selected(args: SelectEventArgs) {
    this.getInteractionDetail(args.isInteracted as boolean);
  }
  public getInteractionDetail(interact: boolean): void {
    let eventlog = interact
      ? 'Tab Item selected by user interaction'
      : 'Tab Item selected by programmatically';
    this.eventLog = eventlog;
  }
}



