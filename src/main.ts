import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Router } from '@angular/router';
import{RouterModule,Routes} from '@angular/router';
import { AppComponent } from "./app/app.component";
import { PageNotFoundComponent } from "./app/app.notfound";


platformBrowserDynamic().bootstrapModule(AppModule);
