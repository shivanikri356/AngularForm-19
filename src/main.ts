import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environment/environment';



// Check if the environment is set to production
if (environment.production) {
  enableProdMode();  // Enable production mode
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
