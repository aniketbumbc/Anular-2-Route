import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NameComponent } from './name.component';
import { DetailsComponent } from './details.component';
import {routing} from "./app.routing";
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './user-details.component';
import { UserEditComponent } from './user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    DetailsComponent,
    UserComponent,
    UserDetailsComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
