import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {


users=[];

  saveData(x : NgForm)
  {
    this.users.push(x.value);

    console.log(x.value);

  }

  constructor() { 


  }

  ngOnInit() {

    $(".btn-success").click(function(){
      $(".test").slideToggle(2000)
    })


  }

}
