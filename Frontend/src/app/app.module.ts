import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

// App components
import { HeaderComponent } from './components/header/header.component';

// Views
import { IndexView } from './views/index/index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CodebookView } from './views/codebook/codebook.component';
import { CodebookListView } from './views/codebook-list/codebook-list.component';
import { AuthView } from './views/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    // App components
    HeaderComponent,
    // Views
    IndexView,
    CodebookView,
    CodebookListView,
    AuthView,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
