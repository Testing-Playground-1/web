import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import { AboutUsComponent } from './view/about-us/about-us.component';
import { WhySolarComponent } from './view/why-solar/why-solar.component';
import { OurServicesComponent } from './view/our-services/our-services.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { ContactComponent } from './view/contact/contact.component';

export const routes:Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutUsComponent
  },
  {
    path : "why-solar",
    component : WhySolarComponent
  },
  {
    path : "our-services",
    component : OurServicesComponent
  },
  {
    path : "gallery",
    component : GalleryComponent
  },
  {
    path : "contact",
    component : ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    WhySolarComponent,
    OurServicesComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgOptimizedImage

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
