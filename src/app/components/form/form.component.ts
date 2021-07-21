import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private routes: Router) {
   }

  enter(){
    // TODO: check login and pass
    this.routes.navigate(['home'])
  }

  ngOnInit(): void {
  }

}
