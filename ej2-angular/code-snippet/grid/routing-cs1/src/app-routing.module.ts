import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// Removed internal Syncfusion imports from routing module; feature modules should import GridModule in AppModule.

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optional: Redirect to 'home' for the empty path
  { path: '**', redirectTo: '/home' }, // Optional: Redirect to 'home' for unknown routes 
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
