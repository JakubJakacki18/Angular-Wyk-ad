import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
// import localePlExtra from '@angular/common/locales/extra/pl';

// registerLocaleData(localePl, 'pl-PL', localePlExtra);



registerLocaleData(localePl, 'pl');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
