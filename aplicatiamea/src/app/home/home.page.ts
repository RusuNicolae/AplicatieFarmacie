import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BackgroundMode} from  '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public  isSearchbarOpened=false;
  private listItems: any;
  constructor(public navCtrl: NavController) {
    this.listItems = [{
      name:"Farmacie1",
      value:3
    },{
      name:"Farmacie2",
      value: 2
    },
  {
    name:"Farmacie3",
      value: 7 
  }];
  
  }
  
onSearch(event){
  console.log(event.target.value);
}
}
