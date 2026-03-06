import { bootstrapApplication } from '@angular/platform-browser';
import { MyApp } from './app.component';
import 'zone.js';
bootstrapApplication(MyApp).catch((err) => console.error(err));