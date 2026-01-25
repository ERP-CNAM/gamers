import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { environment } from '../environments/environment';
import { AuthMockService } from '../services/auth-mock.service';
import { AuthApiService } from '../services/auth-api.service';
import { provideHttpClient } from '@angular/common/http';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionMockService } from '../services/subscription-mock.service';
import { SubscriptionApiService } from '../services/subscription-api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: AuthService,
      useClass: environment.useMock ? AuthMockService : AuthApiService,
    },
    {
      provide: SubscriptionService,
      useClass: environment.useMock ? SubscriptionMockService : SubscriptionApiService
    },
  ],
};
