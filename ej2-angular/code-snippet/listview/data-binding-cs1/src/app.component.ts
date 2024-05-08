import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ListViewModule } from '@syncfusion/ej2-angular-lists'




import { Component } from '@angular/core';

@Component({
imports: [
        
        ListViewModule
    ],


standalone: true,
    selector: 'my-app',
    template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`,
})

export class AppComponent {
    //define the array of string
    public data: string[] = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];
}



