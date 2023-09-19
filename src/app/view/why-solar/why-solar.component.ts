import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-why-solar',
  templateUrl: './why-solar.component.html',
  styleUrls: ['./why-solar.component.scss']
})
export class WhySolarComponent {
  constructor(private router:Router) {
  }
  whySolar() {
    this.router.navigate(["why-solar"]);
  }

  about() {
    this.router.navigate(["about"]);
  }

  ourServices() {
    this.router.navigate(["our-services"]);
  }

  gallery() {
    this.router.navigate(["gallery"]);
  }

  contact() {
    this.router.navigate(["contact"])
  }
}
