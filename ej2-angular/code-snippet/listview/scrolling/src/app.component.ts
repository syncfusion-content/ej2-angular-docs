


import { Component, ViewChild } from '@angular/core';
import { ListViewComponent, ScrolledEventArgs } from '@syncfusion/ej2-angular-lists';

@Component({
  selector: 'my-app',
  template: `<div class="grid-container"><div><h3>Chat</h3>
    <ejs-listview id='listview' #list [dataSource]='result' height= 400
    width= 400 cssClass='e-list-template'  (scroll)="onListScrolled($event)" >
    <ng-template #template let-data>
      <div [style.display]="'flex'" [style.justify-content]="data.positionClass === 'right' ? 'flex-end' : ''" class="e-list-wrapper e-list-multi-line">
        <span style="display: block; white-space: normal; max-width: 80%; padding: 10px; background-color: #e0e0e0; border-radius: 10px; word-wrap: break-word;" class="e-list-item-header">
          {{ data.text }}
        </span>
      </div>
    </ng-template>
  </ejs-listview></div></div>`,
  styles: [`.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: center;
  }
  
  h3 {
    margin: 0;
  }
  
  /* Optional: Add styling to headings and divs */
  .grid-container > div {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    background-color: #f4f4f4;
  }`],
})

export class AppComponent {
  @ViewChild('list')
  listViewInstance?: ListViewComponent;
  //define the array of string
  public data: object[] = [{
    text: "Hi Guys, Good morning! \uD83D\uDE0A, I'm very delighted to share with you the news that our team is going to launch a new mobile application",
    positionClass: 'right',
  }, {
    text: "Oh! That's great \uD83D\uDE42",
    positionClass: 'left',
  },
  {
    text: 'That is a good news \uD83D\uDE00',
    templateHeight: '80px',
    positionClass: 'right',
  },
  {
    text: 'What kind of application we are gonna launch? \uD83E\uDD14',
    positionClass: 'left',
  },
  {
    text: 'A kind of "Emergency Broadcast App" like being able to just invite someone to teams without it impacting how many people have official access',
    positionClass: 'right',
  },
  {
    text: 'Who will be the client users for our applications? ',
    positionClass: 'left',
  },
  {
    text: 'Is currently the only way to invite someone through 0365? Just wondering down the road how organization would want to handle that with freelancers, like being able to just invite someone to teams without it impacting how many people have official access \uD83D\uDE14',
    positionClass: 'right',
  },
  {
    text: 'Yes, however, that feature of inviting someone from outside your organization is planned - expected closer to GA next year \uD83D\uDC4D',
    positionClass: 'left',
  },
  {
    text: 'I guess we should switch things over to hear for a while. How long does the trial last? \uD83E\uDD14',
    positionClass: 'right',
  },
  { text: 'I think the trial is 30 days. \uD83D\uDE03', positionClass: 'left' },
  {
    text: 'Only 0365 only members of your organization. They said that they are listening to customer feedback and hinted that guest users would be brought in down the road \uD83D\uDE09',
    positionClass: 'right',
  },
  { text: 'Cool thanks! \uD83D\uDC4C', positionClass: 'left' }
  ];
  public count = 0;
  public itemsRendered = 7;
  public itemsPerScroll = 5;
  public result: { [key: string]: Object; }[] = [{ text: 'text', positionClass: 'positionClass' }];

  ngOnInit() {
    // Initialize the list with the first set of items
    this.result = this.data.slice(0, this.itemsRendered) as { [key: string]: Object }[];
  }

  onListScrolled(args: ScrolledEventArgs): void {
    if (args.scrollDirection === 'Bottom' && args.distanceY < 100) {
      if (this.itemsRendered < this.data.length) {
        const startIndex = this.itemsRendered;
        const endIndex = Math.min(this.itemsRendered + this.itemsPerScroll, this.data.length);
        this.result = this.result.concat(this.data.slice(startIndex, endIndex) as { [key: string]: Object }[]);
        this.listViewInstance?.addItem(this.result);
        this.itemsRendered = endIndex;
      }
    }
  }
}



