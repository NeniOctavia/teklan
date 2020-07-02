import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SI UAD';

  dataS:any=[
  		{
  			nama:'Joko',
  			kelas:'3'
  		},
  			{
  			nama:'Joko 2',
  			kelas:'3'
  		},
  			{
  			nama:'Joko 3',
  			kelas:'3'
  		}
  		]
}
