import { Component } from '@angular/core';
import { ArrowRightComponent } from "../icons/arrow-right/arrow-right.component";
import { SparklsComponent } from "../icons/sparkls/sparkls.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ArrowRightComponent, SparklsComponent]
})
export class HomeComponent {
  constructor(private router: Router){

  }
  openchat(){
    this.router.navigate(["chat"]);

  }

}
