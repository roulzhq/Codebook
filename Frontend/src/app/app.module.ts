import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// App components
import { HeaderComponent } from './components/header/header.component';

// Views
import { IndexView } from './views/index/index.component';
import { AboutView } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    // App components
    HeaderComponent,
    // Views
    IndexView,
    AboutView,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
