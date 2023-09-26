


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    //Name and Value attribute in form submit.
    template: `<form>
                <ul>
                    <li><ejs-checkbox name="Sport" value="Cricket" label="Cricket" [checked]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox name="Sport" value="Hockey" label="Hockey" [checked]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox name="Sport" value="Tennis" label="Tennis" [disabled]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox name="Sport" value="Basketball" label="Basketball"></ejs-checkbox></li>

                    <li><button ejs-button [isPrimary]="true">Submit</button></li>
                </ul>
               </form>`
})

export class AppComponent { }



