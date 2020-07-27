import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterModule } from './register/register.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './register/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
const routes: Routes = [
  {
      path: '',
      component: SignupComponent
  }
];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    RegisterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFilm);
 }}
