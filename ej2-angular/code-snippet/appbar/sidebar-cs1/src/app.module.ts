import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBarModule, SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, AppBarModule, ButtonModule, SidebarModule, TreeViewModule, TextBoxModule ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }