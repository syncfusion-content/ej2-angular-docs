


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // To customize RadioButton appearance
    template: `<ul>
               <!-- Refer the 'e-primary' class details in 'style.css'. -->
               <li><ejs-radiobutton label="Primary" name="custom" cssClass="e-primary"></ejs-radiobutton></li>

               <!-- Refer the 'e-success' class details in 'style.css'. -->
               <li><ejs-radiobutton label="Success" name="custom" cssClass="e-success"></ejs-radiobutton></li>

               <!-- Refer the 'e-info' class details in 'style.css'. -->
               <li><ejs-radiobutton label="Info" name="custom" cssClass="e-info" checked="true"></ejs-radiobutton></li>

               <!-- Refer the 'e-warning' class details in 'style.css'. -->
               <li><ejs-radiobutton label="Warning" name="custom" cssClass="e-warning"></ejs-radiobutton></li>

               <!-- Refer the 'e-danger' class details in 'style.css'. -->
               <li><ejs-radiobutton label="Danger" name="custom" cssClass="e-danger"></ejs-radiobutton></li>

               </ul>`
})

export class AppComponent { }



