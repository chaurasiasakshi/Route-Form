import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'post',component:PostComponent
  },
  {
    path:'reg',component:RegFormComponent,
    children:[
      {path:'form1' , component:Form1Component},
      {path:'form2' , component:Form2Component}
    ]
  },
  {
    path:'',redirectTo:"home",pathMatch:"full"
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
