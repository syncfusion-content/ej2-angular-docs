import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import 'zone.js';
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));