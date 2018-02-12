import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LinkedIn } from '@ionic-native/linkedin';

import { Vanhack } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DetailPage } from '../pages/detail/detail';

import { RestProvider } from "../provider/rest-provider";


@NgModule({
  declarations: [
    Vanhack,
    HomePage,
    LoginPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(Vanhack)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Vanhack,
    HomePage,
    LoginPage,
    DetailPage
  ],
  providers: [
    LinkedIn,
    RestProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
