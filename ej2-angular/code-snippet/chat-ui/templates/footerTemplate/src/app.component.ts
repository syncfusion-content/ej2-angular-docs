import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatUIModule, ChatUIComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel } from '@syncfusion/ej2-interactive-chat';
import { Component } from '@angular/core';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('chatUIComponent')
    public chatUIComponent!: ChatUIComponent;
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };
    public buttonClick = () => {
        const textArea = document.getElementById('chatTextArea') as HTMLTextAreaElement;
        if (textArea && textArea.value.length > 0) {
          let value: string = textArea.value;
          textArea.value = '';
          this.chatUIComponent.addMessage(
            {
                author: this.michaleUserModel,
                text: value
            }
          );
        }
    };
}
