import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import {provideNativeDateAdapter} from '@angular/material/core';
import { tokenHttpInterceptor } from './services/token-http-interceptor';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(withInterceptors([tokenHttpInterceptor])),
    provideNativeDateAdapter(),
   
  ],
};
