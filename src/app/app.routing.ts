import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NameComponent} from "./name.component";
import {DetailsComponent} from "./details.component";
import {UserComponent} from "./user.component";
import {USER_ROUTES} from "./user.routes";
/**
 * Created by aniket on 08-03-2017.
 */
const  APP_ROUTES:Routes=[
  {path:'',component:DetailsComponent},
  {path:'name',redirectTo:'/name/aniket'},
  {path:'name/:id',component:NameComponent},
  {path:'user', component:UserComponent},
  {path:'user', component:UserComponent,children:USER_ROUTES}
];

export  const routing=RouterModule.forRoot(APP_ROUTES,{ useHash: true }); //add this to app module
