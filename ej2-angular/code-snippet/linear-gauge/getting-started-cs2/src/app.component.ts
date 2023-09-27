


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-lineargauge id="gauge-container" [title]='Title'>
    </ejs-lineargauge>`
})
export class AppComponent implements OnInit {
    public Title?: string;
    ngOnInit(): void {
        // Title for linear gauge
        this.Title = 'linear gauge';
    }
}



