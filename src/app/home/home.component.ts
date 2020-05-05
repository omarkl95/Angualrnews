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

  constructor(private route: ActivatedRoute ,
    private MyServiceService:MyServiceService) {


   }



  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id) this.getDetails(id);
      });
  }
  getDetails(id:number) {
    this.MyServiceService.getNewsID()
      .subscribe(
        data=>  {
          this.homeEmps = data['items']['id'];
        console.log(this.homeEmps);
        });
  }

}
