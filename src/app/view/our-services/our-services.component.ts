import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
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
