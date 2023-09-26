

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template:   `<form>
                    <!-- Submit type button -->
                    <button type="submit" ejs-button>Submit</button>

                    <!-- Reset type button -->
                    <button type="reset" ejs-button>Reset</button>
                </form>`
})

export class AppComponent { }


