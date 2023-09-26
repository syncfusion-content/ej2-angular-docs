


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // To customize CheckBox appearance
    template: `<ul>
               <!-- Refer the 'e-primary' class details in 'style.css'. -->
               <li><ejs-checkbox label="Primary" cssClass="e-primary" [checked]="true"></ejs-checkbox></li>

               <!-- Refer the 'e-success' class details in 'style.css'. -->
               <li><ejs-checkbox label="Success" cssClass="e-success" [checked]="true"></ejs-checkbox></li>

               <!-- Refer the 'e-info' class details in 'style.css'. -->
               <li><ejs-checkbox label="Info" cssClass="e-info" [checked]="true"></ejs-checkbox></li>

               <!-- Refer the 'e-warning' class details in 'style.css'. -->
               <li><ejs-checkbox label="Warning" cssClass="e-warning" [checked]="true"></ejs-checkbox></li>

               <!-- Refer the 'e-danger' class details in 'style.css'. -->
               <li><ejs-checkbox label="Danger" cssClass="e-danger" [checked]="true"></ejs-checkbox></li>

               </ul>`
})

export class AppComponent { }



