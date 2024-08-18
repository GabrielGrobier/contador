import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public numero: number = 0;

  constructor() {}

  up(){
    this.numero ++;
  }

  down(){
    this.numero--;
  }

}
