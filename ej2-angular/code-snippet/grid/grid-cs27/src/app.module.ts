import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { GridModule} from "@syncfusion/ej2-angular-grids";
import { AppComponent } from "./app.component";
import { TooltipAllModule } from "@syncfusion/ej2-angular-popups";

/**
 * Module
 */
@NgModule({
  imports: [BrowserModule,TooltipAllModule, GridModule,  FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
