import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  template: `
    <h1 align="center">
      user-edit Works!
    </h1>
  `,
  styles: [
    `
h1{
color: crimson;
}
`
  ]
})
export class UserEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
