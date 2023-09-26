


import { Component} from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';

@Component({
    selector: 'my-app',
    template: `<ejs-listview id='List' [dataSource]='dataSource' [template]='templatecheck ? mob_template : win_template' headerTitle='Syncfusion Blog' [showHeader]='true'>
        <ng-template #mob_template let-dataSource="">
    <div class="settings">
        <div id="postContainer">
            <div id="postImg">
                <img src={{dataSource.image}} /></div>
            <div id="content">
                <div id="info">
                    <div id="logo">
                        <div id="share">
                            <span class="share"></span> </div>
                        <div id="comments"> <span class="comments"></span> </div>
                        <div id="bookmark"> <span class="bookmark"></span> </div>
                    </div>
                </div>
                <div class="name">{{dataSource.Name}}</div>
                <div class="description">{{dataSource.content}}</div>
                <div class="timeStamp">{{dataSource.timeStamp}} </div>
            </div>
        </div>
    </div>
</ng-template>
<ng-template #win_template let-dataSource="">
    <div class="settings">
        <div id="postContainer">
            <div id="postImg">
                <img src={{dataSource.image}} /></div>
            <div id="content">
                <div class="name">{{dataSource.Name}}</div>
                <div class="description">{{dataSource.content}}</div>
                <div id="info">
                    <div id="logo">
                        <div id="share">
                            <span class="share"></span> </div>
                        <div id="comments"> <span class="comments"></span> </div>
                        <div id="bookmark"> <span class="bookmark"></span> </div>
                    </div>
                    <div class="timeStamp">{{dataSource.timeStamp}} </div>
                </div>
            </div>
        </div>
    </div>
</ng-template></ejs-listview>`
})

export class AppComponent {
   //Define an array of JSON data
    public dataSource: any = [
        { Name: 'IBM Open-Sources Web Sphere Liberty Code', content: 'In September, IBM announced that it would be open-sourcing the code for WebSphere...', id: '1', image: 'https://ej2.syncfusion.com/demos/src/listview/images/1.png', timeStamp: 'Syncfusion Blog - October 19, 2017' },
        { Name: 'Must Reads: 5 Big Data E-books to upend your development', content: 'Our first e-book was published in May 2012-jQuery Succinctly was the start of over...', id: '2', image: 'https://ej2.syncfusion.com/demos/src/listview/images/2.png', timeStamp: 'Syncfusion Blog - October 18, 2017'  },
        { Name: 'The Syncfusion Global License: Your Questions, Answered ', content: 'Syncfusion recently hosted a webinar to cover the ins and outs of the Syncfusion global...', id: '4', image: 'https://ej2.syncfusion.com/demos/src/listview/images/3.png', timeStamp: 'Syncfusion Blog - October 18, 2017'  },
        { Name: 'Know: What is Coming from Microsoft this Fall ', content: 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform...', id: '5', image: 'https://ej2.syncfusion.com/demos/src/listview/images/6.png', timeStamp: 'Syncfusion Blog - October 17, 2017'  }
    ];
public fields: Object = { text: 'Name' };
public templatecheck?:boolean;
constructor(){
    this.templatecheck = Browser.isDevice;
}
}



