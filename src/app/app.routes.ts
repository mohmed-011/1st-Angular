import { Routes } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { CONTACTComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:"" , redirectTo:"Home" , pathMatch:"full"},
  {path:"Home" , component:HOMEComponent,title:"Home"},
  {path:"About" , component:ABOUTComponent,title:"About"},
  {path:"Portfolio" , component:PORTFOLIOComponent,title:"Portfolio"},
  {path:"Contact" , component:CONTACTComponent,title:"Contact"},
  {path:"**" , component:NotFoundComponent}

];
