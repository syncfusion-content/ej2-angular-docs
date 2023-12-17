

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template:   `<div class="e-section-control">
                    <form>
                        <!-- Submit type button -->
                        <button type="submit" ejs-button>Submit</button>

                            <!-- Reset type button -->
                        <button type="reset" ejs-button>Reset</button>
                    </form>
                </div>`
                
})

export class AppComponent { }


