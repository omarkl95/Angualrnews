import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';


const routes: Routes = [

  {path:'' , component:GalleryComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'home/:i' , component:HomeComponent},
  {path:'contact',component :ContactsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
