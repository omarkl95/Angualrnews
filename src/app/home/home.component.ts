import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import {MyServiceService} from '../my-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  testUser="ahmed";
  userDataNew="web"

  myDate = new Date();

  homeEmps:any={};
  avatar:any;


  constructor(private route: ActivatedRoute ,
    private MyServiceService:MyServiceService) {


   }



  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let id = params['i'];
        if (id) this.getDetails(id);
      });
  }
  getDetails(id:number) {
    this.MyServiceService.getNews()
      .subscribe(
        data=>  {
          this.homeEmps = data['items'][id];
           this.avatar= this.homeEmps['owner']['avatar_url']

        console.log(this.homeEmps);
        });
  }

}
