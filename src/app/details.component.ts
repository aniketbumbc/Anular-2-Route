import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  template: `
<body bgcolor="#b8860b">
    <p id="p1">
      Details (Home) Component
    </p>
    </body>
  `,
  styles: [ `
#p1{color:midnightblue;
font-family: AngsanaUPC;
font-size: 40px;

}
` ]
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
