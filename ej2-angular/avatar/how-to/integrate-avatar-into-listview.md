---
layout: post
title: Integrate avatar into listview in Angular Avatar component | Syncfusion
description: Learn here all about Integrate avatar into listview in Syncfusion Angular Avatar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Integrate avatar into listview 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate avatar into listview in Angular Avatar component

Avatar is integrated into the listview to create contacts applications. The `xsmall` size avatar is
used to match the size of the list item. Letters and images are also used as avatar content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id="letterAvatarList">
        <ejs-listview id='letterAvatarList' [dataSource]='dataSource' [headerTitle]='headerTitle' [showHeader]='true' [sortOrder]='sortOrder'>
            <ng-template #template let-dataSource="">
                <div class="listWrapper">
                    <span class="e-avatar e-avatar-small e-avatar-circle {{dataSource.color}}" *ngIf="dataSource.avatar !== ''">{{dataSource.avatar}}</span>
                    <span class="{{dataSource.pic}} e-avatar e-avatar-small e-avatar-circle" *ngIf="dataSource.pic !== '' "> </span>
                    <span class="text">{{dataSource.text}}</span>
                </div>
            </ng-template>
        </ejs-listview>
    </div>
    `
})

export class AppComponent { 
     // Listview datasource with avatar and image source fields
     public dataSource?: { [key: string]: Object; }[] = [
        { id: 's_01', text: 'Robert', avatar: '', pic: 'pic04', color: '' },
        { id: 's_02', text: 'Nancy', avatar: 'N', pic: '', color: 'green' },
        { id: 's_05', text: 'John', pic: 'pic01', avatar: '', color: '' },
        { id: 's_03', text: 'Andrew', avatar: 'A', pic: '', color: 'blue' },
        { id: 's_06', text: 'Michael', pic: 'pic02', avatar: '', color: '' },
        { id: 's_07', text: 'Steven', pic: 'pic03', avatar: '', color: '' },
        { id: 's_08', text: 'Margaret', avatar: 'M', pic: '', color: 'red' }
    ];

    public headerTitle: string = 'Contacts';
    public sortOrder: string = 'Ascending';
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/avatar/listview-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/listview-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/listview-cs2" %}
