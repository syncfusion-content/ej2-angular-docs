

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
              <form>
                <div class='e-btn-group'>
                    <input type="radio" id="male" name="gender" value="male" checked/>
                    <label class="e-btn" for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label class="e-btn" for="female">Female</label>
                    <input type="radio" id="transgender" name="gender" value="transgender"/>
                    <label class="e-btn" for="transgender">Transgender</label>
                </div>
                <button class='e-btn e-primary'>Submit</button>
            </form>`
})

export class AppComponent {
}


