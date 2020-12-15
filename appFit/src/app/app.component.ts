import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [

    {
      title: 'Calcular Calorias ',
      url: '/calcular-calorias',
      icon: 'fast-food'
    },
    {
      title: 'Calcular Nutrientes',
      url: '/calcular-nutrientes',
      icon: 'fish'
    },
    {
      title: 'Calcular Taxa Metabolica',
      url: '/calcular-taxa-metabolica',
      icon: 'flash'
    },
    {
      title: 'Gerar Treino',
      url: '/gerar-treino',
      icon: 'barbell'
    },
    {
      title: 'Calcular % de Gordura',
      url: '/calcular-rmf',
      icon: 'accessibility'
    }
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
