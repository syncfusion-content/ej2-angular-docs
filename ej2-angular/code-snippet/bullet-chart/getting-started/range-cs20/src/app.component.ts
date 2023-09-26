


import { Component } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-bulletchart id='localData' valueField='completedStories' targetField='requiredStories'
category='name' height='400px' [minimum]='minimum' [maximum]='maximum' [interval]='interval'
title='Sprint Planning' titlePosition='Top' [dataSource]='data' [animation]='animation'>
<e-bullet-range-collection>
    <e-bullet-range end='25' color='#ebebeb'></e-bullet-range>
    <e-bullet-range end='37' color='#d8d8d8'></e-bullet-range>
    <e-bullet-range end='45' color='#7f7f7f'></e-bullet-range>
</e-bullet-range-collection>
</ejs-bulletchart>`
})
export class AppComponent {
    public minimum: number = 5;
    public maximum: number = 45;
    public interval: number = 5;
    public animation: AnimationModel = { enable: false }
    public data: Object[] = [
        {
            requiredStories: 20,
            completedStories: 25,
            name: 'David'
        },
        {
            requiredStories: 25,
            completedStories: 20,
            name: 'Asif'
        },
        {
            requiredStories: 15,
            completedStories: 10,
            name: 'Thomas'
        },
        {
            requiredStories: 40,
            completedStories: 39,
            name: 'Rohit'
        },
        {
            requiredStories: 35,
            completedStories: 40,
            name: 'Virat'
        },
        {
            requiredStories: 28,
            completedStories: 25,
            name: 'Jude'
        },
        {
            requiredStories: 10,
            completedStories: 18,
            name: 'Warner'
        },
        {
            requiredStories: 30,
            completedStories: 28,
            name: 'Malik'
        }
    ];
}


