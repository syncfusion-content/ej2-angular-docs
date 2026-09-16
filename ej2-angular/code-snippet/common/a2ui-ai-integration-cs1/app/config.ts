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
import { postAgentEnvelope } from './agent';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: A2UI_RENDERER_CONFIG,
      useValue: {
        catalogs: [syncfusionCatalog],
        actionHandler: (action: unknown): void => {
          postAgentEnvelope({
            jsonrpc: '2.0',
            id: `req-${Date.now()}`,
            method: 'message/send',
            params: {
              message: {
                kind: 'message',
                messageId: `msg-${Date.now()}`,
                role: 'user',
                parts: [{ data: action }],
              },
            },
          });
        },
      },
    },
    A2uiRendererService,
  ],
};