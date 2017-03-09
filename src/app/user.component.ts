import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>
      user Works!
   </p>  
    <router-outlet></router-outlet>
    `,
  styles: [
    `
#section1{
height: 100px;
width: 100px;
color: dodgerblue;
border: 2px solid brown;
}
`
  ]
})
export class UserComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
