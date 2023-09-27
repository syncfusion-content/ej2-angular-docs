import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <Label>Left Label Position</Label><br/>
                  <input ejs-rating id="rating1" value="3" showLabel="true" labelPosition="Left" /><br/>
                  <Label>Right Label Position</Label><br />
                  <input ejs-rating id="rating2" value="3" showLabel="true" /><br/>
                  <Label>Top Label Position </Label><br />
                  <input ejs-rating id="rating3" value="3" showLabel="true" labelPosition="Top" /><br/>
                  <Label>Bottom Label Position</Label><br />
                  <input ejs-rating id="rating4" value="3" showLabel="true" labelPosition="Bottom" />
                </div>`
})

export class AppComponent { }