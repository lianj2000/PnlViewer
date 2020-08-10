import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PnlsummaryComponent } from './pnlsummary/pnlsummary.component';
import { PnldetailComponent } from './pnldetail/pnldetail.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptionBasicAuthService } from './service/http/http-interception-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    WelcomeComponent,
    PnlsummaryComponent,
    PnldetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],

  providers: [ 
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptionBasicAuthService, multi: true}
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
