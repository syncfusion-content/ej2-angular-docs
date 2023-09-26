


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
        <ul id="skeleton-list" class="e-card">
            <li>
                <div class='listProfile'>
                    <ejs-skeleton shape="Circle" width="40px" shimmerEffect='Pulse'></ejs-skeleton>
                </div>
                <div>
                    <ejs-skeleton width="60%" height='15px' shimmerEffect='Pulse'></ejs-skeleton><br>
                    <ejs-skeleton width="40%" height='15px' shimmerEffect='Pulse'></ejs-skeleton>
                </div>
            </li>
            <li>
                <div class='listProfile'>
                    <ejs-skeleton shape="Circle" width="40px" shimmerEffect='Pulse'></ejs-skeleton>
                </div>
                <div>
                    <ejs-skeleton width="60%" height='15px' shimmerEffect='Pulse'></ejs-skeleton><br>
                    <ejs-skeleton width="40%" height='15px' shimmerEffect='Pulse'></ejs-skeleton>
                </div>
            </li>
        </ul>
    </div>`
    })

export class AppComponent {}


