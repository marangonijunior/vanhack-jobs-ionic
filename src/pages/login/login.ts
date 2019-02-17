import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Platform } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LinkedIn } from '@ionic-native/linkedin';

@Component({
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private linkedin: LinkedIn,
      public platform: Platform,
      public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.linkedin.getActiveSession().then((active) => {
          if(active){
            this.navCtrl.setRoot(HomePage);
          }
        });
      }
    });
  }

  login(){
    // login
    let scopes:any = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
    this.linkedin.login(scopes, false)
      .then(() => {
          this.presentToast("Well come to Vanhack Jobs.");
          this.navCtrl.setRoot(HomePage);
      })
      .catch(e => console.log('Error logging in', e));
  }

  skip(){
    this.presentToast("Well come to Vanhack Jobs.");
    this.navCtrl.setRoot(HomePage);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
