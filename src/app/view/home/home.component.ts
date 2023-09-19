import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   currentDate: any;
   currentTime: any;
  constructor(private router:Router, private datePipe:DatePipe) {
  }
  ngOnInit() {
    this.updateDateTime(); // Initial update
    setInterval(() => {
      this.updateDateTime(); // Update every second
    }, 1000);
  }

  private updateDateTime() {
    const currentDate = new Date();
    const currentTime = new Date();
    this.currentDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    this.currentTime = this.datePipe.transform(currentTime, 'HH:mm:ss');
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
