import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

// Modules
import { CodebookModule } from './codebook/codebook.module';

// App components
import { HeaderComponent } from './components/header/header.component';

// Views
import { IndexView } from './views/index/index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthView } from './views/auth/auth.component';
import { ButtonComponent } from './shared/button/button.component';

/*
  Configurations
*/

const toastrOptions = {
  timeOut: 3000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true,
};

@NgModule({
  declarations: [
    AppComponent,
    // App components
    HeaderComponent,
    // Views
    IndexView,
    AuthView,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,

    CodebookModule,

    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(toastrOptions),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
