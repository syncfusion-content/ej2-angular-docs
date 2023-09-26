

import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-app',
    template:
    ` <ejs-progressbar  id='percentage' type='Linear' height='60' value=100>
      </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {}

}


