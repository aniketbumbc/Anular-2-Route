import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NameComponent} from "./name.component";
import {DetailsComponent} from "./details.component";
import {UserComponent} from "./user.component";
/**
 * Created by aniket on 08-03-2017.
 */
const  APP_ROUTES:Routes=[
  {  path:'',component:DetailsComponent  },
  { path:'name/:id',component:NameComponent },
  {path:'user', component:UserComponent}
];

export  const routing=RouterModule.forRoot(APP_ROUTES); //add this to app module
