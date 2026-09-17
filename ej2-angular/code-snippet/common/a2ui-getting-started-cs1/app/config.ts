import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  A2UI_RENDERER_CONFIG,
  A2uiRendererService,
} from '@a2ui/angular/v0_9';
import { syncfusionCatalog } from '@syncfusion/ej2-angular-a2ui';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: A2UI_RENDERER_CONFIG,
      useValue: {
        catalogs: [syncfusionCatalog],
        actionHandler: (action: unknown): void => {
          console.log('[Sample-1] surface action:', action);
        },
      },
    },
    A2uiRendererService,
  ],
};