import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  template: `
    <h1>
      user-details Works!
    </h1>
  `,
  styles: [
    `
h1{
color: midnightblue;
}
`
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
