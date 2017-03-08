import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-name',
  template: `
<body bgcolor="#2f4f4f">
    <h1 align="center">
     Welcome to Name Component
    </h1>
    <button (click)="onclick()"> Go Home </button>
    <hr>
    <h1> Chekout Name
    {{id}}
    </h1>
    </body>
      `,

  styles: [
    `
h1{color: blueviolet;}
`
  ],

})
export class NameComponent implements OnDestroy {
  private subscription: Subscription;
  private id: string;

  constructor(private router: Router, private activaterouter: ActivatedRoute) {
    this.subscription = activaterouter.params.subscribe(
      (param: any) => this.id = param['id']
    );

  }

  onclick() {
    alert("want to go home");
    this.router.navigate(['/'], {queryParams: {'Homme': 100}});
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
