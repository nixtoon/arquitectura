import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
})
export class RegistroUserPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goTologin() {
    this.navCtrl.navigateForward('/login');
  }

  ngOnInit() {
  }

}
