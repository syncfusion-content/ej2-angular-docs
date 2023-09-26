


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div id="skeletonCard">
        <div class='cardProfile'>
            <ejs-skeleton id="cardProfile" shape="Circle" width="60px"></ejs-skeleton>
        </div>
        <div class="cardinfo">
            <ejs-skeleton id="text1" width="30%" height='15px'></ejs-skeleton><br/>
            <ejs-skeleton id="text2" width="15%" height='15px'></ejs-skeleton>
        </div>
        <div class="cardContent">
            <ejs-skeleton id="cardImage" shape="Rectangle" width="100%" height='150px'></ejs-skeleton>
        </div>
        <div class="cardoptions">
            <ejs-skeleton id="rightOption" shape="Rectangle" width="20%" height='32px'></ejs-skeleton>
            <ejs-skeleton id="leftOption" shape="Rectangle" width="20%" height='32px'></ejs-skeleton>
        </div>
    </div>`
    })

export class AppComponent {}


