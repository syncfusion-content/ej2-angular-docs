import { DataService } from './data';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(DataService))
  ]
};
