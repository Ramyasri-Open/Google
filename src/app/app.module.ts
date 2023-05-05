import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguageComponent } from './language/language.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FirstCapDirective } from './first-cap.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardGuard } from './login-guard.guard';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NavbarComponent,
    LanguageComponent,
    ButtonComponent,
    FooterComponent,
    BodyComponent,
    FirstCapDirective,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LoginGuardGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
