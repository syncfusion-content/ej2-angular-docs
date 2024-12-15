import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatUIModule, UserModel } from '@syncfusion/ej2-angular-interactive-chat';

import { Component } from '@angular/core';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };
    public timeStamp1: Date = new Date("December 25, 2024 7:30");
    public timeStamp2: Date = new Date("December 25, 2024 8:00");
    public timeStamp3: Date = new Date("December 25, 2024 11:00");
    public formatDate(context: any): string {
        const date: Date = new Date(context);
        const day: string = String(date.getDate()).padStart(2, '0');
        const month: string = String(date.getMonth() + 1).padStart(2, '0');
        const year: number = date.getFullYear();
        let hours: number = date.getHours();
        const minutes: string = String(date.getMinutes()).padStart(2, '0');
        const ampm: string = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const formattedDate: string = `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
        return formattedDate;
    }
}
