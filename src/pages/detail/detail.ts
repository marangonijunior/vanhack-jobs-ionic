import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

@Component({
  templateUrl: 'detail.html',
})
export class DetailPage {
  job:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nav: Nav
  ) {
    this.job = this.navParams.data;
  }

  ionViewDidLoad() {

  }

}
