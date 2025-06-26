import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAuth0({
      domain: 'alemar-web.us.auth0.com',
      clientId: 'DUYtSeTT74GCB856BnSbDQS9dyH3OWyu',
      authorizationParams: { redirect_uri: window.location.origin },
    }),
  ],
};
