import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "Home", component: HomeComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'AddMenu', component: AddMenuComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
