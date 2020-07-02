import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  dataContent:any=[
  	{
  		name:'Student 1'
  	},
  		{
  		name:'Student 2'
  	}
  ];


}
