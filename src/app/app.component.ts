import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private user = false

  constructor(router: Router){
    if (this.user){
      router.navigate(['/workbook'])
    }else{
      router.navigate(['/sign'])
    }
  }
}