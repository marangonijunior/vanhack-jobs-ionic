import { Component } from '@angular/core';
import { NavController, ToastController, Nav, Platform } from 'ionic-angular';
import { RestProvider } from '../../provider/rest-provider';
import { LinkedIn } from '@ionic-native/linkedin';

import { DetailPage } from '../detail/detail';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  counter = 0;
  search = "";
  listJobs:Array<any> = [];
  buttonAdd = false;
  noMoreItemsAvailable = false;
  constructor(
    public navCtrl: NavController,
    private serve: RestProvider,
    public nav: Nav,
    private linkedin: LinkedIn,
    public toastCtrl: ToastController,
    public platform: Platform
  ) {
  }

  ionViewDidLoad() {
  }

  getJobs(){
    this.counter = 0;
    let body = {
      "search": this.search,
      "counter": this.counter
    }
    this.serve.post("jobs/search",body).subscribe(
      result => {
        if(!result.err){
          this.listJobs = result.data;
        }else{
          this.listJobs = [];
          this.presentToast(result.msg);
        }
      },
      err => {
        this.presentToast("Happened some wrong, sorry.");
      }
    );
  }

  selectJob(item){
    this.nav.push(DetailPage, item);
  }

  doInfinite(infiniteScroll) {
    this.counter = this.listJobs.length;
    let body = {
      "search": this.search,
      "counter": this.counter
    }

    if (this.noMoreItemsAvailable == false) { //condition when to stop
      this.serve.post("jobs/search",body).subscribe(
        result => {
          if(!result.err){
            if(result.data.length == 0){
              this.noMoreItemsAvailable = true;
              infiniteScroll.complete();
            }else{
              this.listJobs.push.apply(this.listJobs, result.data);
              infiniteScroll.complete();
            }
          }else{
            this.presentToast("No more data.");
            this.noMoreItemsAvailable = true;
            infiniteScroll.complete();
          }
        },
        err => {
          this.presentToast("Happened some wrong, sorry.");
        }
      );
    }else{

       infiniteScroll.complete();
    }
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
