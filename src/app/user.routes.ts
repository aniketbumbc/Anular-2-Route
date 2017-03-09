import {Routes} from "@angular/router";
import {UserDetailsComponent} from "./user-details.component";
import {UserEditComponent} from "./user-edit.component";


export const USER_ROUTES: Routes = [
  {path: 'details', component: UserDetailsComponent},
  {path: 'edit', component: UserEditComponent}

];
