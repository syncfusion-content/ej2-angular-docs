import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                    <Label>Full Precision</Label><br />
                    <input ejs-rating id="rating1" precision="Full" value="3"  /><br />
                    <Label>Half Precision</Label><br />
                    <input ejs-rating id="rating2" precision="Half" value="2.5" /><br />
                    <Label>Quarter Precision</Label><br />
                    <input ejs-rating id="rating3" precision="Quarter" value="3.75" /><br />
                    <Label>Exact Precision</Label><br />
                    <input ejs-rating id="rating4" precision="Exact" value="2.3" /><br />
                </div>`
})

export class AppComponent { }