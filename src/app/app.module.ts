import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';

import { RealSearchPipe } from './real-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    NavbarComponent,
    PageNotFoundedComponent,
    RealSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
  ],
  // AboutRoutingModule
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
