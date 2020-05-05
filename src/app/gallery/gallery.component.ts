import { Component, OnInit } from '@angular/core';

import {MyServiceService} from '../my-service.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  term:string;

  // AllCountries = [{name:"Egypt",code:"eg"},
  //                 {name:"Fr" , code:"fr"},
  //               {name:"SA" ,code:"sa"}]

                galleyPosts=[];

  constructor(public _MyServiceService:MyServiceService) {

    this._MyServiceService.getNews().subscribe(data => this.galleyPosts = data.items)
    // "us"


   }
  //  ChangeCountry(chooseCode:string) //eg
  //  {
  //   this._MyServiceService.getNews(chooseCode).subscribe(data => this.galleyPosts = data.articles)
  //  }

  ngOnInit() {
  }

}
