import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

import 'zone.js';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);