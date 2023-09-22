import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { GridModule} from "@syncfusion/ej2-angular-grids";
import { AppComponent } from "./app.component";
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";
/**
 * Module
 */
@NgModule({
  imports: [BrowserModule, GridModule,  FormsModule, ButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}