import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { JwtInterceptor } from './helpers/jwt.interceptor';
import { HomeComponent, LoginComponent, GiphysComponent } from './components';
import { fakeBackendProvider, JwtInterceptor } from './helpers';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, GiphysComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthenticationService,
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
